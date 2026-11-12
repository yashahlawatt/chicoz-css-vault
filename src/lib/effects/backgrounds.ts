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
  {
    id: 'conic-swirl',
    name: 'Conic Swirl',
    description:
      'A soft conic rainbow vortex rotates behind a dark vignette, like a galaxy slowly spinning.',
    category: 'backgrounds',
    tags: ['conic', 'swirl', 'ambient'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-swirl" aria-hidden="true"></div>',
    css: `/* Conic Swirl */
.efx-bg-swirl {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0b0b12;
}

.efx-bg-swirl::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg at 50% 50%,
    rgba(139, 92, 246, 0.55),
    rgba(236, 72, 153, 0.4),
    rgba(251, 191, 36, 0.35),
    rgba(56, 189, 248, 0.4),
    rgba(139, 92, 246, 0.55)
  );
  filter: blur(72px);
  opacity: 0.55;
  animation: efx-kbg-swirl-spin 26s linear infinite;
}

.efx-bg-swirl::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 25%,
    rgba(11, 11, 18, 0.85) 95%
  );
}

@keyframes efx-kbg-swirl-spin {
  to {
    transform: rotate(360deg);
  }
}
`,
  },
  {
    id: 'diagonal-stripes',
    name: 'Sliding Diagonal Stripes',
    description:
      'Candy-striped bands glide diagonally forever in a smooth, seamless barber-pole loop.',
    category: 'backgrounds',
    tags: ['stripes', 'pattern', 'slide'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-stripes" aria-hidden="true"></div>',
    css: `/* Sliding Diagonal Stripes */
.efx-bg-stripes {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #0d0d15;
  background-image: repeating-linear-gradient(
    135deg,
    rgba(129, 140, 248, 0.14) 0px,
    rgba(129, 140, 248, 0.14) 14px,
    transparent 14px,
    transparent 34px
  );
  animation: efx-kbg-stripes-slide 2.4s linear infinite;
}

@keyframes efx-kbg-stripes-slide {
  to {
    background-position: 33.94px 33.94px;
  }
}
`,
  },
  {
    id: 'pulse-rings',
    name: 'Pulsing Radar Rings',
    description:
      'Concentric rings ripple outward from the center of the stage like a sonar or radar sweep.',
    category: 'backgrounds',
    tags: ['rings', 'radar', 'pulse'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-rings" aria-hidden="true"></div>',
    css: `/* Pulsing Radar Rings */
.efx-bg-rings {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(circle at 50% 50%, #16162c, #0b0b12 72%);
}

.efx-bg-rings::before,
.efx-bg-rings::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 260px;
  height: 260px;
  margin: -130px 0 0 -130px;
  border: 2px solid rgba(129, 140, 248, 0.55);
  border-radius: 50%;
  opacity: 0;
  animation: efx-kbg-ring-pulse 4.5s cubic-bezier(0.2, 0.6, 0.4, 1) infinite;
}

.efx-bg-rings::after {
  animation-delay: 2.25s;
}

@keyframes efx-kbg-ring-pulse {
  0% {
    transform: scale(0.15);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
}
`,
  },
  {
    id: 'starfield',
    name: 'Twinkling Starfield',
    description:
      'Three layered box-shadow star fields twinkle out of phase over a deep nebula sky.',
    category: 'backgrounds',
    tags: ['stars', 'night', 'twinkle'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-stars" aria-hidden="true"><i></i><i></i><i></i></div>',
    css: `/* Twinkling Starfield */
.efx-bg-stars {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 70% 18%, rgba(99, 102, 241, 0.16), transparent 55%),
    radial-gradient(ellipse at 22% 78%, rgba(168, 85, 247, 0.12), transparent 55%),
    #07070e;
}

.efx-bg-stars i {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  animation: efx-kbg-twinkle 3.2s ease-in-out infinite alternate;
}

.efx-bg-stars i:nth-child(1) {
  top: 18%;
  left: 24%;
  background: #e2e8f0;
  box-shadow:
    40px 60px #ffffff,
    180px 30px rgba(255, 255, 255, 0.9),
    320px 140px rgba(255, 255, 255, 0.7),
    470px 50px #ffffff,
    610px 180px rgba(255, 255, 255, 0.8),
    760px 90px rgba(255, 255, 255, 0.6),
    850px 260px #ffffff,
    120px 300px rgba(255, 255, 255, 0.75),
    280px 380px #ffffff,
    430px 320px rgba(255, 255, 255, 0.85),
    560px 420px rgba(255, 255, 255, 0.6),
    700px 350px #ffffff,
    840px 480px rgba(255, 255, 255, 0.7),
    90px 480px rgba(255, 255, 255, 0.8),
    380px 520px rgba(255, 255, 255, 0.65),
    640px 540px #ffffff;
}

.efx-bg-stars i:nth-child(2) {
  top: 8%;
  left: 58%;
  background: #a5b4fc;
  animation-duration: 4.1s;
  animation-delay: 0.8s;
  box-shadow:
    60px 120px rgba(165, 180, 252, 0.9),
    240px 220px rgba(253, 230, 138, 0.9),
    500px 100px rgba(165, 180, 252, 0.8),
    720px 240px rgba(244, 114, 182, 0.8),
    880px 40px rgba(165, 180, 252, 0.7),
    160px 440px rgba(253, 230, 138, 0.75),
    400px 260px rgba(165, 180, 252, 0.85),
    600px 460px rgba(244, 114, 182, 0.7),
    800px 420px rgba(165, 180, 252, 0.8),
    300px 60px rgba(244, 114, 182, 0.75),
    540px 340px rgba(253, 230, 138, 0.8),
    100px 240px rgba(165, 180, 252, 0.7);
}

.efx-bg-stars i:nth-child(3) {
  top: 62%;
  left: 8%;
  background: rgba(226, 232, 240, 0.85);
  animation-duration: 5s;
  animation-delay: 1.6s;
  box-shadow:
    140px 80px rgba(255, 255, 255, 0.5),
    330px 200px rgba(255, 255, 255, 0.4),
    520px 60px rgba(255, 255, 255, 0.5),
    690px 160px rgba(255, 255, 255, 0.45),
    860px 320px rgba(255, 255, 255, 0.4),
    60px 360px rgba(255, 255, 255, 0.5),
    250px 300px rgba(255, 255, 255, 0.35),
    460px 440px rgba(255, 255, 255, 0.5),
    640px 260px rgba(255, 255, 255, 0.4),
    820px 540px rgba(255, 255, 255, 0.45),
    180px 540px rgba(255, 255, 255, 0.35),
    740px 20px rgba(255, 255, 255, 0.5);
}

@keyframes efx-kbg-twinkle {
  from {
    opacity: 0.25;
  }
  to {
    opacity: 1;
  }
}
`,
  },
  {
    id: 'confetti-fall',
    name: 'Falling Confetti',
    description:
      'Bright confetti squares tumble and spin down the stage on staggered, looping timelines.',
    category: 'backgrounds',
    tags: ['confetti', 'falling', 'party'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-confetti" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>',
    css: `/* Falling Confetti */
.efx-bg-confetti {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #101019, #0b0b12);
}

.efx-bg-confetti i {
  position: absolute;
  top: -30px;
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: #a78bfa;
  animation: efx-kbg-confetti 6s linear infinite;
}

.efx-bg-confetti i:nth-child(1) {
  left: 5%;
  animation-delay: -0.4s;
}

.efx-bg-confetti i:nth-child(2) {
  left: 16%;
  width: 7px;
  height: 7px;
  background: #f472b6;
  animation-duration: 7.5s;
  animation-delay: -2.1s;
}

.efx-bg-confetti i:nth-child(3) {
  left: 27%;
  width: 12px;
  height: 12px;
  background: #fbbf24;
  animation-duration: 5.4s;
  animation-delay: -3.2s;
}

.efx-bg-confetti i:nth-child(4) {
  left: 38%;
  width: 8px;
  height: 8px;
  background: #4ade80;
  animation-duration: 8.2s;
  animation-delay: -1.1s;
}

.efx-bg-confetti i:nth-child(5) {
  left: 49%;
  width: 11px;
  height: 11px;
  background: #38bdf8;
  animation-duration: 6.6s;
  animation-delay: -4.5s;
}

.efx-bg-confetti i:nth-child(6) {
  left: 60%;
  width: 7px;
  height: 7px;
  background: #f87171;
  animation-duration: 7.1s;
  animation-delay: -0.9s;
}

.efx-bg-confetti i:nth-child(7) {
  left: 71%;
  width: 9px;
  height: 9px;
  background: #e879f9;
  animation-duration: 5.8s;
  animation-delay: -2.7s;
}

.efx-bg-confetti i:nth-child(8) {
  left: 82%;
  width: 12px;
  height: 12px;
  background: #34d399;
  animation-duration: 8.8s;
  animation-delay: -3.9s;
}

.efx-bg-confetti i:nth-child(9) {
  left: 91%;
  width: 8px;
  height: 8px;
  background: #facc15;
  animation-duration: 6.9s;
  animation-delay: -1.7s;
}

.efx-bg-confetti i:nth-child(10) {
  left: 33%;
  width: 6px;
  height: 6px;
  background: #f9a8d4;
  animation-duration: 9.5s;
  animation-delay: -6s;
}

@keyframes efx-kbg-confetti {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  100% {
    transform: translateY(760px) rotate(540deg);
    opacity: 1;
  }
}
`,
  },
  {
    id: 'ocean-waves',
    name: 'Drifting Ocean Waves',
    description:
      'Two scalloped wave layers roll across the bottom of the screen in opposite directions.',
    category: 'backgrounds',
    tags: ['waves', 'ocean', 'drift'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-waves" aria-hidden="true"></div>',
    css: `/* Drifting Ocean Waves */
.efx-bg-waves {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #0a0e1a 0%, #0d1528 60%, #101b36 100%);
}

.efx-bg-waves::before,
.efx-bg-waves::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  background-repeat: repeat-x;
}

.efx-bg-waves::before {
  bottom: 30px;
  height: 45px;
  background-image: radial-gradient(
    circle at 45px 45px,
    rgba(125, 211, 252, 0.35) 45px,
    transparent 46px
  );
  background-size: 90px 45px;
  opacity: 0.7;
  animation: efx-kbg-wave-a 8s linear infinite;
}

.efx-bg-waves::after {
  bottom: 0;
  height: 30px;
  background-image: radial-gradient(
    circle at 30px 30px,
    rgba(56, 189, 248, 0.45) 30px,
    transparent 31px
  );
  background-size: 60px 30px;
  animation: efx-kbg-wave-b 4.5s linear infinite;
}

@keyframes efx-kbg-wave-a {
  to {
    background-position: 90px 0;
  }
}

@keyframes efx-kbg-wave-b {
  to {
    background-position: -60px 0;
  }
}
`,
  },
  {
    id: 'sunset-shift',
    name: 'Sunset Fade',
    description:
      'A wide sunset gradient breathes between indigo night and golden dusk while a soft sun glows.',
    category: 'backgrounds',
    tags: ['gradient', 'sunset', 'ambient'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-sunset" aria-hidden="true"></div>',
    css: `/* Sunset Fade */
.efx-bg-sunset {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    180deg,
    #1e1b4b 0%,
    #6d28d9 30%,
    #db2777 52%,
    #ea580c 72%,
    #f59e0b 88%,
    #fcd34d 100%
  );
  background-size: 100% 300%;
  background-position: 50% 0%;
  animation: efx-kbg-sunset-shift 18s ease-in-out infinite alternate;
}

.efx-bg-sunset::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 72%,
    rgba(254, 240, 138, 0.55),
    transparent 42%
  );
  animation: efx-kbg-sun-glow 18s ease-in-out infinite alternate;
}

@keyframes efx-kbg-sunset-shift {
  from {
    background-position: 50% 0%;
  }
  to {
    background-position: 50% 100%;
  }
}

@keyframes efx-kbg-sun-glow {
  from {
    opacity: 0.9;
    transform: translateY(26px);
  }
  to {
    opacity: 0.5;
    transform: translateY(-20px);
  }
}
`,
  },
  {
    id: 'tv-static',
    name: 'TV Static',
    description:
      'A fine monochrome noise field jitters between frames beneath gently flickering scanlines.',
    category: 'backgrounds',
    tags: ['noise', 'retro', 'static'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-static" aria-hidden="true"></div>',
    css: `/* TV Static */
.efx-bg-static {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0b0b10;
}

.efx-bg-static::before {
  content: "";
  position: absolute;
  inset: -2px;
  background-image: repeating-conic-gradient(
    rgba(226, 232, 240, 0.85) 0% 25%,
    transparent 0% 50%
  );
  background-size: 2px 2px;
  opacity: 0.16;
  animation: efx-kbg-static-jitter 0.36s steps(1) infinite;
}

.efx-bg-static::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    0deg,
    rgba(5, 5, 8, 0.5) 0px,
    rgba(5, 5, 8, 0.5) 1px,
    transparent 1px,
    transparent 3px
  );
  animation: efx-kbg-static-flicker 3s steps(1) infinite;
}

@keyframes efx-kbg-static-jitter {
  0% {
    transform: translate(0px, 0px);
  }
  25% {
    transform: translate(-1px, 1px);
  }
  50% {
    transform: translate(1px, -1px);
  }
  75% {
    transform: translate(-1px, -1px);
  }
  100% {
    transform: translate(0px, 0px);
  }
}

@keyframes efx-kbg-static-flicker {
  0%,
  100% {
    opacity: 0.9;
  }
  41% {
    opacity: 0.7;
  }
  43% {
    opacity: 1;
  }
  78% {
    opacity: 0.8;
  }
}
`,
  },
  {
    id: 'plasma-blobs',
    name: 'Plasma Blobs',
    description:
      'Three screen-blended color blobs drift and swell through a deep navy haze.',
    category: 'backgrounds',
    tags: ['blur', 'blobs', 'ambient'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-plasma" aria-hidden="true"><i></i><i></i><i></i></div>',
    css: `/* Plasma Blobs */
.efx-bg-plasma {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #08080f;
}

.efx-bg-plasma i {
  position: absolute;
  width: 46%;
  height: 58%;
  border-radius: 50%;
  filter: blur(64px);
  mix-blend-mode: screen;
  opacity: 0.65;
}

.efx-bg-plasma i:nth-child(1) {
  top: -12%;
  left: -8%;
  background: radial-gradient(circle at 50% 50%, #22d3ee, transparent 70%);
  animation: efx-kbg-plasma-a 13s ease-in-out infinite alternate;
}

.efx-bg-plasma i:nth-child(2) {
  bottom: -16%;
  right: -6%;
  background: radial-gradient(circle at 50% 50%, #e879f9, transparent 70%);
  animation: efx-kbg-plasma-b 17s ease-in-out infinite alternate;
}

.efx-bg-plasma i:nth-child(3) {
  top: 24%;
  left: 32%;
  background: radial-gradient(circle at 50% 50%, #6366f1, transparent 70%);
  animation: efx-kbg-plasma-c 21s ease-in-out infinite alternate;
}

@keyframes efx-kbg-plasma-a {
  to {
    transform: translate(45%, 30%) scale(1.25);
  }
}

@keyframes efx-kbg-plasma-b {
  to {
    transform: translate(-40%, -25%) scale(1.15);
  }
}

@keyframes efx-kbg-plasma-c {
  0% {
    transform: translate(-25%, 20%) scale(0.9);
  }
  100% {
    transform: translate(20%, -18%) scale(1.3);
  }
}
`,
  },
  {
    id: 'light-beams',
    name: 'Sweeping Light Beams',
    description:
      'Six translucent beams fan out from the center and rotate slowly like a retro projector.',
    category: 'backgrounds',
    tags: ['beams', 'conic', 'ambient'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-beams" aria-hidden="true"></div>',
    css: `/* Sweeping Light Beams */
.efx-bg-beams {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #0a0a12;
}

.efx-bg-beams::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg at 50% 50%,
    transparent 0deg,
    rgba(103, 232, 249, 0.14) 6deg,
    transparent 14deg,
    transparent 60deg,
    rgba(167, 139, 250, 0.14) 66deg,
    transparent 74deg,
    transparent 120deg,
    rgba(248, 114, 182, 0.14) 126deg,
    transparent 134deg,
    transparent 180deg,
    rgba(103, 232, 249, 0.12) 186deg,
    transparent 194deg,
    transparent 240deg,
    rgba(167, 139, 250, 0.12) 246deg,
    transparent 254deg,
    transparent 300deg,
    rgba(248, 114, 182, 0.12) 306deg,
    transparent 314deg,
    transparent 360deg
  );
  animation: efx-kbg-beams-spin 24s linear infinite;
}

.efx-bg-beams::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    transparent 20%,
    rgba(10, 10, 18, 0.9) 100%
  );
}

@keyframes efx-kbg-beams-spin {
  to {
    transform: rotate(360deg);
  }
}
`,
  },
  {
    id: 'snowfall',
    name: 'Gentle Snowfall',
    description:
      'Two parallax layers of soft white flakes drift down through the night and loop seamlessly.',
    category: 'backgrounds',
    tags: ['snow', 'winter', 'falling'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-snow" aria-hidden="true"></div>',
    css: `/* Gentle Snowfall */
.efx-bg-snow {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 0%, #111527, #07070d 72%);
}

.efx-bg-snow::before,
.efx-bg-snow::after {
  content: "";
  position: absolute;
  inset: 0;
}

.efx-bg-snow::before {
  background-image:
    radial-gradient(1.5px 1.5px at 30px 40px, rgba(255, 255, 255, 0.55), transparent 2px),
    radial-gradient(1px 1px at 120px 150px, rgba(255, 255, 255, 0.45), transparent 1.5px),
    radial-gradient(1.5px 1.5px at 200px 90px, rgba(255, 255, 255, 0.5), transparent 2px),
    radial-gradient(1px 1px at 60px 210px, rgba(255, 255, 255, 0.4), transparent 1.5px),
    radial-gradient(1.5px 1.5px at 170px 230px, rgba(255, 255, 255, 0.55), transparent 2px);
  background-size: 240px 240px;
  opacity: 0.6;
  animation: efx-kbg-snow-far 22s linear infinite;
}

.efx-bg-snow::after {
  background-image:
    radial-gradient(2.5px 2.5px at 50px 60px, rgba(255, 255, 255, 0.9), transparent 3px),
    radial-gradient(2px 2px at 150px 20px, rgba(255, 255, 255, 0.75), transparent 2.5px),
    radial-gradient(3px 3px at 190px 160px, rgba(255, 255, 255, 0.85), transparent 3.5px),
    radial-gradient(2px 2px at 90px 200px, rgba(255, 255, 255, 0.7), transparent 2.5px),
    radial-gradient(2.5px 2.5px at 20px 140px, rgba(255, 255, 255, 0.8), transparent 3px);
  background-size: 220px 220px;
  animation: efx-kbg-snow-near 12s linear infinite;
}

@keyframes efx-kbg-snow-far {
  to {
    background-position: 0px 240px;
  }
}

@keyframes efx-kbg-snow-near {
  to {
    background-position: 220px 220px;
  }
}
`,
  },
  {
    id: 'rainbow-road',
    name: 'Rainbow Road',
    description:
      'A glowing spectrum highway with a bright horizon line scrolls endlessly along the bottom.',
    category: 'backgrounds',
    tags: ['rainbow', 'gradient', 'scroll'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-rainbow" aria-hidden="true"></div>',
    css: `/* Rainbow Road */
.efx-bg-rainbow {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, #0b0b12 0%, #0d0d16 60%, #12101f 100%);
}

.efx-bg-rainbow::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 34%;
  background: linear-gradient(
    90deg,
    #f43f5e,
    #f97316,
    #facc15,
    #4ade80,
    #22d3ee,
    #818cf8,
    #e879f9,
    #f43f5e
  );
  background-size: 200% 100%;
  filter: blur(22px) saturate(1.25);
  opacity: 0.7;
  animation: efx-kbg-rainbow-scroll 6s linear infinite;
}

.efx-bg-rainbow::after {
  content: "";
  position: absolute;
  bottom: 34%;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    #f43f5e,
    #f97316,
    #facc15,
    #4ade80,
    #22d3ee,
    #818cf8,
    #e879f9,
    #f43f5e
  );
  background-size: 200% 100%;
  box-shadow:
    0 0 12px rgba(244, 114, 182, 0.6),
    0 0 28px rgba(129, 140, 248, 0.5);
  animation: efx-kbg-rainbow-scroll 6s linear infinite;
}

@keyframes efx-kbg-rainbow-scroll {
  to {
    background-position: 200% 0%;
  }
}
`,
  },
  {
    id: 'searchlight',
    name: 'Searchlight Sweep',
    description:
      'A warm spotlight cone swings from the top of the stage, sweeping light across the dark.',
    category: 'backgrounds',
    tags: ['spotlight', 'beam', 'sweep'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-bg-searchlight" aria-hidden="true"></div>',
    css: `/* Searchlight Sweep */
.efx-bg-searchlight {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 115%, #12122a, #0a0a12 62%);
}

.efx-bg-searchlight::before {
  content: "";
  position: absolute;
  top: -4%;
  left: 50%;
  width: 56%;
  height: 150%;
  margin-left: -28%;
  transform-origin: 50% 0%;
  background: linear-gradient(
    to bottom,
    rgba(253, 230, 138, 0.22),
    rgba(253, 230, 138, 0.08) 55%,
    transparent 82%
  );
  clip-path: polygon(44% 0%, 56% 0%, 100% 100%, 0% 100%);
  animation: efx-kbg-searchlight-sweep 7.5s ease-in-out infinite alternate;
}

.efx-bg-searchlight::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background: radial-gradient(
    ellipse at 50% 100%,
    rgba(253, 230, 138, 0.12),
    transparent 60%
  );
}

@keyframes efx-kbg-searchlight-sweep {
  from {
    transform: rotate(-36deg);
  }
  to {
    transform: rotate(36deg);
  }
}
`,
  },
];
