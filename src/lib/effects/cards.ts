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
  {
    id: 'reveal-card',
    name: 'Reveal Cover Card',
    description:
      'A gradient cover slides upward on hover to unveil the content hiding underneath.',
    category: 'cards',
    tags: ['hover', 'overlay', 'reveal'],
    hint: 'hover',
    html: '<div class="efx-card-reveal"><div class="efx-card-reveal-content"><h4>Reveal Card</h4><p>A secret hides under the cover.</p></div><div class="efx-card-reveal-cover"><span>Hover to unveil</span></div></div>',
    css: `/* Reveal Cover Card */
.efx-card-reveal {
  position: relative;
  overflow: hidden;
  width: 220px;
  height: 140px;
  border-radius: 16px;
  background: #17171f;
  border: 1px solid rgba(148, 163, 184, 0.16);
  color: #e2e8f0;
  cursor: pointer;
}

.efx-card-reveal-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 20px;
  text-align: center;
}

.efx-card-reveal-content h4 {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
}

.efx-card-reveal-content p {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: #94a3b8;
}

.efx-card-reveal-cover {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #818cf8, #38bdf8);
  color: #0b1120;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
}

.efx-card-reveal:hover .efx-card-reveal-cover {
  transform: translateY(-105%);
}
`,
  },
  {
    id: 'shine-card',
    name: 'Shine Sweep Card',
    description:
      'A diagonal band of light sweeps across the surface every time you hover.',
    category: 'cards',
    tags: ['hover', 'shine', 'sweep'],
    hint: 'hover',
    html: '<article class="efx-card-shine"><h4>Shine Card</h4><p>Hover to sweep a band of light across the surface.</p></article>',
    css: `/* Shine Sweep Card */
.efx-card-shine {
  position: relative;
  overflow: hidden;
  width: 220px;
  padding: 22px;
  border-radius: 16px;
  background: linear-gradient(150deg, #1a1a24, #12121a);
  border: 1px solid rgba(148, 163, 184, 0.16);
  color: #e2e8f0;
  cursor: pointer;
  transition: border-color 0.4s ease;
}

.efx-card-shine::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
  background: linear-gradient(
    100deg,
    transparent 0%,
    rgba(255, 255, 255, 0.26) 50%,
    transparent 100%
  );
  transform: translateX(-170%) skewX(-20deg);
  transition: transform 0.85s ease;
  pointer-events: none;
}

.efx-card-shine:hover {
  border-color: rgba(148, 163, 184, 0.4);
}

.efx-card-shine:hover::after {
  transform: translateX(350%) skewX(-20deg);
}

.efx-card-shine h4 {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
}

.efx-card-shine p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #94a3b8;
}
`,
  },
  {
    id: 'stack-card',
    name: 'Stacked Layers Card',
    description:
      'Two ghost layers peek out from behind and fan apart when the card is hovered.',
    category: 'cards',
    tags: ['hover', 'layers', 'stack'],
    hint: 'hover',
    html: '<div class="efx-card-stack"><div class="efx-card-stack-inner"><h4>Stack Card</h4><p>Hover to fan out the hidden layers.</p></div></div>',
    css: `/* Stacked Layers Card */
.efx-card-stack {
  position: relative;
  width: 220px;
  cursor: pointer;
}

.efx-card-stack::before,
.efx-card-stack::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  border-radius: 16px;
  background: #20202c;
  border: 1px solid rgba(148, 163, 184, 0.16);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.efx-card-stack::before {
  transform: rotate(-3deg) translateY(2px);
}

.efx-card-stack::after {
  transform: rotate(3deg) translateY(2px);
}

.efx-card-stack:hover::before {
  transform: rotate(-7deg) translate(-14px, 6px);
}

.efx-card-stack:hover::after {
  transform: rotate(7deg) translate(14px, 6px);
}

.efx-card-stack-inner {
  position: relative;
  padding: 22px;
  border-radius: 16px;
  background: #17171f;
  border: 1px solid rgba(148, 163, 184, 0.22);
  color: #e2e8f0;
  transition:
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.4s ease;
}

.efx-card-stack:hover .efx-card-stack-inner {
  transform: translateY(-6px);
  border-color: rgba(167, 139, 250, 0.45);
}

.efx-card-stack-inner h4 {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
}

.efx-card-stack-inner p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #94a3b8;
}
`,
  },
  {
    id: 'spotlight-card',
    name: 'Spotlight Border Card',
    description:
      'Hovering powers a warm light that slowly drifts across the card and brightens the border.',
    category: 'cards',
    tags: ['hover', 'glow', 'border'],
    hint: 'hover',
    html: '<article class="efx-card-spotlight"><h4>Spotlight Card</h4><p>Hover to switch on the drifting light.</p></article>',
    css: `/* Spotlight Border Card */
.efx-card-spotlight {
  position: relative;
  overflow: hidden;
  width: 220px;
  padding: 22px;
  border-radius: 16px;
  background: #14141d;
  border: 1px solid rgba(148, 163, 184, 0.16);
  color: #e2e8f0;
  cursor: pointer;
  transition:
    border-color 0.4s ease,
    box-shadow 0.4s ease;
}

.efx-card-spotlight::before {
  content: "";
  position: absolute;
  top: -40%;
  left: -50%;
  width: 200%;
  height: 180%;
  background: radial-gradient(
    closest-side,
    rgba(250, 204, 21, 0.16),
    transparent 72%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.efx-card-spotlight:hover {
  border-color: rgba(250, 204, 21, 0.5);
  box-shadow:
    0 14px 34px rgba(0, 0, 0, 0.45),
    0 0 26px rgba(250, 204, 21, 0.12);
}

.efx-card-spotlight:hover::before {
  opacity: 1;
  animation: efx-kc-spot-drift 3.4s ease-in-out infinite alternate;
}

.efx-card-spotlight h4 {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
}

.efx-card-spotlight p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #94a3b8;
}

@keyframes efx-kc-spot-drift {
  from {
    transform: translateX(-11%);
  }
  to {
    transform: translateX(11%);
  }
}
`,
  },
  {
    id: 'frost-card',
    name: 'Frosted Glass Card',
    description:
      'Frosted glass sharpens on hover while blurred color blobs drift behind it.',
    category: 'cards',
    tags: ['hover', 'glass', 'blur'],
    hint: 'hover',
    html: '<div class="efx-card-frost"><span class="efx-card-frost-blob efx-card-frost-blob-a"></span><span class="efx-card-frost-blob efx-card-frost-blob-b"></span><div class="efx-card-frost-panel"><h4>Frost Card</h4><p>Hover to sharpen the glass.</p></div></div>',
    css: `/* Frosted Glass Card */
.efx-card-frost {
  position: relative;
  overflow: hidden;
  width: 220px;
  height: 140px;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.16);
  color: #e2e8f0;
  cursor: pointer;
}

.efx-card-frost-blob {
  position: absolute;
  width: 130px;
  height: 130px;
  border-radius: 50%;
}

.efx-card-frost-blob-a {
  top: -34px;
  left: -26px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.8), transparent 70%);
  animation: efx-kc-frost-drift 6s ease-in-out infinite alternate;
}

.efx-card-frost-blob-b {
  right: -30px;
  bottom: -44px;
  background: radial-gradient(circle, rgba(244, 114, 182, 0.75), transparent 70%);
  animation: efx-kc-frost-drift 8s ease-in-out infinite alternate-reverse;
}

.efx-card-frost-panel {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition:
    backdrop-filter 0.45s ease,
    -webkit-backdrop-filter 0.45s ease,
    background 0.45s ease;
}

.efx-card-frost:hover .efx-card-frost-panel {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(2px) saturate(1.4);
  -webkit-backdrop-filter: blur(2px) saturate(1.4);
}

.efx-card-frost-panel h4 {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
}

.efx-card-frost-panel p {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: #cbd5e1;
}

@keyframes efx-kc-frost-drift {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(18px, -14px) scale(1.18);
  }
}
`,
  },
  {
    id: 'slideup-card',
    name: 'Slide-Up Footer Card',
    description:
      'A hidden footer panel rises from the bottom edge of the card on hover.',
    category: 'cards',
    tags: ['hover', 'footer', 'slide'],
    hint: 'hover',
    html: '<div class="efx-card-slideup"><h4>Slide-Up Panel</h4><p>Hover to raise the hidden footer docked below.</p><div class="efx-card-slideup-foot"><span>More details →</span></div></div>',
    css: `/* Slide-Up Footer Card */
.efx-card-slideup {
  position: relative;
  overflow: hidden;
  width: 220px;
  height: 140px;
  padding: 20px;
  border-radius: 16px;
  background: linear-gradient(160deg, #1b1b27, #12121a);
  border: 1px solid rgba(148, 163, 184, 0.16);
  color: #e2e8f0;
  cursor: pointer;
}

.efx-card-slideup-foot {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 12px 20px;
  background: rgba(52, 211, 153, 0.12);
  border-top: 1px solid rgba(52, 211, 153, 0.4);
  color: #6ee7b7;
  font-size: 12px;
  font-weight: 600;
  transform: translateY(102%);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.efx-card-slideup:hover .efx-card-slideup-foot {
  transform: translateY(0);
}

.efx-card-slideup h4 {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
}

.efx-card-slideup p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #94a3b8;
}
`,
  },
  {
    id: 'brackets-card',
    name: 'Neon Brackets Card',
    description:
      'Cyan corner brackets expand outward with a neon glow when the card is hovered.',
    category: 'cards',
    tags: ['hover', 'neon', 'corners'],
    hint: 'hover',
    html: '<div class="efx-card-brackets"><span class="efx-card-brackets-alt"></span><h4>Neon Brackets</h4><p>Hover to expand the cyan corners.</p></div>',
    css: `/* Neon Brackets Card */
.efx-card-brackets {
  position: relative;
  width: 220px;
  padding: 22px;
  border-radius: 12px;
  background: #13131c;
  border: 1px solid rgba(148, 163, 184, 0.14);
  color: #e2e8f0;
  cursor: pointer;
  transition:
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.efx-card-brackets-alt {
  display: block;
}

.efx-card-brackets::before,
.efx-card-brackets::after,
.efx-card-brackets-alt::before,
.efx-card-brackets-alt::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border: 0 solid rgba(34, 211, 238, 0.55);
  transition:
    top 0.35s ease,
    right 0.35s ease,
    bottom 0.35s ease,
    left 0.35s ease,
    width 0.35s ease,
    height 0.35s ease,
    border-color 0.35s ease,
    filter 0.35s ease;
}

.efx-card-brackets::before {
  top: 10px;
  left: 10px;
  border-top-width: 2px;
  border-left-width: 2px;
}

.efx-card-brackets::after {
  top: auto;
  right: 10px;
  bottom: 10px;
  border-right-width: 2px;
  border-bottom-width: 2px;
}

.efx-card-brackets-alt::before {
  top: 10px;
  right: 10px;
  border-top-width: 2px;
  border-right-width: 2px;
}

.efx-card-brackets-alt::after {
  top: auto;
  bottom: 10px;
  left: 10px;
  border-bottom-width: 2px;
  border-left-width: 2px;
}

.efx-card-brackets:hover {
  border-color: rgba(34, 211, 238, 0.35);
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.12);
}

.efx-card-brackets:hover::before,
.efx-card-brackets:hover::after,
.efx-card-brackets:hover .efx-card-brackets-alt::before,
.efx-card-brackets:hover .efx-card-brackets-alt::after {
  width: 32px;
  height: 32px;
  border-color: #22d3ee;
  filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.7));
}

.efx-card-brackets:hover::before {
  top: 4px;
  left: 4px;
}

.efx-card-brackets:hover::after {
  right: 4px;
  bottom: 4px;
}

.efx-card-brackets:hover .efx-card-brackets-alt::before {
  top: 4px;
  right: 4px;
}

.efx-card-brackets:hover .efx-card-brackets-alt::after {
  bottom: 4px;
  left: 4px;
}

.efx-card-brackets h4 {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
}

.efx-card-brackets p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #94a3b8;
}
`,
  },
  {
    id: 'vflip-card',
    name: 'Vertical Flip Card',
    description:
      'Hover flips the card upward around the X axis to reveal a hidden message.',
    category: 'cards',
    tags: ['hover', '3d', 'flip'],
    hint: 'hover',
    html: '<div class="efx-card-vflip"><div class="efx-card-vflip-inner"><div class="efx-card-vflip-face efx-card-vflip-front"><span>Vertical Flip</span></div><div class="efx-card-vflip-face efx-card-vflip-back"><span>Revealed!</span></div></div></div>',
    css: `/* Vertical Flip Card */
.efx-card-vflip {
  width: 200px;
  height: 140px;
  perspective: 900px;
  cursor: pointer;
}

.efx-card-vflip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0.1, 0.2, 1);
}

.efx-card-vflip:hover .efx-card-vflip-inner {
  transform: rotateX(180deg);
}

.efx-card-vflip-face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 16px;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
}

.efx-card-vflip-front {
  background: linear-gradient(160deg, #1d1d29, #13131c);
  border: 1px solid rgba(45, 212, 191, 0.45);
  color: #5eead4;
}

.efx-card-vflip-back {
  background: linear-gradient(160deg, #2dd4bf, #0ea5e9);
  color: #0f172a;
  transform: rotateX(180deg);
}
`,
  },
  {
    id: 'blob-card',
    name: 'Morphing Blob Card',
    description:
      'The border-radius morphs forever like a lava-lamp blob, no interaction needed.',
    category: 'cards',
    tags: ['auto', 'morph', 'organic'],
    hint: 'auto',
    html: '<div class="efx-card-blob"><h4>Blob Card</h4><p>Border-radius morphs forever, no hover needed.</p></div>',
    css: `/* Morphing Blob Card */
.efx-card-blob {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 210px;
  height: 140px;
  padding: 24px;
  background: linear-gradient(
    140deg,
    rgba(129, 140, 248, 0.28),
    rgba(244, 114, 182, 0.2)
  );
  border: 1px solid rgba(165, 180, 252, 0.4);
  color: #e2e8f0;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.4);
  animation: efx-kc-blob-morph 9s ease-in-out infinite;
  transition: box-shadow 0.4s ease;
}

.efx-card-blob:hover {
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.5),
    0 0 28px rgba(129, 140, 248, 0.25);
}

.efx-card-blob h4 {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
}

.efx-card-blob p {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: #c7d2fe;
}

@keyframes efx-kc-blob-morph {
  0%,
  100% {
    border-radius: 58% 42% 55% 45% / 48% 55% 45% 52%;
  }
  25% {
    border-radius: 44% 56% 40% 60% / 56% 44% 60% 40%;
  }
  50% {
    border-radius: 55% 45% 62% 38% / 42% 58% 42% 58%;
  }
  75% {
    border-radius: 40% 60% 46% 54% / 60% 42% 54% 46%;
  }
}
`,
  },
  {
    id: 'wipe-card',
    name: 'Hold-to-Fill Card',
    description:
      'Press and hold to wipe a mint gradient across the card, release to drain it.',
    category: 'cards',
    tags: ['click', 'fill', 'progress'],
    hint: 'click',
    html: '<div class="efx-card-wipe"><div class="efx-card-wipe-body"><h4>Hold to Fill</h4><p>Press and hold to charge the card.</p></div></div>',
    css: `/* Hold-to-Fill Card */
.efx-card-wipe {
  position: relative;
  overflow: hidden;
  width: 220px;
  height: 130px;
  border-radius: 16px;
  background: #16161f;
  border: 1px solid rgba(148, 163, 184, 0.16);
  color: #e2e8f0;
  cursor: pointer;
  transition: border-color 0.4s ease;
}

.efx-card-wipe::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #34d399, #22d3ee);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 1.5s linear;
}

.efx-card-wipe:active {
  border-color: rgba(52, 211, 153, 0.5);
}

.efx-card-wipe:active::before {
  transform: scaleX(1);
}

.efx-card-wipe-body {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  transition: color 0.5s ease;
}

.efx-card-wipe-body h4 {
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
}

.efx-card-wipe-body p {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  color: #94a3b8;
  transition: color 0.5s ease;
}

.efx-card-wipe:active .efx-card-wipe-body {
  color: #064e3b;
}

.efx-card-wipe:active .efx-card-wipe-body p {
  color: #065f46;
}
`,
  },
];
