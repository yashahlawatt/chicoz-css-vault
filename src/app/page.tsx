'use client';

import { useCallback, useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ALL_EFFECTS, CATEGORIES, CATEGORY_LABELS, type EffectCategory } from '@/lib/effects';
import { SiteHeader } from '@/components/library/site-header';
import { Hero } from '@/components/library/hero';
import { EffectsBrowser } from '@/components/library/effects-browser';
import { SiteFooter } from '@/components/library/site-footer';

type Filter = 'all' | 'favorites' | EffectCategory;

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Filter>('all');
  const { toast } = useToast();

  // Listen for "reset filters" requests coming from the browser empty state.
  useEffect(() => {
    const clear = () => setQuery('');
    window.addEventListener('chico-css:clear-search', clear);
    return () => window.removeEventListener('chico-css:clear-search', clear);
  }, []);

  const scrollToLibrary = useCallback(() => {
    document.getElementById('library')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleRandom = useCallback(() => {
    const ids = CATEGORIES.map((c) => c.id);
    const pick = ids[Math.floor(Math.random() * ids.length)];
    setCategory(pick);
    scrollToLibrary();
    toast({
      title: `Category: ${CATEGORY_LABELS[pick]}`,
      description: 'The dice picked a fresh set of effects for you.',
    });
  }, [scrollToLibrary, toast]);

  const handleFooterCategory = useCallback(
    (c: EffectCategory) => {
      setCategory(c);
      scrollToLibrary();
    },
    [scrollToLibrary],
  );

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader query={query} onQueryChange={setQuery} />

      <main className="flex-1">
        <Hero
          total={ALL_EFFECTS.length}
          categoryCount={CATEGORIES.length}
          onBrowse={scrollToLibrary}
          onRandom={handleRandom}
        />

        <section
          id="library"
          className="relative mx-auto w-full max-w-7xl scroll-mt-24 px-4 pb-24 sm:px-6"
          aria-label="Effect library"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">The Library</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Every card below is a live demonstration running on the exact CSS shown inside it.
              Expand a card to grab the CSS or the HTML — no frameworks, no build steps.
            </p>
          </div>

          <EffectsBrowser query={query} category={category} onCategoryChange={setCategory} />
        </section>
      </main>

      <SiteFooter onCategory={handleFooterCategory} />
    </div>
  );
}
