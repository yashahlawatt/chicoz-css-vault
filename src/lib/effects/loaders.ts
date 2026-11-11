import type { CSSEffect } from './types';

export const LOADER_EFFECTS: CSSEffect[] = [
  {
    id: 'orbit-spinner',
    name: 'Dual Orbit Spinner',
    description:
      'Two counter-rotating rings on shared orbit axes create a classic layered loading spinner.',
    category: 'loaders',
    tags: ['spinner', 'animation', 'ring'],
    hint: 'auto',
    html: '<div class="efx-loader-orbit" role="status" aria-label="Loading"></div>',
    css: `/* Dual Orbit Spinner */
.efx-loader-orbit {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 4px solid rgba(148, 163, 184, 0.18);
  border-top-color: #a78bfa;
  animation: efx-orbit-spin 0.9s linear infinite;
}

.efx-loader-orbit::after {
  content: "";
  position: absolute;
  inset: 8px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-bottom-color: #f472b6;
  animation: efx-orbit-spin 0.6s linear infinite reverse;
}

@keyframes efx-orbit-spin {
  to {
    transform: rotate(360deg);
  }
}
`,
  },
  {
    id: 'bounce-dots',
    name: 'Bouncing Dots',
    description:
      'Three staggered dots hop in sequence with a staggered animation delay and fade.',
    category: 'loaders',
    tags: ['dots', 'bounce', 'animation'],
    hint: 'auto',
    html: '<div class="efx-loader-dots" role="status" aria-label="Loading"><span></span><span></span><span></span></div>',
    css: `/* Bouncing Dots */
.efx-loader-dots {
  display: flex;
  gap: 10px;
}

.efx-loader-dots span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fbbf24;
  animation: efx-dots-bounce 0.9s ease-in-out infinite;
}

.efx-loader-dots span:nth-child(2) {
  background: #f472b6;
  animation-delay: 0.15s;
}

.efx-loader-dots span:nth-child(3) {
  background: #a78bfa;
  animation-delay: 0.3s;
}

@keyframes efx-dots-bounce {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-16px);
    opacity: 1;
  }
}
`,
  },
  {
    id: 'conic-ring',
    name: 'Conic Gradient Ring',
    description:
      'A conic gradient masked into a thin ring, spinning with a comet-like fade tail.',
    category: 'loaders',
    tags: ['spinner', 'conic-gradient', 'mask'],
    hint: 'auto',
    html: '<div class="efx-loader-ring" role="status" aria-label="Loading"></div>',
    css: `/* Conic Gradient Ring */
.efx-loader-ring {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    #4ade80 85%
  );
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 6px),
    #000 calc(100% - 5px)
  );
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 6px),
    #000 calc(100% - 5px)
  );
  animation: efx-ring-spin 1s linear infinite;
}

@keyframes efx-ring-spin {
  to {
    transform: rotate(360deg);
  }
}
`,
  },
  {
    id: 'equalizer-bars',
    name: 'Equalizer Bars',
    description:
      'Five gradient bars scale vertically in a wave, like a tiny audio equalizer.',
    category: 'loaders',
    tags: ['bars', 'audio', 'animation'],
    hint: 'auto',
    html: '<div class="efx-loader-bars" role="status" aria-label="Loading"><span></span><span></span><span></span><span></span><span></span></div>',
    css: `/* Equalizer Bars */
.efx-loader-bars {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 48px;
}

.efx-loader-bars span {
  width: 8px;
  height: 100%;
  border-radius: 4px;
  background: linear-gradient(180deg, #f472b6, #a78bfa);
  transform-origin: center;
  animation: efx-bars-eq 1s ease-in-out infinite;
}

.efx-loader-bars span:nth-child(2) {
  animation-delay: 0.12s;
}

.efx-loader-bars span:nth-child(3) {
  animation-delay: 0.24s;
}

.efx-loader-bars span:nth-child(4) {
  animation-delay: 0.36s;
}

.efx-loader-bars span:nth-child(5) {
  animation-delay: 0.48s;
}

@keyframes efx-bars-eq {
  0%,
  100% {
    transform: scaleY(0.3);
  }
  50% {
    transform: scaleY(1);
  }
}
`,
  },
  {
    id: 'morph-square',
    name: 'Morphing Square',
    description:
      'A gradient square rotates and morphs between rounded square and circle shapes.',
    category: 'loaders',
    tags: ['morph', 'rotate', 'border-radius'],
    hint: 'auto',
    html: '<div class="efx-loader-morph" role="status" aria-label="Loading"></div>',
    css: `/* Morphing Square */
.efx-loader-morph {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #fbbf24, #f43f5e);
  border-radius: 8px;
  animation: efx-morph 2.4s ease-in-out infinite;
}

@keyframes efx-morph {
  0% {
    transform: rotate(0deg) scale(1);
    border-radius: 8px;
  }
  25% {
    transform: rotate(90deg) scale(0.85);
    border-radius: 50%;
  }
  50% {
    transform: rotate(180deg) scale(1);
    border-radius: 8px;
  }
  75% {
    transform: rotate(270deg) scale(0.85);
    border-radius: 50%;
  }
  100% {
    transform: rotate(360deg) scale(1);
    border-radius: 8px;
  }
}
`,
  },
  {
    id: 'ping-pong',
    name: 'Ping Pong Progress',
    description:
      'A glowing dot shuttles back and forth along a track with eased alternate motion.',
    category: 'loaders',
    tags: ['progress', 'glow', 'animation'],
    hint: 'auto',
    html: '<div class="efx-loader-pong" role="status" aria-label="Loading"></div>',
    css: `/* Ping Pong Progress */
.efx-loader-pong {
  position: relative;
  width: 140px;
  height: 6px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.2);
}

.efx-loader-pong::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #a78bfa;
  box-shadow: 0 0 14px rgba(167, 139, 250, 0.8);
  transform: translateY(-50%);
  animation: efx-pong 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate;
}

@keyframes efx-pong {
  from {
    left: 0;
  }
  to {
    left: calc(100% - 18px);
  }
}
`,
  },
];
