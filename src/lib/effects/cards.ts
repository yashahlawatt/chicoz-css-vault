import type { CSSEffect } from './types';

export const CARD_EFFECTS: CSSEffect[] = [
  {
    id: 'lift-card',
    name: 'Lift & Glow Card',
    description:
      'The card floats upward on hover with a deep shadow and a violet rim light fading in.',
    category: 'cards',
    tags: ['hover', 'shadow', 'lift'],
    hint: 'hover',
    html: '<article class="efx-card-lift"><h4>Lift Card</h4><p>Hover to raise the card with a soft violet glow.</p></article>',
    css: `/* Lift & Glow Card */
.efx-card-lift {
  width: 220px;
  padding: 20px;
  border-radius: 16px;
  background: #17171f;
  border: 1px solid rgba(148, 163, 184, 0.14);
  color: #e2e8f0;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.efx-card-lift:hover {
  transform: translateY(-10px);
  border-color: rgba(167, 139, 250, 0.5);
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(167, 139, 250, 0.25),
    0 12px 32px rgba(167, 139, 250, 0.18);
}

.efx-card-lift h4 {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
}

.efx-card-lift p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #94a3b8;
}
`,
  },
  {
    id: 'flip-card',
    name: '3D Flip Card',
    description:
      'Hover rotates the card 180 degrees in real 3D space to reveal a back face.',
    category: 'cards',
    tags: ['hover', '3d', 'flip'],
    hint: 'hover',
    html: '<div class="efx-card-flip"><div class="efx-card-flip-inner"><div class="efx-card-flip-face efx-card-flip-front"><span>Front</span></div><div class="efx-card-flip-face efx-card-flip-back"><span>Back</span></div></div></div>',
    css: `/* 3D Flip Card */
.efx-card-flip {
  width: 200px;
  height: 140px;
  perspective: 900px;
  cursor: pointer;
}

.efx-card-flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0.1, 0.2, 1);
}

.efx-card-flip:hover .efx-card-flip-inner {
  transform: rotateY(180deg);
}

.efx-card-flip-face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  font-weight: 700;
  font-size: 17px;
}

.efx-card-flip-front {
  background: linear-gradient(135deg, #f472b6, #a78bfa);
  color: #1e1b2e;
}

.efx-card-flip-back {
  background: #17171f;
  border: 1px solid rgba(167, 139, 250, 0.45);
  color: #e2e8f0;
  transform: rotateY(180deg);
}
`,
  },
  {
    id: 'glow-border-card',
    name: 'Rotating Glow Border',
    description:
      'A conic gradient orbits the card rim using an animated CSS custom property.',
    category: 'cards',
    tags: ['gradient', 'border', 'property'],
    hint: 'auto',
    html: '<div class="efx-card-glow"><div class="efx-card-glow-inner"><h4>Glow Border</h4><p>A conic gradient travels the border forever.</p></div></div>',
    css: `/* Rotating Glow Border */
@property --efx-glow-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.efx-card-glow {
  width: 220px;
  padding: 2px;
  border-radius: 16px;
  background: conic-gradient(
    from var(--efx-glow-angle),
    #f472b6,
    #a78bfa,
    #fbbf24,
    #4ade80,
    #f472b6
  );
  animation: efx-glow-rotate 4s linear infinite;
}

.efx-card-glow-inner {
  padding: 20px;
  border-radius: 14px;
  background: #14141c;
  color: #e2e8f0;
}

.efx-card-glow-inner h4 {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
}

.efx-card-glow-inner p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #94a3b8;
}

@keyframes efx-glow-rotate {
  to {
    --efx-glow-angle: 360deg;
  }
}
`,
  },
  {
    id: 'tilt-card',
    name: 'Perspective Tilt Card',
    description:
      'The card leans in 3D on hover while a diagonal sheen sweeps across its surface.',
    category: 'cards',
    tags: ['hover', '3d', 'perspective'],
    hint: 'hover',
    html: '<article class="efx-card-tilt"><h4>Tilt Card</h4><p>Hover to lean the card and catch the light.</p></article>',
    css: `/* Perspective Tilt Card */
.efx-card-tilt {
  position: relative;
  overflow: hidden;
  width: 210px;
  padding: 22px;
  border-radius: 16px;
  background: linear-gradient(145deg, #1c1c26, #131319);
  border: 1px solid rgba(148, 163, 184, 0.16);
  color: #e2e8f0;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  transform: perspective(700px) rotateX(0deg) rotateY(0deg);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
}

.efx-card-tilt::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(240deg, rgba(255, 255, 255, 0.16), transparent 45%);
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

.efx-card-tilt:hover {
  transform: perspective(700px) rotateX(8deg) rotateY(-10deg) translateY(-4px);
  box-shadow: -14px 22px 40px rgba(0, 0, 0, 0.5);
}

.efx-card-tilt:hover::after {
  opacity: 1;
}

.efx-card-tilt h4 {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
}

.efx-card-tilt p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #94a3b8;
}
`,
  },
];
