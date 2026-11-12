import type { CSSEffect } from './types';

export const BACKGROUND_EFFECTS: CSSEffect[] = [
  {
    id: 'mesh-gradient',
    name: 'Animated Mesh Gradient',
    description:
      'Four radial color blobs drift across the canvas for a soft, living mesh backdrop.',
    category: 'backgrounds',
    tags: ['gradient', 'mesh', 'ambient'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-mesh" aria-hidden="true"></div>',
    css: `/* Animated Mesh Gradient */
.efx-bg-mesh {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 30%, rgba(167, 139, 250, 0.5), transparent 50%),
    radial-gradient(ellipse at 80% 25%, rgba(244, 114, 182, 0.45), transparent 55%),
    radial-gradient(ellipse at 65% 80%, rgba(251, 191, 36, 0.4), transparent 50%),
    radial-gradient(ellipse at 25% 85%, rgba(74, 222, 128, 0.35), transparent 55%),
    #0d0d15;
  background-size: 180% 180%;
  animation: efx-mesh 14s ease-in-out infinite alternate;
}

@keyframes efx-mesh {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 100%;
  }
}
`,
  },
  {
    id: 'moving-grid',
    name: 'Infinite Grid',
    description:
      'A neon grid glides diagonally forever, fading out with a radial mask at the edges.',
    category: 'backgrounds',
    tags: ['grid', 'pattern', 'mask'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-grid" aria-hidden="true"></div>',
    css: `/* Infinite Grid */
.efx-bg-grid {
  position: absolute;
  inset: -50%;
  background-image:
    linear-gradient(rgba(167, 139, 250, 0.16) 1px, transparent 1px),
    linear-gradient(90deg, rgba(167, 139, 250, 0.16) 1px, transparent 1px);
  background-size: 36px 36px;
  -webkit-mask-image: radial-gradient(ellipse at center, #000 40%, transparent 78%);
  mask-image: radial-gradient(ellipse at center, #000 40%, transparent 78%);
  animation: efx-grid-move 3.5s linear infinite;
}

@keyframes efx-grid-move {
  to {
    transform: translate(36px, 36px);
  }
}
`,
  },
  {
    id: 'dot-matrix',
    name: 'Dot Matrix Drift',
    description:
      'A field of mint dots slides on the diagonal while a breathing glow pulses at the center.',
    category: 'backgrounds',
    tags: ['dots', 'pattern', 'pulse'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-dots" aria-hidden="true"></div>',
    css: `/* Dot Matrix Drift */
.efx-bg-dots {
  position: absolute;
  inset: 0;
  background-color: #0d0d15;
  background-image: radial-gradient(
    rgba(74, 222, 128, 0.55) 1.5px,
    transparent 1.6px
  );
  background-size: 26px 26px;
  animation: efx-dots-slide 8s linear infinite;
}

.efx-bg-dots::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(74, 222, 128, 0.14),
    transparent 60%
  );
  animation: efx-dots-breathe 4s ease-in-out infinite alternate;
}

@keyframes efx-dots-slide {
  to {
    background-position: 26px 52px;
  }
}

@keyframes efx-dots-breathe {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
`,
  },
  {
    id: 'aurora',
    name: 'Aurora Glow',
    description:
      'Two blurred conic-gradient clouds wander and rotate behind a dark sky, like polar lights.',
    category: 'backgrounds',
    tags: ['aurora', 'blur', 'ambient'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-aurora" aria-hidden="true"></div>',
    css: `/* Aurora Glow */
.efx-bg-aurora {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0a0a12;
}

.efx-bg-aurora::before,
.efx-bg-aurora::after {
  content: "";
  position: absolute;
  width: 70%;
  height: 90%;
  border-radius: 50%;
  filter: blur(46px);
  opacity: 0.55;
}

.efx-bg-aurora::before {
  top: -25%;
  left: -15%;
  background: conic-gradient(
    from 90deg at 50% 50%,
    #a78bfa,
    #f472b6,
    #fbbf24,
    #a78bfa
  );
  animation: efx-aurora-a 11s ease-in-out infinite alternate;
}

.efx-bg-aurora::after {
  bottom: -30%;
  right: -15%;
  background: conic-gradient(
    from 270deg at 50% 50%,
    #4ade80,
    #a78bfa,
    #f472b6,
    #4ade80
  );
  animation: efx-aurora-b 13s ease-in-out infinite alternate;
}

@keyframes efx-aurora-a {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  100% {
    transform: translate(30%, 25%) rotate(50deg) scale(1.25);
  }
}

@keyframes efx-aurora-b {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1.1);
  }
  100% {
    transform: translate(-35%, -30%) rotate(-40deg) scale(0.95);
  }
}
`,
  },
  {
    id: 'floating-bubbles',
    name: 'Floating Bubbles',
    description:
      'Pastel bubbles of different sizes rise, shrink and fade on staggered timelines.',
    category: 'backgrounds',
    tags: ['bubbles', 'floating', 'ambient'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-bubbles" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>',
    css: `/* Floating Bubbles */
.efx-bg-bubbles {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #0b0b13, #14101f);
}

.efx-bg-bubbles i {
  position: absolute;
  bottom: -40px;
  left: 10%;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(167, 139, 250, 0.5);
  animation: efx-bubble 9s linear infinite;
}

.efx-bg-bubbles i:nth-child(2) {
  left: 25%;
  width: 12px;
  height: 12px;
  background: rgba(244, 114, 182, 0.5);
  animation-duration: 7s;
  animation-delay: 1s;
}

.efx-bg-bubbles i:nth-child(3) {
  left: 45%;
  width: 30px;
  height: 30px;
  background: rgba(251, 191, 36, 0.4);
  animation-duration: 11s;
  animation-delay: 2s;
}

.efx-bg-bubbles i:nth-child(4) {
  left: 65%;
  width: 16px;
  height: 16px;
  background: rgba(74, 222, 128, 0.45);
  animation-duration: 8s;
  animation-delay: 0.5s;
}

.efx-bg-bubbles i:nth-child(5) {
  left: 85%;
  width: 24px;
  height: 24px;
  background: rgba(167, 139, 250, 0.4);
  animation-duration: 10s;
  animation-delay: 3s;
}

@keyframes efx-bubble {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateY(-320px) scale(0.4);
    opacity: 0;
  }
}
`,
  },
];
