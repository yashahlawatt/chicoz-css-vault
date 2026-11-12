'use client';

import { useMemo, useState } from 'react';
import {
  Check,
  Code,
  Copy,
  Heart,
  MousePointer2,
  MousePointerClick,
  Play,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { CATEGORY_LABELS, type CSSEffect, type EffectHint } from '@/lib/effects';
import { CodeBlock } from './code-block';

const HINT_META: Record<EffectHint, { label: string; icon: typeof Play }> = {
  hover: { label: 'Hover', icon: MousePointer2 },
  auto: { label: 'Auto', icon: Play },
  click: { label: 'Click', icon: MousePointerClick },
};

async function writeClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      return true;
    } catch {
      return false;
    }
  }
}

interface EffectCardProps {
  effect: CSSEffect;
  index: number;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function EffectCard({ effect, index, isFavorite, onToggleFavorite }: EffectCardProps) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<'css' | 'html'>('css');
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const hint = HINT_META[effect.hint];
  const HintIcon = hint.icon;

  const code = tab === 'css' ? effect.css : effect.html;

  const highlighted = useMemo(
    () => (tab === 'css' ? 'styles.css' : 'index.html'),
    [tab],
  );

  const handleCopy = async () => {
    const ok = await writeClipboard(code);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
      toast({
        title: `${tab.toUpperCase()} copied`,
        description: `${effect.name} snippet is on your clipboard.`,
      });
    } else {
      toast({
        title: 'Copy failed',
        description: 'Your browser blocked clipboard access. Select the code manually.',
        variant: 'destructive',
      });
    }
  };

  return (
    <article
      className="cv-auto group relative flex animate-in flex-col overflow-hidden rounded-2xl border bg-card/70 fade-in-0 zoom-in-[0.98] backdrop-blur duration-300 transition-[border-color,box-shadow,transform] hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_24px_60px_-16px_rgba(139,92,246,0.28)]"
      style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
      aria-label={`${effect.name} effect`}
    >
      {/* Live demo stage */}
      <div className="efx-stage relative h-48 shrink-0 overflow-hidden border-b border-border/50 bg-[radial-gradient(ellipse_at_50%_-20%,#1c1c2a,#0b0b12_72%)]">
        {effect.fill ? (
          <div className="absolute inset-0" dangerouslySetInnerHTML={{ __html: effect.html }} />
        ) : (
          <div
            className="flex h-full items-center justify-center px-6"
            dangerouslySetInnerHTML={{ __html: effect.html }}
          />
        )}
        <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/85 backdrop-blur-sm">
          <HintIcon className="size-3" aria-hidden="true" />
          {hint.label}
        </span>
        {/* Inject the effect CSS to power the live demo */}
        <style dangerouslySetInnerHTML={{ __html: effect.css }} />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate font-semibold leading-tight">{effect.name}</h3>
            <p className="mt-0.5 text-[11px] font-medium uppercase tracking-widest text-violet-400/90">
              {CATEGORY_LABELS[effect.category]}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onToggleFavorite(effect.id)}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? `Remove ${effect.name} from favorites` : `Add ${effect.name} to favorites`}
            className={cn(
              'flex size-10 items-center justify-center rounded-full transition-colors',
              isFavorite
                ? 'text-rose-500 hover:text-rose-400'
                : 'text-muted-foreground hover:text-rose-400',
            )}
          >
            <Heart className={cn('size-4', isFavorite && 'fill-current')} aria-hidden="true" />
          </button>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {effect.description}
        </p>

        <div className="flex flex-wrap gap-1.5" aria-label="Tags">
          {effect.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-1">
          <Button
            size="sm"
            variant="secondary"
            className="h-9 gap-1.5 rounded-lg text-xs font-medium"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
          >
            <Code className="size-3.5" aria-hidden="true" />
            {open ? 'Hide code' : 'View code'}
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="h-9 gap-1.5 rounded-lg text-xs font-medium"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="size-3.5 text-emerald-500" aria-hidden="true" />
            ) : (
              <Copy className="size-3.5" aria-hidden="true" />
            )}
            Copy
          </Button>
        </div>

        {/* Collapsible code panel */}
        <div
          className={cn(
            'grid transition-all duration-300 ease-out',
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
          )}
        >
          <div className="overflow-hidden">
            <div className="mt-1 overflow-hidden rounded-xl border border-zinc-800/70">
              <div className="flex items-center justify-between bg-[#161b22] px-2.5 py-1.5">
                <div className="flex gap-1" role="tablist" aria-label="Code language">
                  {(['css', 'html'] as const).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      role="tab"
                      aria-selected={tab === lang}
                      onClick={() => setTab(lang)}
                      className={cn(
                        'rounded px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition-colors',
                        tab === lang
                          ? 'bg-white/10 text-white'
                          : 'text-zinc-400 hover:text-white',
                      )}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
                <span className="font-mono text-[11px] text-zinc-500">{highlighted}</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  aria-label={`Copy ${tab.toUpperCase()} code`}
                  className="flex items-center gap-1.5 rounded px-2 py-1 text-[11px] font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {copied ? (
                    <Check className="size-3 text-emerald-400" aria-hidden="true" />
                  ) : (
                    <Copy className="size-3" aria-hidden="true" />
                  )}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
              <CodeBlock code={code} language={tab} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
