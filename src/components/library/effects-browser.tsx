'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  Heart,
  Layers,
  Loader2,
  MousePointerClick,
  Palette,
  SearchX,
  Shapes,
  Type,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import {
  ALL_EFFECTS,
  CATEGORIES,
  CATEGORY_LABELS,
  type EffectCategory,
} from '@/lib/effects';
import { EffectCard } from './effect-card';

const CATEGORY_ICONS: Record<EffectCategory, typeof Layers> = {
  buttons: MousePointerClick,
  loaders: Loader2,
  text: Type,
  backgrounds: Palette,
  cards: Layers,
  misc: Shapes,
};

type Filter = 'all' | 'favorites' | EffectCategory;

const FAVORITES_KEY = 'cssfx-favorites';

interface EffectsBrowserProps {
  query: string;
  category: Filter;
  onCategoryChange: (category: Filter) => void;
}

export function EffectsBrowser({ query, category, onCategoryChange }: EffectsBrowserProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { toast } = useToast();

  // Load favorites: the API is the source of truth; localStorage is the
  // offline fallback (both updates happen in async callbacks, never during
  // the synchronous effect body).
  useEffect(() => {
    let cancelled = false;

    const merge = (ids: string[]) => {
      setFavorites((prev) => {
        const merged = Array.from(new Set([...prev, ...ids]));
        try {
          localStorage.setItem(FAVORITES_KEY, JSON.stringify(merged));
        } catch {
          /* ignore */
        }
        return merged;
      });
    };

    fetch('/api/favorites')
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { favorites?: string[] } | null) => {
        if (cancelled) return;
        if (data?.favorites?.length) {
          merge(data.favorites);
          return;
        }
        // No server data yet — hydrate from the offline cache.
        try {
          const raw = localStorage.getItem(FAVORITES_KEY);
          if (raw) {
            const local = JSON.parse(raw) as string[];
            if (Array.isArray(local) && local.length) merge(local);
          }
        } catch {
          /* ignore corrupted storage */
        }
      })
      .catch(() => {
        if (cancelled) return;
        try {
          const raw = localStorage.getItem(FAVORITES_KEY);
          if (raw) {
            const local = JSON.parse(raw) as string[];
            if (Array.isArray(local) && local.length) merge(local);
          }
        } catch {
          /* ignore corrupted storage */
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const toggleFavorite = (id: string) => {
    const willAdd = !favorites.includes(id);
    const next = willAdd ? [...favorites, id] : favorites.filter((f) => f !== id);
    setFavorites(next);
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    fetch('/api/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ effectId: id, favorite: willAdd }),
    }).catch(() => {
      /* silently keep localStorage as source of truth */
    });
    toast({
      title: willAdd ? 'Added to favorites' : 'Removed from favorites',
      description: willAdd
        ? `"${ALL_EFFECTS.find((e) => e.id === id)?.name}" saved.`
        : undefined,
    });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_EFFECTS.filter((e) => {
      const inCategory =
        category === 'all'
          ? true
          : category === 'favorites'
            ? favorites.includes(e.id)
            : e.category === category;
      if (!inCategory) return false;
      if (!q) return true;
      return (
        e.name.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        CATEGORY_LABELS[e.category].toLowerCase().includes(q) ||
        e.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, category, favorites]);

  const counts = useMemo(() => {
    const map = new Map<Filter, number>([['all', ALL_EFFECTS.length]]);
    for (const c of CATEGORIES) {
      map.set(c.id, ALL_EFFECTS.filter((e) => e.category === c.id).length);
    }
    return map;
  }, []);

  const pills: { id: Filter; label: string; count: number | null }[] = [
    { id: 'all', label: 'All', count: counts.get('all') ?? 0 },
    ...CATEGORIES.map((c) => ({
      id: c.id as Filter,
      label: c.label,
      count: counts.get(c.id) ?? 0,
    })),
    { id: 'favorites', label: 'Favorites', count: favorites.length || null },
  ];

  return (
    <div>
      {/* Category pills */}
      <div
        className="flex flex-wrap items-center gap-2"
        role="group"
        aria-label="Filter effects by category"
      >
        {pills.map((pill) => {
          const Icon = pill.id === 'favorites' ? Heart : pill.id === 'all' ? Layers : CATEGORY_ICONS[pill.id as EffectCategory];
          const active = category === pill.id;
          return (
            <button
              key={pill.id}
              type="button"
              onClick={() => onCategoryChange(pill.id)}
              aria-pressed={active}
              className={cn(
                'flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200',
                active
                  ? 'border-transparent bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white shadow-md shadow-violet-500/25'
                  : 'border-border/70 bg-transparent text-muted-foreground hover:border-violet-500/40 hover:text-foreground',
              )}
            >
              <Icon
                className={cn('size-3.5', pill.id === 'favorites' && active && 'fill-current')}
                aria-hidden="true"
              />
              {pill.label}
              {pill.count !== null && (
                <span
                  className={cn(
                    'ml-0.5 rounded-full px-1.5 py-px text-[10px] leading-4',
                    active ? 'bg-white/20 text-white' : 'bg-muted text-muted-foreground',
                  )}
                >
                  {pill.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Result meta */}
      <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
        Showing <span className="font-semibold text-foreground">{filtered.length}</span> of{' '}
        {ALL_EFFECTS.length} effects
        {query.trim() ? (
          <>
            {' '}
            matching <span className="font-medium text-foreground">&ldquo;{query.trim()}&rdquo;</span>
          </>
        ) : null}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((effect, i) => (
            <EffectCard
              key={effect.id}
              effect={effect}
              index={i}
              isFavorite={favorites.includes(effect.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/70 py-20 text-center">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-muted">
            <SearchX className="size-6 text-muted-foreground" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-lg font-semibold">No effects found</h3>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            {category === 'favorites' && !query.trim()
              ? 'You have not favorited any effects yet. Click the heart on any card to save it here.'
              : 'Try a different keyword or category — or reset the filters below.'}
          </p>
          <Button
            variant="outline"
            size="sm"
            className="mt-5 rounded-lg"
            onClick={() => {
              onCategoryChange('all');
              window.dispatchEvent(new CustomEvent('cssfx:clear-search'));
            }}
          >
            Reset filters
          </Button>
        </div>
      )}
    </div>
  );
}
