'use client';

import { Sparkles } from 'lucide-react';
import { CATEGORIES, CATEGORY_LABELS, type EffectCategory } from '@/lib/effects';

interface SiteFooterProps {
  onCategory: (category: EffectCategory) => void;
}

export function SiteFooter({ onCategory }: SiteFooterProps) {
  return (
    <footer className="mt-auto border-t border-border/60 bg-background/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6 pb-[max(2rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 via-violet-500 to-amber-400">
            <Sparkles className="size-3.5 text-white" aria-hidden="true" />
          </span>
          <span>
            <strong className="font-semibold text-foreground">Chico CSS Vault</strong> — pure CSS
            effects, demonstrated live.
          </span>
        </div>

        <nav aria-label="Effect categories">
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => onCategory(c.id)}
                  className="rounded px-1 py-0.5 transition-colors hover:text-foreground"
                >
                  {CATEGORY_LABELS[c.id]}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
