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
  {
    id: 'square-frame',
    name: 'Square Spin Frame',
    description:
      'A gradient square spins and shrinks inside a static outlined frame.',
    category: 'loaders',
    tags: ['spinner', 'square', 'frame'],
    hint: 'auto',
    html: '<div class="efx-loader-square" role="status" aria-label="Loading"></div>',
    css: `/* Square Spin Frame */
.efx-loader-square {
  position: relative;
  width: 56px;
  height: 56px;
  border: 3px solid rgba(148, 163, 184, 0.25);
  border-radius: 10px;
}

.efx-loader-square::before {
  content: "";
  position: absolute;
  inset: 10px;
  border-radius: 4px;
  background: linear-gradient(135deg, #22d3ee, #a78bfa);
  animation: efx-kl-square-spin 1.6s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

@keyframes efx-kl-square-spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg) scale(0.72);
  }
  100% {
    transform: rotate(360deg);
  }
}
`,
  },
  {
    id: 'clock-hands',
    name: 'Clock Hands',
    description:
      'Minute and hour hands sweep around a watch face at different speeds.',
    category: 'loaders',
    tags: ['clock', 'spinner', 'time'],
    hint: 'auto',
    html: '<div class="efx-loader-clock" role="status" aria-label="Loading"></div>',
    css: `/* Clock Hands */
.efx-loader-clock {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 3px solid rgba(148, 163, 184, 0.3);
  background: radial-gradient(
    circle at 50% 50%,
    #e2e8f0 2px,
    rgba(148, 163, 184, 0.08) 2.6px
  );
}

.efx-loader-clock::before,
.efx-loader-clock::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 50%;
  width: 3px;
  margin-left: -1.5px;
  border-radius: 2px;
  transform-origin: 50% 100%;
}

.efx-loader-clock::before {
  height: 14px;
  background: #e2e8f0;
  animation: efx-kl-clock-spin 6s linear infinite;
}

.efx-loader-clock::after {
  height: 19px;
  background: #f472b6;
  animation: efx-kl-clock-spin 1.5s linear infinite;
}

@keyframes efx-kl-clock-spin {
  to {
    transform: rotate(360deg);
  }
}
`,
  },
  {
    id: 'infinity-dots',
    name: 'Infinity Dots',
    description:
      'Two glowing dots trace an endless figure-eight path, meeting at the center.',
    category: 'loaders',
    tags: ['dots', 'path', 'glow'],
    hint: 'auto',
    html: '<div class="efx-loader-infinity" role="status" aria-label="Loading"><span></span><span></span></div>',
    css: `/* Infinity Dots */
.efx-loader-infinity {
  position: relative;
  width: 96px;
  height: 52px;
}

.efx-loader-infinity span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.7);
  animation: efx-kl-infinity 2.6s linear infinite;
}

.efx-loader-infinity span:nth-child(2) {
  background: #f472b6;
  box-shadow: 0 0 12px rgba(244, 114, 182, 0.7);
  animation-delay: -0.65s;
}

@keyframes efx-kl-infinity {
  0% {
    transform: translate(0px, 0px);
  }
  6.25% {
    transform: translate(15px, 13px);
  }
  12.5% {
    transform: translate(28px, 18px);
  }
  18.75% {
    transform: translate(37px, 13px);
  }
  25% {
    transform: translate(40px, 0px);
  }
  31.25% {
    transform: translate(37px, -13px);
  }
  37.5% {
    transform: translate(28px, -18px);
  }
  43.75% {
    transform: translate(15px, -13px);
  }
  50% {
    transform: translate(0px, 0px);
  }
  56.25% {
    transform: translate(-15px, 13px);
  }
  62.5% {
    transform: translate(-28px, 18px);
  }
  68.75% {
    transform: translate(-37px, 13px);
  }
  75% {
    transform: translate(-40px, 0px);
  }
  81.25% {
    transform: translate(-37px, -13px);
  }
  87.5% {
    transform: translate(-28px, -18px);
  }
  93.75% {
    transform: translate(-15px, -13px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}
`,
  },
  {
    id: 'pacman-munch',
    name: 'Pacman Munch',
    description:
      'A chomping arcade mouth gobbles a stream of pellets that flow into it.',
    category: 'loaders',
    tags: ['pacman', 'arcade', 'fun'],
    hint: 'auto',
    html: '<div class="efx-loader-pacman" role="status" aria-label="Loading"><span></span><span></span><span></span></div>',
    css: `/* Pacman Munch */
.efx-loader-pacman {
  position: relative;
  width: 102px;
  height: 28px;
}

.efx-loader-pacman::before,
.efx-loader-pacman::after {
  content: "";
  position: absolute;
  left: 0;
  width: 28px;
  height: 14px;
  background: #fbbf24;
}

.efx-loader-pacman::before {
  top: 0;
  border-radius: 28px 28px 0 0;
  transform-origin: 50% 100%;
  animation: efx-kl-pacman-top 0.32s ease-in-out infinite;
}

.efx-loader-pacman::after {
  bottom: 0;
  border-radius: 0 0 28px 28px;
  transform-origin: 50% 0;
  animation: efx-kl-pacman-bot 0.32s ease-in-out infinite;
}

.efx-loader-pacman span {
  position: absolute;
  left: 0;
  top: 50%;
  width: 8px;
  height: 8px;
  margin-top: -4px;
  border-radius: 50%;
  background: rgba(226, 232, 240, 0.9);
  animation: efx-kl-pellet 1.35s linear infinite;
}

.efx-loader-pacman span:nth-child(2) {
  animation-delay: -0.45s;
}

.efx-loader-pacman span:nth-child(3) {
  animation-delay: -0.9s;
}

@keyframes efx-kl-pacman-top {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-26deg);
  }
}

@keyframes efx-kl-pacman-bot {
  0%,
  100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(26deg);
  }
}

@keyframes efx-kl-pellet {
  0% {
    transform: translateX(86px);
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateX(30px);
    opacity: 0;
  }
}
`,
  },
  {
    id: 'bounce-ball',
    name: 'Bouncing Ball',
    description:
      'A glowing ball bounces with squash-and-stretch above a fading ground shadow.',
    category: 'loaders',
    tags: ['bounce', 'squash', 'shadow'],
    hint: 'auto',
    html: '<div class="efx-loader-bounce" role="status" aria-label="Loading"></div>',
    css: `/* Bouncing Ball */
.efx-loader-bounce {
  position: relative;
  width: 96px;
  height: 86px;
}

.efx-loader-bounce::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 12px;
  width: 26px;
  height: 26px;
  margin-left: -13px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #86efac, #22c55e 70%);
  box-shadow: 0 0 14px rgba(74, 222, 128, 0.45);
  transform-origin: 50% 100%;
  animation: efx-kl-ball-bounce 1s ease-in-out infinite;
}

.efx-loader-bounce::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 4px;
  width: 34px;
  height: 8px;
  margin-left: -17px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  filter: blur(2px);
  animation: efx-kl-ball-shadow 1s ease-in-out infinite;
}

@keyframes efx-kl-ball-bounce {
  0% {
    transform: translateY(0) scale(1.35, 0.65);
    animation-timing-function: cubic-bezier(0.2, 0.6, 0.4, 1);
  }
  50% {
    transform: translateY(-46px) scale(0.95, 1.05);
    animation-timing-function: cubic-bezier(0.6, 0, 0.8, 0.4);
  }
  100% {
    transform: translateY(0) scale(1.35, 0.65);
  }
}

@keyframes efx-kl-ball-shadow {
  0%,
  100% {
    transform: scaleX(1);
    opacity: 0.55;
  }
  50% {
    transform: scaleX(0.4);
    opacity: 0.2;
  }
}
`,
  },
  {
    id: 'grid-pulse',
    name: 'Grid Pulse',
    description:
      'A 3x3 grid of dots pulses in a diagonal wave across the square.',
    category: 'loaders',
    tags: ['grid', 'dots', 'pulse'],
    hint: 'auto',
    html: '<div class="efx-loader-grid" role="status" aria-label="Loading"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>',
    css: `/* Grid Pulse */
.efx-loader-grid {
  display: grid;
  grid-template-columns: repeat(3, 12px);
  gap: 8px;
}

.efx-loader-grid span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #38bdf8;
  animation: efx-kl-grid-pulse 1.2s ease-in-out infinite;
}

.efx-loader-grid span:nth-child(1) {
  animation-delay: 0s;
}

.efx-loader-grid span:nth-child(2) {
  animation-delay: -0.12s;
}

.efx-loader-grid span:nth-child(3) {
  animation-delay: -0.24s;
}

.efx-loader-grid span:nth-child(4) {
  animation-delay: -0.12s;
}

.efx-loader-grid span:nth-child(5) {
  animation-delay: -0.24s;
}

.efx-loader-grid span:nth-child(6) {
  animation-delay: -0.36s;
}

.efx-loader-grid span:nth-child(7) {
  animation-delay: -0.24s;
}

.efx-loader-grid span:nth-child(8) {
  animation-delay: -0.36s;
}

.efx-loader-grid span:nth-child(9) {
  animation-delay: -0.48s;
}

@keyframes efx-kl-grid-pulse {
  0%,
  70%,
  100% {
    transform: scale(0.4);
    opacity: 0.35;
  }
  35% {
    transform: scale(1);
    opacity: 1;
  }
}
`,
  },
  {
    id: 'segment-fade',
    name: 'Segment Fade Spinner',
    description:
      'Eight radial segments fade in sequence, spinning a comet tail around the ring.',
    category: 'loaders',
    tags: ['spinner', 'segments', 'fade'],
    hint: 'auto',
    html: '<div class="efx-loader-seg" role="status" aria-label="Loading"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>',
    css: `/* Segment Fade Spinner */
.efx-loader-seg {
  position: relative;
  width: 56px;
  height: 56px;
}

.efx-loader-seg span {
  position: absolute;
  top: 6px;
  left: 50%;
  width: 5px;
  height: 15px;
  margin-left: -2.5px;
  border-radius: 3px;
  background: #e879f9;
  transform-origin: 50% 22px;
  animation: efx-kl-seg-fade 0.8s linear infinite;
}

.efx-loader-seg span:nth-child(1) {
  transform: rotate(0deg);
}

.efx-loader-seg span:nth-child(2) {
  transform: rotate(45deg);
  animation-delay: -0.1s;
}

.efx-loader-seg span:nth-child(3) {
  transform: rotate(90deg);
  animation-delay: -0.2s;
}

.efx-loader-seg span:nth-child(4) {
  transform: rotate(135deg);
  animation-delay: -0.3s;
}

.efx-loader-seg span:nth-child(5) {
  transform: rotate(180deg);
  animation-delay: -0.4s;
}

.efx-loader-seg span:nth-child(6) {
  transform: rotate(225deg);
  animation-delay: -0.5s;
}

.efx-loader-seg span:nth-child(7) {
  transform: rotate(270deg);
  animation-delay: -0.6s;
}

.efx-loader-seg span:nth-child(8) {
  transform: rotate(315deg);
  animation-delay: -0.7s;
}

@keyframes efx-kl-seg-fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.12;
  }
}
`,
  },
  {
    id: 'stripe-flow',
    name: 'Striped Progress',
    description:
      'A progress bar filled with diagonal candy stripes that slide endlessly forward.',
    category: 'loaders',
    tags: ['progress', 'stripes', 'bar'],
    hint: 'auto',
    html: '<div class="efx-loader-stripe" role="status" aria-label="Loading"><span></span></div>',
    css: `/* Striped Progress */
.efx-loader-stripe {
  position: relative;
  width: 150px;
  height: 12px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.16);
}

.efx-loader-stripe span {
  position: absolute;
  inset: 2px 45% 2px 2px;
  border-radius: 999px;
  background: #0ea5e9;
  overflow: hidden;
}

.efx-loader-stripe span::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: -18px;
  width: calc(100% + 36px);
  background: repeating-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.35) 0 6px,
    transparent 6px 12px
  );
  animation: efx-kl-stripe-slide 0.7s linear infinite;
}

@keyframes efx-kl-stripe-slide {
  to {
    transform: translateX(17px);
  }
}
`,
  },
  {
    id: 'hourglass-flip',
    name: 'Hourglass Flip',
    description:
      'A gradient hourglass pauses, flips over, and keeps the wait going.',
    category: 'loaders',
    tags: ['hourglass', 'flip', 'time'],
    hint: 'auto',
    html: '<div class="efx-loader-hourglass" role="status" aria-label="Loading"><span></span></div>',
    css: `/* Hourglass Flip */
.efx-loader-hourglass {
  position: relative;
  width: 40px;
  height: 52px;
  animation: efx-kl-hourglass-flip 2.2s ease-in-out infinite;
}

.efx-loader-hourglass::before,
.efx-loader-hourglass::after {
  content: "";
  position: absolute;
  left: -4px;
  right: -4px;
  height: 5px;
  border-radius: 3px;
  background: rgba(148, 163, 184, 0.45);
}

.efx-loader-hourglass::before {
  top: -7px;
}

.efx-loader-hourglass::after {
  bottom: -7px;
}

.efx-loader-hourglass span {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #38bdf8, #818cf8);
  clip-path: polygon(0% 0%, 100% 0%, 54% 50%, 100% 100%, 0% 100%, 46% 50%);
}

@keyframes efx-kl-hourglass-flip {
  0%,
  35% {
    transform: rotate(0deg);
  }
  50%,
  85% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`,
  },
  {
    id: 'swirl-trio',
    name: 'Swirl Trio',
    description:
      'Three colored dots chase each other around a shared circular orbit.',
    category: 'loaders',
    tags: ['dots', 'orbit', 'swirl'],
    hint: 'auto',
    html: '<div class="efx-loader-swirl" role="status" aria-label="Loading"><span></span><span></span><span></span></div>',
    css: `/* Swirl Trio */
.efx-loader-swirl {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid rgba(148, 163, 184, 0.18);
  animation: efx-kl-swirl-spin 1.4s linear infinite;
}

.efx-loader-swirl span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: #a78bfa;
  box-shadow: 0 0 10px rgba(167, 139, 250, 0.8);
  transform: rotate(0deg) translate(0, -22px);
}

.efx-loader-swirl span:nth-child(2) {
  background: #f472b6;
  box-shadow: 0 0 10px rgba(244, 114, 182, 0.8);
  transform: rotate(120deg) translate(0, -22px);
}

.efx-loader-swirl span:nth-child(3) {
  background: #fbbf24;
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.8);
  transform: rotate(240deg) translate(0, -22px);
}

@keyframes efx-kl-swirl-spin {
  to {
    transform: rotate(360deg);
  }
}
`,
  },
  {
    id: 'heart-beat',
    name: 'Heartbeat Pulse',
    description:
      'A glowing heart beats with a double-thump rhythm before resting.',
    category: 'loaders',
    tags: ['heart', 'pulse', 'health'],
    hint: 'auto',
    html: '<div class="efx-loader-heart" role="status" aria-label="Loading"></div>',
    css: `/* Heartbeat Pulse */
.efx-loader-heart {
  position: relative;
  width: 28px;
  height: 28px;
  background: #fb7185;
  filter: drop-shadow(0 0 12px rgba(251, 113, 133, 0.55));
  animation: efx-kl-heart-beat 1.4s ease-in-out infinite;
}

.efx-loader-heart::before,
.efx-loader-heart::after {
  content: "";
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #fb7185;
}

.efx-loader-heart::before {
  top: -14px;
  left: 0;
}

.efx-loader-heart::after {
  top: 0;
  left: 14px;
}

@keyframes efx-kl-heart-beat {
  0%,
  28%,
  72%,
  100% {
    transform: rotate(-45deg) scale(1);
  }
  14% {
    transform: rotate(-45deg) scale(1.25);
  }
  42% {
    transform: rotate(-45deg) scale(1.15);
  }
}
`,
  },
  {
    id: 'battery-charge',
    name: 'Battery Charge',
    description:
      'A battery fills up level by level, shifting from amber to full-charge green.',
    category: 'loaders',
    tags: ['battery', 'progress', 'charge'],
    hint: 'auto',
    html: '<div class="efx-loader-battery" role="status" aria-label="Loading"><span></span></div>',
    css: `/* Battery Charge */
.efx-loader-battery {
  position: relative;
  width: 46px;
  height: 24px;
  border: 3px solid rgba(148, 163, 184, 0.55);
  border-radius: 7px;
}

.efx-loader-battery::after {
  content: "";
  position: absolute;
  right: -9px;
  top: 50%;
  width: 5px;
  height: 10px;
  margin-top: -5px;
  border-radius: 0 3px 3px 0;
  background: rgba(148, 163, 184, 0.55);
}

.efx-loader-battery span {
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 2px;
  right: 2px;
  border-radius: 3px;
  background: linear-gradient(90deg, #fbbf24, #4ade80);
  transform-origin: 0 50%;
  animation: efx-kl-battery-fill 2.6s ease-in-out infinite;
}

@keyframes efx-kl-battery-fill {
  0% {
    transform: scaleX(0.05);
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  16%,
  18% {
    transform: scaleX(0.3);
  }
  34%,
  36% {
    transform: scaleX(0.55);
  }
  52%,
  54% {
    transform: scaleX(0.82);
  }
  70%,
  88% {
    transform: scaleX(1);
    opacity: 1;
  }
  100% {
    transform: scaleX(1);
    opacity: 0;
  }
}
`,
  },
  {
    id: 'dna-helix',
    name: 'DNA Helix',
    description:
      'Two strands of dots cross and separate in a rotating double-helix wave.',
    category: 'loaders',
    tags: ['dna', 'helix', 'wave'],
    hint: 'auto',
    html: '<div class="efx-loader-dna" role="status" aria-label="Loading"><span></span><span></span><span></span><span></span><span></span><span></span></div>',
    css: `/* DNA Helix */
.efx-loader-dna {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 56px;
}

.efx-loader-dna span {
  position: relative;
  width: 10px;
  height: 100%;
  --d: 0s;
}

.efx-loader-dna span:nth-child(2) {
  --d: -0.22s;
}

.efx-loader-dna span:nth-child(3) {
  --d: -0.44s;
}

.efx-loader-dna span:nth-child(4) {
  --d: -0.66s;
}

.efx-loader-dna span:nth-child(5) {
  --d: -0.88s;
}

.efx-loader-dna span:nth-child(6) {
  --d: -1.1s;
}

.efx-loader-dna span::before,
.efx-loader-dna span::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  border-radius: 50%;
  animation: efx-kl-dna 2.8s ease-in-out infinite;
}

.efx-loader-dna span::before {
  background: #22d3ee;
  animation-delay: var(--d);
}

.efx-loader-dna span::after {
  background: #a78bfa;
  animation-delay: calc(var(--d) - 1.4s);
}

@keyframes efx-kl-dna {
  0%,
  100% {
    transform: translateY(-16px) scale(0.6);
    opacity: 0.45;
  }
  50% {
    transform: translateY(16px) scale(1);
    opacity: 1;
  }
}
`,
  },
  {
    id: 'rolling-cube',
    name: 'Rolling Cube',
    description:
      'A rounded cube rolls back and forth along a ground line, turning as it travels.',
    category: 'loaders',
    tags: ['cube', 'roll', 'motion'],
    hint: 'auto',
    html: '<div class="efx-loader-roll" role="status" aria-label="Loading"><span></span></div>',
    css: `/* Rolling Cube */
.efx-loader-roll {
  position: relative;
  width: 140px;
  height: 46px;
}

.efx-loader-roll::after {
  content: "";
  position: absolute;
  left: 2px;
  right: 2px;
  bottom: 5px;
  height: 2px;
  border-radius: 2px;
  background: rgba(148, 163, 184, 0.3);
}

.efx-loader-roll span {
  position: absolute;
  left: 4px;
  bottom: 9px;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background: linear-gradient(135deg, #a78bfa, #f472b6);
  animation: efx-kl-roll 1.9s linear infinite alternate;
}

@keyframes efx-kl-roll {
  from {
    transform: translateX(0) rotate(0deg);
  }
  to {
    transform: translateX(104px) rotate(360deg);
  }
}
`,
  },
];
