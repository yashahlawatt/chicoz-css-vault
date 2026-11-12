import type { CSSEffect } from './types';

export const TEXT_EFFECTS: CSSEffect[] = [
  {
    id: 'gradient-text',
    name: 'Flowing Gradient Text',
    description:
      'A candy gradient painted onto glyphs with background-clip: text, forever sliding sideways.',
    category: 'text',
    tags: ['gradient', 'background-clip', 'animation'],
    hint: 'auto',
    html: '<h2 class="efx-text-gradient">Pure CSS</h2>',
    css: `/* Flowing Gradient Text */
.efx-text-gradient {
  font-size: 44px;
  font-weight: 800;
  letter-spacing: 1px;
  background: linear-gradient(
    90deg,
    #f472b6,
    #a78bfa,
    #fbbf24,
    #f472b6
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: efx-grad-flow 4s linear infinite;
}

@keyframes efx-grad-flow {
  to {
    background-position: 300% 0;
  }
}
`,
  },
  {
    id: 'typewriter',
    name: 'Typewriter',
    description:
      'Text typed out with a stepped width animation, complete with a blinking terminal caret.',
    category: 'text',
    tags: ['typography', 'steps', 'caret'],
    hint: 'auto',
    html: '<h2 class="efx-text-type">Hello, CSS!</h2>',
    css: `/* Typewriter */
.efx-text-type {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-family: var(--font-geist-mono), ui-monospace, monospace;
  font-size: 26px;
  font-weight: 600;
  color: #e2e8f0;
  border-right: 3px solid #4ade80;
  width: 11ch;
  animation:
    efx-type 4s steps(11) infinite,
    efx-caret 0.7s step-end infinite;
}

@keyframes efx-type {
  0% {
    width: 0;
  }
  40% {
    width: 11ch;
  }
  75% {
    width: 11ch;
  }
  100% {
    width: 0;
  }
}

@keyframes efx-caret {
  50% {
    border-color: transparent;
  }
}
`,
  },
  {
    id: 'neon-flicker',
    name: 'Neon Flicker',
    description:
      'Stacked text-shadows build a green neon tube sign that sputters like faulty wiring.',
    category: 'text',
    tags: ['neon', 'text-shadow', 'flicker'],
    hint: 'auto',
    html: '<h2 class="efx-text-neon">NEON</h2>',
    css: `/* Neon Flicker */
.efx-text-neon {
  font-size: 42px;
  font-weight: 800;
  letter-spacing: 6px;
  color: #4ade80;
  text-shadow:
    0 0 6px rgba(74, 222, 128, 0.9),
    0 0 18px rgba(74, 222, 128, 0.6),
    0 0 42px rgba(74, 222, 128, 0.45),
    0 0 80px rgba(74, 222, 128, 0.3);
  animation: efx-neon-flicker 3.2s infinite;
}

@keyframes efx-neon-flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow:
      0 0 6px rgba(74, 222, 128, 0.9),
      0 0 18px rgba(74, 222, 128, 0.6),
      0 0 42px rgba(74, 222, 128, 0.45),
      0 0 80px rgba(74, 222, 128, 0.3);
    opacity: 1;
  }
  20%,
  24%,
  55% {
    text-shadow: none;
    opacity: 0.75;
  }
}
`,
  },
  {
    id: 'glitch-text',
    name: 'Glitch Text',
    description:
      'Clipped pseudo-element layers in pink and green jitter out of sync for a digital tear.',
    category: 'text',
    tags: ['glitch', 'clip-path', 'pseudo-elements'],
    hint: 'auto',
    html: '<h2 class="efx-text-glitch" data-text="GLITCH">GLITCH</h2>',
    css: `/* Glitch Text */
.efx-text-glitch {
  position: relative;
  font-size: 44px;
  font-weight: 900;
  letter-spacing: 4px;
  color: #f8fafc;
}

.efx-text-glitch::before,
.efx-text-glitch::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
}

.efx-text-glitch::before {
  color: #f472b6;
  clip-path: inset(0 0 55% 0);
  animation: efx-glitch-a 2.4s infinite linear alternate-reverse;
}

.efx-text-glitch::after {
  color: #4ade80;
  clip-path: inset(55% 0 0 0);
  animation: efx-glitch-b 3.1s infinite linear alternate-reverse;
}

@keyframes efx-glitch-a {
  0% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(-3px, 2px);
  }
  40% {
    transform: translate(3px, -1px);
  }
  60% {
    transform: translate(-2px, -2px);
  }
  80% {
    transform: translate(2px, 1px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes efx-glitch-b {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(3px, 1px);
  }
  50% {
    transform: translate(-3px, 2px);
  }
  75% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0, 0);
  }
}
`,
  },
  {
    id: 'shimmer-text',
    name: 'Shimmer Sweep',
    description:
      'A beam of light glides across muted slate letters, seamlessly looping edge to edge.',
    category: 'text',
    tags: ['shimmer', 'gradient', 'skeleton'],
    hint: 'auto',
    html: '<h2 class="efx-text-shimmer">Shimmer</h2>',
    css: `/* Shimmer Sweep */
.efx-text-shimmer {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 2px;
  background: linear-gradient(
    110deg,
    #475569 0%,
    #475569 35%,
    #f1f5f9 50%,
    #475569 65%,
    #475569 100%
  );
  background-size: 250% 100%;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: efx-shimmer 3s ease-in-out infinite;
}

@keyframes efx-shimmer {
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
`,
  },
  {
    id: 'outline-text',
    name: 'Outline Fill Text',
    description:
      'Hollow stroked letters flood with color and cast a soft glow when hovered.',
    category: 'text',
    tags: ['hover', 'stroke', 'fill'],
    hint: 'hover',
    html: '<h2 class="efx-text-outline">OUTLINE</h2>',
    css: `/* Outline Fill Text */
.efx-text-outline {
  font-size: 46px;
  font-weight: 900;
  letter-spacing: 4px;
  color: transparent;
  -webkit-text-stroke: 2px #f472b6;
  cursor: default;
  transition:
    color 0.5s ease,
    text-shadow 0.5s ease;
}

.efx-text-outline:hover {
  color: #f472b6;
  text-shadow: 0 0 26px rgba(244, 63, 94, 0.55);
}
`,
  },
  {
    id: 'extrude-3d',
    name: '3D Extruded Text',
    description:
      'A stack of purple text-shadows builds chunky depth that gently floats and tilts.',
    category: 'text',
    tags: ['3d', 'text-shadow', 'depth'],
    hint: 'auto',
    html: '<h2 class="efx-text-3d">DEPTH</h2>',
    css: `/* 3D Extruded Text */
.efx-text-3d {
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #f8fafc;
  text-shadow:
    1px 1px 0 #c084fc,
    2px 2px 0 #a855f7,
    3px 3px 0 #9333ea,
    4px 4px 0 #7e22ce,
    5px 5px 0 #6b21a8,
    7px 7px 14px rgba(0, 0, 0, 0.6);
  animation: efx-kt-extrude 3s ease-in-out infinite;
}

@keyframes efx-kt-extrude {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
    text-shadow:
      1px 1px 0 #c084fc,
      2px 2px 0 #a855f7,
      3px 3px 0 #9333ea,
      4px 4px 0 #7e22ce,
      5px 5px 0 #6b21a8,
      7px 7px 14px rgba(0, 0, 0, 0.6);
  }
  50% {
    transform: translate(0, -4px) rotate(-1.5deg);
    text-shadow:
      1px 1px 0 #c084fc,
      2px 2px 0 #a855f7,
      3px 3px 0 #9333ea,
      5px 5px 0 #7e22ce,
      7px 7px 0 #6b21a8,
      10px 11px 18px rgba(0, 0, 0, 0.65);
  }
}
`,
  },
  {
    id: 'wave-bounce',
    name: 'Wave Bounce Letters',
    description:
      'Per-letter spans hop in a staggered ripple, with sky-blue accents on every other glyph.',
    category: 'text',
    tags: ['spans', 'stagger', 'bounce'],
    hint: 'auto',
    html: '<h2 class="efx-text-wave"><span>W</span><span>A</span><span>V</span><span>E</span></h2>',
    css: `/* Wave Bounce Letters */
.efx-text-wave {
  font-size: 36px;
  font-weight: 800;
  color: #f8fafc;
}

.efx-text-wave span {
  display: inline-block;
  margin-right: 4px;
  animation: efx-kt-wave 1.6s ease-in-out infinite;
}

.efx-text-wave span:nth-child(even) {
  color: #7dd3fc;
}

.efx-text-wave span:nth-child(1) {
  animation-delay: 0s;
}

.efx-text-wave span:nth-child(2) {
  animation-delay: 0.12s;
}

.efx-text-wave span:nth-child(3) {
  animation-delay: 0.24s;
}

.efx-text-wave span:nth-child(4) {
  animation-delay: 0.36s;
}

.efx-text-wave span:nth-child(5) {
  animation-delay: 0.48s;
}

.efx-text-wave span:nth-child(6) {
  animation-delay: 0.6s;
}

@keyframes efx-kt-wave {
  0%,
  100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-14px);
  }
  60% {
    transform: translateY(3px);
  }
}
`,
  },
  {
    id: 'rainbow-hue',
    name: 'Rainbow Hue Flow',
    description:
      'A full spectrum gradient streams through the glyphs, backed by a soft violet halo.',
    category: 'text',
    tags: ['rainbow', 'gradient', 'background-clip'],
    hint: 'auto',
    html: '<h2 class="efx-text-rainbow">RAINBOW</h2>',
    css: `/* Rainbow Hue Flow */
.efx-text-rainbow {
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 2px;
  background: linear-gradient(
    90deg,
    #fb7185,
    #fbbf24,
    #4ade80,
    #38bdf8,
    #a78bfa,
    #fb7185
  );
  background-size: 400% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 0 14px rgba(167, 139, 250, 0.35));
  animation: efx-kt-rainbow 6s linear infinite;
}

@keyframes efx-kt-rainbow {
  to {
    background-position: 400% 0;
  }
}
`,
  },
  {
    id: 'spotlight-sweep',
    name: 'Spotlight Sweep',
    description:
      'A warm radial spotlight glides back and forth across dim slate letters, revealing them.',
    category: 'text',
    tags: ['spotlight', 'radial-gradient', 'background-clip'],
    hint: 'auto',
    html: '<h2 class="efx-text-spotlight">SPOTLIGHT</h2>',
    css: `/* Spotlight Sweep */
.efx-text-spotlight {
  font-size: 34px;
  font-weight: 900;
  letter-spacing: 2px;
  background:
    radial-gradient(
      circle 60px at 50% 50%,
      #fef9c3 0%,
      #fde047 45%,
      rgba(253, 224, 71, 0) 100%
    )
    no-repeat,
    linear-gradient(#64748b, #64748b);
  background-size: 120px 120px, 100% 100%;
  background-position: 0% 50%, 0 0;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: efx-kt-spot 3.6s ease-in-out infinite alternate;
}

@keyframes efx-kt-spot {
  from {
    background-position: 0% 50%, 0 0;
  }
  to {
    background-position: 100% 50%, 0 0;
  }
}
`,
  },
  {
    id: 'retro-chrome',
    name: 'Retro Chrome',
    description:
      'Eighties chrome bands of sky, silver and gold scroll endlessly upward through italic letters.',
    category: 'text',
    tags: ['retro', '80s', 'gradient'],
    hint: 'auto',
    html: '<h2 class="efx-text-chrome">RETRO</h2>',
    css: `/* Retro Chrome */
.efx-text-chrome {
  font-size: 40px;
  font-weight: 900;
  font-style: italic;
  letter-spacing: 2px;
  background: linear-gradient(
    180deg,
    #38bdf8 0%,
    #7dd3fc 8.33%,
    #f8fafc 16.67%,
    #fbbf24 25%,
    #38bdf8 33.33%,
    #7dd3fc 41.67%,
    #f8fafc 50%,
    #fbbf24 58.33%,
    #38bdf8 66.67%,
    #7dd3fc 75%,
    #f8fafc 83.33%,
    #fbbf24 91.67%,
    #38bdf8 100%
  );
  background-size: 100% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 4px 12px rgba(56, 189, 248, 0.4));
  animation: efx-kt-chrome 5s linear infinite;
}

@keyframes efx-kt-chrome {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 100%;
  }
}
`,
  },
  {
    id: 'floating-letters',
    name: 'Floating Letters',
    description:
      'Colorful letters drift upward and tilt on independent rhythms, like bubbles in slow motion.',
    category: 'text',
    tags: ['spans', 'float', 'playful'],
    hint: 'auto',
    html: '<h2 class="efx-text-float"><span>F</span><span>L</span><span>O</span><span>A</span><span>T</span></h2>',
    css: `/* Floating Letters */
.efx-text-float {
  font-size: 34px;
  font-weight: 800;
  color: #e2e8f0;
}

.efx-text-float span {
  display: inline-block;
  margin-right: 8px;
  animation: efx-kt-floaty 3.2s ease-in-out infinite;
}

.efx-text-float span:nth-child(1) {
  color: #f472b6;
  animation-delay: -0.2s;
}

.efx-text-float span:nth-child(2) {
  color: #fbbf24;
  animation-delay: -0.9s;
}

.efx-text-float span:nth-child(3) {
  color: #4ade80;
  animation-delay: -1.6s;
}

.efx-text-float span:nth-child(4) {
  color: #38bdf8;
  animation-delay: -2.3s;
}

.efx-text-float span:nth-child(5) {
  color: #a78bfa;
  animation-delay: -3s;
}

@keyframes efx-kt-floaty {
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(4deg);
  }
}
`,
  },
  {
    id: 'glow-pulse',
    name: 'Pulsing Glow',
    description:
      'Soft cyan text-shadow layers breathe in and out, swelling to a bright icy peak.',
    category: 'text',
    tags: ['glow', 'pulse', 'text-shadow'],
    hint: 'auto',
    html: '<h2 class="efx-text-pulse">AURA</h2>',
    css: `/* Pulsing Glow */
.efx-text-pulse {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 6px;
  animation: efx-kt-glow 2.8s ease-in-out infinite;
}

@keyframes efx-kt-glow {
  0%,
  100% {
    color: #67e8f9;
    text-shadow:
      0 0 6px rgba(103, 232, 249, 0.55),
      0 0 18px rgba(34, 211, 238, 0.35),
      0 0 40px rgba(34, 211, 238, 0.2);
  }
  50% {
    color: #ecfeff;
    text-shadow:
      0 0 10px rgba(103, 232, 249, 0.95),
      0 0 32px rgba(34, 211, 238, 0.7),
      0 0 72px rgba(34, 211, 238, 0.5);
  }
}
`,
  },
  {
    id: 'tracking-hover',
    name: 'Expanding Tracking',
    description:
      'Letter-spacing glides wide and the type warms to amber while you hover.',
    category: 'text',
    tags: ['hover', 'letter-spacing', 'transition'],
    hint: 'hover',
    html: '<h2 class="efx-text-tracking">SPACE</h2>',
    css: `/* Expanding Tracking */
.efx-text-tracking {
  font-size: 34px;
  font-weight: 800;
  letter-spacing: 3px;
  color: #e2e8f0;
  cursor: default;
  transition:
    letter-spacing 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    color 0.6s ease,
    text-shadow 0.6s ease;
}

.efx-text-tracking:hover {
  letter-spacing: 16px;
  color: #fbbf24;
  text-shadow: 0 0 24px rgba(251, 191, 36, 0.4);
}
`,
  },
  {
    id: 'blur-focus',
    name: 'Blur Focus',
    description:
      'Ghosted, out-of-focus letters snap sharp with a violet glow as the cursor arrives.',
    category: 'text',
    tags: ['hover', 'blur', 'filter'],
    hint: 'hover',
    html: '<h2 class="efx-text-blur">FOCUS</h2>',
    css: `/* Blur Focus */
.efx-text-blur {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 4px;
  color: #f8fafc;
  filter: blur(6px);
  opacity: 0.45;
  cursor: default;
  transition:
    filter 0.7s ease,
    opacity 0.7s ease,
    text-shadow 0.7s ease;
}

.efx-text-blur:hover {
  filter: blur(0);
  opacity: 1;
  text-shadow: 0 0 26px rgba(167, 139, 250, 0.55);
}
`,
  },
  {
    id: 'split-color',
    name: 'Split Color Text',
    description:
      'An orange overlay clipped to the top half sweeps up and down over sky-blue letters.',
    category: 'text',
    tags: ['clip-path', 'pseudo-element', 'split'],
    hint: 'auto',
    html: '<h2 class="efx-text-split" data-text="SPLIT">SPLIT</h2>',
    css: `/* Split Color Text */
.efx-text-split {
  position: relative;
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 3px;
  color: #38bdf8;
}

.efx-text-split::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: #fb923c;
  animation: efx-kt-split 3.6s ease-in-out infinite;
}

@keyframes efx-kt-split {
  0%,
  100% {
    clip-path: inset(0 0 70% 0);
  }
  50% {
    clip-path: inset(0 0 30% 0);
  }
}
`,
  },
  {
    id: 'wavy-underline',
    name: 'Wavy Underline',
    description:
      'Hover to turn the muted squiggle emerald and make it bob beneath the word.',
    category: 'text',
    tags: ['hover', 'underline', 'text-decoration'],
    hint: 'hover',
    html: '<h2 class="efx-text-wavy">WAVY</h2>',
    css: `/* Wavy Underline */
.efx-text-wavy {
  font-size: 36px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #e2e8f0;
  text-decoration: underline wavy rgba(148, 163, 184, 0.6);
  text-decoration-thickness: 2px;
  text-underline-offset: 7px;
  cursor: default;
  transition:
    color 0.4s ease,
    text-decoration-color 0.4s ease;
}

.efx-text-wavy:hover {
  color: #34d399;
  text-decoration-color: #34d399;
  animation: efx-kt-wavy 1.1s ease-in-out infinite;
}

@keyframes efx-kt-wavy {
  0%,
  100% {
    text-underline-offset: 5px;
  }
  50% {
    text-underline-offset: 12px;
  }
}
`,
  },
  {
    id: 'word-marquee',
    name: 'Vertical Word Marquee',
    description:
      'Stacked words step upward through a clipped window, looping seamlessly forever.',
    category: 'text',
    tags: ['marquee', 'clip-path', 'loop'],
    hint: 'auto',
    html: '<h2 class="efx-text-marquee"><span>CREATE</span><span>DESIGN</span><span>INSPIRE</span><span>CREATE</span></h2>',
    css: `/* Vertical Word Marquee */
.efx-text-marquee {
  display: inline-block;
  margin-bottom: -132px;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 2px;
  text-align: center;
  animation: efx-kt-marquee 9s ease-in-out infinite;
}

.efx-text-marquee span {
  display: block;
  height: 44px;
  line-height: 44px;
}

.efx-text-marquee span:nth-child(1),
.efx-text-marquee span:nth-child(4) {
  color: #f472b6;
}

.efx-text-marquee span:nth-child(2) {
  color: #fbbf24;
}

.efx-text-marquee span:nth-child(3) {
  color: #38bdf8;
}

@keyframes efx-kt-marquee {
  0%,
  24% {
    transform: translateY(0);
    clip-path: inset(0 0 132px 0);
  }
  33.33%,
  57.33% {
    transform: translateY(-44px);
    clip-path: inset(44px 0 88px 0);
  }
  66.66%,
  90.66% {
    transform: translateY(-88px);
    clip-path: inset(88px 0 44px 0);
  }
  100% {
    transform: translateY(-132px);
    clip-path: inset(132px 0 0 0);
  }
}
`,
  },
];
