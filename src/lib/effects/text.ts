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
];
