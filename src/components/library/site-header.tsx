'use client';

import { useSyncExternalStore } from 'react';
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

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5"
          aria-label="CSSFX Vault home"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-amber-400 shadow-lg shadow-violet-500/25">
            <Sparkles className="size-4.5 text-white" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            CSS<span className="bg-gradient-to-r from-fuchsia-500 to-amber-400 bg-clip-text text-transparent">FX</span>
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

      {/* Mobile search row */}
      <div className="px-4 pb-3 md:hidden">
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
    </header>
  );
}
