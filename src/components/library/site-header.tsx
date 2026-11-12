'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Search, Sun, Moon, Sparkles, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/** Hydration-safe "is mounted" flag without setState-in-effect. */
const emptySubscribe = () => () => {};
function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

interface SiteHeaderProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export function SiteHeader({ query, onQueryChange }: SiteHeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = mounted ? resolvedTheme !== 'light' : true;

  // Mobile ergonomics: the search row collapses while the user scrolls down
  // (reclaiming ~50px of viewport) and slides back on scroll-up or near the
  // top. Desktop never sees this row (md:hidden), so no listener churn there.
  const [searchCollapsed, setSearchCollapsed] = useState(false);
  const searchFocusedRef = useRef(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < 96) {
          setSearchCollapsed(false);
        } else if (Math.abs(y - lastY) > 6 && !searchFocusedRef.current) {
          setSearchCollapsed(y > lastY);
        }
        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="safe-top sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5"
          aria-label="CHICOZ CSS VAULT home"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-amber-400 shadow-lg shadow-violet-500/25">
            <Sparkles className="size-4.5 text-white" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold uppercase tracking-wide">
            CHICOZ <span className="bg-gradient-to-r from-fuchsia-500 to-amber-400 bg-clip-text text-transparent">CSS</span>
            <span className="ml-1.5 hidden text-xs font-medium uppercase tracking-widest text-muted-foreground sm:inline">
              Vault
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <div className="relative hidden w-72 md:block">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') onQueryChange('');
              }}
              placeholder="Search effects, tags..."
              aria-label="Search effects"
              className="h-10 rounded-xl bg-muted/50 pl-9 pr-9"
            />
            {query && (
              <button
                type="button"
                onClick={() => onQueryChange('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-3.5" aria-hidden="true" />
              </button>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="size-10 rounded-xl"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
          >
            {mounted ? (
              isDark ? (
                <Sun className="size-4.5" aria-hidden="true" />
              ) : (
                <Moon className="size-4.5" aria-hidden="true" />
              )
            ) : (
              <Sun className={cn('size-4.5 opacity-0')} aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile search row — collapses on scroll-down to keep the sticky
          header compact; reveal on scroll-up, near top, or while focused */}
      <div
        aria-hidden={searchCollapsed}
        className={cn(
          'overflow-hidden transition-[max-height,opacity] duration-300 ease-out md:hidden',
          searchCollapsed
            ? 'pointer-events-none max-h-0 opacity-0'
            : 'max-h-24 opacity-100',
        )}
      >
        <div className="px-4 pb-3">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') onQueryChange('');
              }}
              onFocus={() => {
                searchFocusedRef.current = true;
                setSearchCollapsed(false);
              }}
              onBlur={() => {
                searchFocusedRef.current = false;
              }}
              tabIndex={searchCollapsed ? -1 : 0}
              placeholder="Search effects, tags..."
              aria-label="Search effects"
              className="h-10 rounded-xl bg-muted/50 pl-9 pr-9"
            />
            {query && (
              <button
                type="button"
                onClick={() => onQueryChange('')}
                aria-label="Clear search"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
