'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Dices, Layers, Wand2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  total: number;
  categoryCount: number;
  onBrowse: () => void;
  onRandom: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 * i, ease: [0.21, 0.6, 0.35, 1] as const },
  }),
};

export function Hero({ total, categoryCount, onBrowse, onRandom }: HeroProps) {
  return (
    <section className="relative overflow-hidden" aria-label="Introduction">
      {/* Decorative background layers */}
      <div className="hero-grid" aria-hidden="true" />
      <div
        className="hero-blob left-[-10%] top-[-20%] size-[420px] bg-violet-500/40"
        style={{ animation: 'hero-float 13s ease-in-out infinite' }}
        aria-hidden="true"
      />
      <div
        className="hero-blob right-[-8%] top-[10%] size-[360px] bg-fuchsia-500/30"
        style={{ animation: 'hero-float 16s ease-in-out 2s infinite reverse' }}
        aria-hidden="true"
      />
      <div
        className="hero-blob bottom-[-30%] left-[30%] size-[380px] bg-amber-400/20"
        style={{ animation: 'hero-float 18s ease-in-out 4s infinite' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 text-center sm:px-6 sm:pb-20 sm:pt-24">
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-medium text-violet-300 dark:text-violet-300">
            <Wand2 className="size-3.5" aria-hidden="true" />
            Hand-crafted snippets, zero JavaScript required
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl"
        >
          Pure CSS effects,
          <br />
          <span className="hero-gradient-text">ready to copy &amp; ship.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          A growing vault of {total}+ live-demonstrated CSS effects — buttons, loaders,
          typography, backgrounds and more. Preview it, copy it, paste it into your project.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            size="lg"
            onClick={onBrowse}
            className="h-12 gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.03]"
          >
            Browse the library
            <ArrowDown className="size-4" aria-hidden="true" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onRandom}
            className="h-12 gap-2 rounded-xl border-border/80 px-6 text-sm font-semibold"
          >
            <Dices className="size-4" aria-hidden="true" />
            Surprise me
          </Button>
        </motion.div>

        <motion.dl
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          <div className="rounded-2xl border border-border/60 bg-card/50 px-6 py-4 backdrop-blur">
            <dt className="sr-only">Total effects</dt>
            <dd className="flex items-center justify-center gap-2 text-2xl font-bold">
              <Zap className="size-5 text-amber-400" aria-hidden="true" />
              {total}
            </dd>
            <dd className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
              Effects &amp; counting
            </dd>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/50 px-6 py-4 backdrop-blur">
            <dt className="sr-only">Categories</dt>
            <dd className="flex items-center justify-center gap-2 text-2xl font-bold">
              <Layers className="size-5 text-fuchsia-400" aria-hidden="true" />
              {categoryCount}
            </dd>
            <dd className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
              Categories
            </dd>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/50 px-6 py-4 backdrop-blur">
            <dt className="sr-only">Technology</dt>
            <dd className="flex items-center justify-center gap-2 text-2xl font-bold">
              <span className="hero-gradient-text">100%</span>
            </dd>
            <dd className="mt-0.5 text-xs uppercase tracking-widest text-muted-foreground">
              Pure CSS, no deps
            </dd>
          </div>
        </motion.dl>
      </div>
    </section>
  );
}
