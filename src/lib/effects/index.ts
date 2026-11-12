import type { CSSEffect, EffectCategory } from './types';
import { CATEGORIES } from './types';
import { BUTTON_EFFECTS } from './buttons';
import { LOADER_EFFECTS } from './loaders';
import { TEXT_EFFECTS } from './text';
import { BACKGROUND_EFFECTS } from './backgrounds';
import { CARD_EFFECTS } from './cards';
import { MISC_EFFECTS } from './misc';

export type { CSSEffect, EffectCategory } from './types';
export { CATEGORIES, CATEGORY_LABELS } from './types';

export const ALL_EFFECTS: CSSEffect[] = [
  ...BUTTON_EFFECTS,
  ...LOADER_EFFECTS,
  ...TEXT_EFFECTS,
  ...BACKGROUND_EFFECTS,
  ...CARD_EFFECTS,
  ...MISC_EFFECTS,
];

export function countByCategory(category: EffectCategory): number {
  return ALL_EFFECTS.filter((e) => e.category === category).length;
}

export { CATEGORIES as CATEGORY_LIST };
