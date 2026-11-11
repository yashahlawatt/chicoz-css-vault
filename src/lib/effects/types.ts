export type EffectCategory =
  | 'buttons'
  | 'loaders'
  | 'text'
  | 'backgrounds'
  | 'cards'
  | 'misc';

export type EffectHint = 'hover' | 'auto' | 'click';

export interface CSSEffect {
  /** Unique slug, also used as favorite key */
  id: string;
  name: string;
  description: string;
  category: EffectCategory;
  tags: string[];
  /** Full CSS source shown to the user and injected to power the live demo */
  css: string;
  /** HTML snippet shown to the user and injected inside the demo stage */
  html: string;
  /** When true the demo layer fills the whole preview stage (background effects) */
  fill?: boolean;
  /** What the visitor should do to see the effect */
  hint: EffectHint;
}

export interface CategoryMeta {
  id: EffectCategory;
  label: string;
  blurb: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    id: 'buttons',
    label: 'Buttons',
    blurb: 'Hover states, glow borders, 3D presses and liquid fills.',
  },
  {
    id: 'loaders',
    label: 'Loaders',
    blurb: 'Spinners, pulses and progress indicators built with keyframes.',
  },
  {
    id: 'text',
    label: 'Text Effects',
    blurb: 'Gradients, glitch, neon and shimmering typography.',
  },
  {
    id: 'backgrounds',
    label: 'Backgrounds',
    blurb: 'Animated meshes, grids, auroras and drifting patterns.',
  },
  {
    id: 'cards',
    label: 'Cards & Panels',
    blurb: '3D flips, tilts, lift shadows and rotating glow borders.',
  },
  {
    id: 'misc',
    label: 'Utilities',
    blurb: 'Tooltips, toggles, glassmorphism and avatar rings.',
  },
];

export const CATEGORY_LABELS: Record<EffectCategory, string> = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.label]),
) as Record<EffectCategory, string>;
