import type { CSSEffect } from './types';

export const MISC_EFFECTS: CSSEffect[] = [
  {
    id: 'glass-panel',
    name: 'Glassmorphism Panel',
    description:
      'A frosted glass card with backdrop-filter blur floating over a vivid gradient scene.',
    category: 'misc',
    tags: ['glassmorphism', 'blur', 'backdrop-filter'],
    hint: 'auto',
    fill: true,
    html: '<div class="efx-glass-scene"><div class="efx-glass"><h4>Glassmorphism</h4><p>backdrop-filter: blur(12px)</p></div></div>',
    css: `/* Glassmorphism Panel */
.efx-glass-scene {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(135deg, #8b5cf6, #ec4899 55%, #f59e0b);
}

.efx-glass-scene::before {
  content: "";
  position: absolute;
  top: 8%;
  left: 10%;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  filter: blur(4px);
}

.efx-glass-scene::after {
  content: "";
  position: absolute;
  bottom: 10%;
  right: 12%;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(30, 10, 60, 0.55);
  filter: blur(2px);
}

.efx-glass {
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  width: fit-content;
  padding: 18px 22px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.35);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  color: #ffffff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
}

.efx-glass h4 {
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 700;
}

.efx-glass p {
  margin: 0;
  font-size: 12.5px;
}
`,
  },
  {
    id: 'toggle-switch',
    name: 'Gradient Toggle',
    description:
      'A checkbox-hack switch with a springy knob that slides into a pink-violet track.',
    category: 'misc',
    tags: ['toggle', 'form', 'checkbox'],
    hint: 'click',
    html: '<label class="efx-toggle"><input type="checkbox" checked><span class="efx-toggle-track"></span></label>',
    css: `/* Gradient Toggle */
.efx-toggle {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;
}

.efx-toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.efx-toggle-track {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: #2a2a35;
  border: 1px solid rgba(148, 163, 184, 0.25);
  cursor: pointer;
  transition: background 0.3s ease;
}

.efx-toggle-track::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #f8fafc;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s cubic-bezier(0.5, 0.1, 0.2, 1.4);
}

.efx-toggle input:checked + .efx-toggle-track {
  background: linear-gradient(90deg, #f472b6, #a78bfa);
}

.efx-toggle input:checked + .efx-toggle-track::before {
  transform: translateX(30px);
}

.efx-toggle input:focus-visible + .efx-toggle-track {
  outline: 2px solid #a78bfa;
  outline-offset: 3px;
}
`,
  },
  {
    id: 'tooltip',
    name: 'Smooth Tooltip',
    description:
      'A violet tooltip with arrow scales and fades in above the trigger, pure CSS driven.',
    category: 'misc',
    tags: ['tooltip', 'hover', 'pseudo-elements'],
    hint: 'hover',
    html: '<button class="efx-tooltip" data-tip="Hello from CSS!">Hover me</button>',
    css: `/* Smooth Tooltip */
.efx-tooltip {
  position: relative;
  display: inline-flex;
  padding: 12px 26px;
  font-size: 14px;
  font-weight: 600;
  color: #e2e8f0;
  background: #1d1d28;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 10px;
  cursor: pointer;
  transition:
    border-color 0.25s ease,
    color 0.25s ease;
}

.efx-tooltip:hover {
  border-color: rgba(167, 139, 250, 0.6);
  color: #ffffff;
}

.efx-tooltip::after {
  content: attr(data-tip);
  position: absolute;
  bottom: calc(100% + 12px);
  left: 50%;
  padding: 8px 14px;
  font-size: 12.5px;
  font-weight: 500;
  white-space: nowrap;
  color: #ffffff;
  background: #a78bfa;
  border-radius: 8px;
  opacity: 0;
  transform: translateX(-50%) translateY(6px) scale(0.9);
  pointer-events: none;
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.efx-tooltip::before {
  content: "";
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  border: 6px solid transparent;
  border-top-color: #a78bfa;
  opacity: 0;
  transform: translateX(-50%) translateY(6px);
  pointer-events: none;
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.efx-tooltip:hover::after,
.efx-tooltip:hover::before {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
`,
  },
  {
    id: 'avatar-ring',
    name: 'Gradient Avatar Ring',
    description:
      'A spinning conic-gradient ring frames the avatar; hover pauses the rotation.',
    category: 'misc',
    tags: ['avatar', 'gradient', 'conic-gradient'],
    hint: 'hover',
    html: '<div class="efx-avatar-ring"><span class="efx-avatar-ring-inner">Z</span></div>',
    css: `/* Gradient Avatar Ring */
.efx-avatar-ring {
  position: relative;
  z-index: 0;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.efx-avatar-ring::before {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: conic-gradient(#f472b6, #a78bfa, #fbbf24, #4ade80, #f472b6);
  animation: efx-avatar-spin 3.5s linear infinite;
}

.efx-avatar-ring:hover::before {
  animation-play-state: paused;
}

.efx-avatar-ring-inner {
  position: relative;
  z-index: 1;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: #14141c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #f472b6;
}

@keyframes efx-avatar-spin {
  to {
    transform: rotate(360deg);
  }
}
`,
  },
  {
    id: 'skeleton-shimmer',
    name: 'Skeleton Shimmer',
    description:
      'A loading placeholder with avatar and text lines swept by a traveling shimmer highlight.',
    category: 'misc',
    tags: ['skeleton', 'loading', 'shimmer'],
    hint: 'auto',
    html: '<div class="efx-misc-skel"><div class="efx-misc-skel-avatar"></div><div class="efx-misc-skel-body"><div class="efx-misc-skel-line"></div><div class="efx-misc-skel-line efx-misc-skel-line--short"></div></div></div>',
    css: `/* Skeleton Shimmer */
.efx-misc-skel {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 252px;
  padding: 16px;
  border-radius: 14px;
  background: #16161f;
  border: 1px solid rgba(148, 163, 184, 0.18);
}

.efx-misc-skel-avatar {
  flex: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(90deg, #262636, #3a3a52, #262636);
  background-size: 200% 100%;
  animation: efx-km-skel 1.6s ease-in-out infinite;
}

.efx-misc-skel-body {
  flex: 1;
  display: grid;
  gap: 10px;
}

.efx-misc-skel-line {
  height: 12px;
  border-radius: 6px;
  background: linear-gradient(90deg, #262636, #3a3a52, #262636);
  background-size: 200% 100%;
  animation: efx-km-skel 1.6s ease-in-out infinite;
}

.efx-misc-skel-line--short {
  width: 58%;
}

@keyframes efx-km-skel {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}
`,
  },
  {
    id: 'progress-bar',
    name: 'Striped Progress Bar',
    description:
      'An indeterminate progress bar with marching stripes and a glowing head that eases back and forth.',
    category: 'misc',
    tags: ['progress', 'stripes', 'animation'],
    hint: 'auto',
    html: '<div class="efx-misc-progress"><div class="efx-misc-progress-fill"></div></div>',
    css: `/* Striped Progress Bar */
.efx-misc-progress {
  position: relative;
  width: 220px;
  height: 14px;
  border-radius: 999px;
  background: #20202c;
  border: 1px solid rgba(148, 163, 184, 0.22);
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.5);
}

.efx-misc-progress-fill {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 30%;
  border-radius: 999px;
  background: linear-gradient(90deg, #22d3ee, #818cf8);
  animation: efx-km-progress-grow 3s ease-in-out infinite alternate;
}

.efx-misc-progress-fill::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: repeating-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.25) 0 6px,
    transparent 6px 12px
  );
  animation: efx-km-progress-stripes 0.7s linear infinite;
}

.efx-misc-progress-fill::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e0e7ff;
  box-shadow: 0 0 12px 4px rgba(129, 140, 248, 0.75);
  transform: translate(50%, -50%);
}

@keyframes efx-km-progress-grow {
  from {
    width: 30%;
  }

  to {
    width: 85%;
  }
}

@keyframes efx-km-progress-stripes {
  to {
    background-position: 16.97px 0;
  }
}
`,
  },
  {
    id: 'ping-badge',
    name: 'Ping Notification Badge',
    description:
      'A bell button emitting radar ping rings while its red count badge bounces for attention.',
    category: 'misc',
    tags: ['notification', 'badge', 'ping'],
    hint: 'auto',
    html: '<div class="efx-misc-ping"><span class="efx-misc-ping-bell">🔔</span><span class="efx-misc-ping-count">3</span></div>',
    css: `/* Ping Notification Badge */
.efx-misc-ping {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  font-size: 26px;
  border-radius: 18px;
  background: #1b1b28;
  border: 1px solid rgba(148, 163, 184, 0.25);
}

.efx-misc-ping::before,
.efx-misc-ping::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid rgba(248, 113, 113, 0.55);
  animation: efx-km-ping-ring 2.2s cubic-bezier(0, 0, 0.2, 1) infinite;
  pointer-events: none;
}

.efx-misc-ping::after {
  animation-delay: 1.1s;
}

.efx-misc-ping-count {
  position: absolute;
  top: -8px;
  right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 5px;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  background: #ef4444;
  border-radius: 999px;
  box-shadow: 0 0 0 3px #12121c;
  animation: efx-km-ping-bounce 2.2s ease infinite;
}

@keyframes efx-km-ping-ring {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }

  70%,
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

@keyframes efx-km-ping-bounce {
  0%,
  55%,
  100% {
    transform: translateY(0);
  }

  8% {
    transform: translateY(-6px);
  }

  16% {
    transform: translateY(0);
  }

  24% {
    transform: translateY(-3px);
  }
}
`,
  },
  {
    id: 'glow-input',
    name: 'Glowing Search Input',
    description:
      'A search field that ignites a cyan glow and floats its label upward on focus, no JavaScript needed.',
    category: 'misc',
    tags: ['input', 'focus', 'glow'],
    hint: 'click',
    html: '<label class="efx-misc-glowfield"><span class="efx-misc-glowfield-icon"></span><input class="efx-misc-glowfield-input" type="text" placeholder=" "><span class="efx-misc-glowfield-label">Search effects</span></label>',
    css: `/* Glowing Search Input */
.efx-misc-glowfield {
  position: relative;
  display: flex;
  align-items: center;
  width: 236px;
  height: 48px;
  padding: 0 14px;
  border-radius: 12px;
  background: #16161f;
  border: 1px solid rgba(148, 163, 184, 0.25);
  cursor: text;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.efx-misc-glowfield:focus-within {
  border-color: rgba(56, 189, 248, 0.8);
  box-shadow:
    0 0 0 3px rgba(56, 189, 248, 0.16),
    0 0 24px rgba(56, 189, 248, 0.35);
}

.efx-misc-glowfield-icon {
  position: relative;
  flex: none;
  width: 15px;
  height: 15px;
  margin-right: 10px;
}

.efx-misc-glowfield-icon::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  border: 2px solid #64748b;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}

.efx-misc-glowfield-icon::after {
  content: "";
  position: absolute;
  left: 9px;
  top: 9px;
  width: 6px;
  height: 2px;
  border-radius: 2px;
  background: #64748b;
  transform: rotate(45deg);
  transform-origin: 0 50%;
  transition: background-color 0.3s ease;
}

.efx-misc-glowfield:focus-within .efx-misc-glowfield-icon::before {
  border-color: #38bdf8;
}

.efx-misc-glowfield:focus-within .efx-misc-glowfield-icon::after {
  background: #38bdf8;
}

.efx-misc-glowfield-input {
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 12px 0 0;
  font-size: 14px;
  color: #e2e8f0;
  caret-color: #38bdf8;
  background: transparent;
  border: none;
  outline: none;
}

.efx-misc-glowfield-label {
  position: absolute;
  left: 39px;
  top: 50%;
  font-size: 14px;
  color: #64748b;
  pointer-events: none;
  transform: translateY(-50%);
  transform-origin: left center;
  transition:
    transform 0.25s ease,
    color 0.25s ease;
}

.efx-misc-glowfield:focus-within .efx-misc-glowfield-label,
.efx-misc-glowfield-input:not(:placeholder-shown) ~ .efx-misc-glowfield-label {
  transform: translateY(calc(-50% - 13px)) scale(0.72);
  color: #38bdf8;
}
`,
  },
  {
    id: 'star-rating',
    name: 'Hover Star Rating',
    description:
      'Five stars that fill with gold cumulatively as you sweep across them, powered by sibling selectors.',
    category: 'misc',
    tags: ['rating', 'hover', 'sibling-selectors'],
    hint: 'hover',
    html: '<div class="efx-misc-stars"><span class="efx-misc-stars-star">★</span><span class="efx-misc-stars-star">★</span><span class="efx-misc-stars-star">★</span><span class="efx-misc-stars-star">★</span><span class="efx-misc-stars-star">★</span></div>',
    css: `/* Hover Star Rating */
.efx-misc-stars {
  display: inline-flex;
  flex-direction: row-reverse;
  gap: 8px;
  font-size: 34px;
  line-height: 1;
  cursor: pointer;
}

.efx-misc-stars-star {
  color: #3d3d52;
  transition:
    color 0.18s ease,
    transform 0.18s ease,
    text-shadow 0.18s ease;
}

.efx-misc-stars-star:hover,
.efx-misc-stars-star:hover ~ .efx-misc-stars-star {
  color: #fbbf24;
  text-shadow: 0 0 14px rgba(251, 191, 36, 0.55);
}

.efx-misc-stars-star:hover {
  transform: scale(1.2) rotate(-6deg);
}
`,
  },
  {
    id: 'details-accordion',
    name: 'Smooth Accordion',
    description:
      'A details accordion whose border-made chevron flips while the body reveals via a grid-template-rows transition.',
    category: 'misc',
    tags: ['accordion', 'details', 'grid-rows'],
    hint: 'click',
    html: '<details class="efx-misc-acc"><summary class="efx-misc-acc-summary">Is this pure CSS?<span class="efx-misc-acc-chevron"></span></summary><div class="efx-misc-acc-body"><div class="efx-misc-acc-text"><p>Yes — the smooth height reveal uses the grid-template-rows: 0fr to 1fr trick, no JavaScript involved.</p></div></div></details>',
    css: `/* Smooth Accordion */
.efx-misc-acc {
  width: 250px;
  border-radius: 12px;
  background: #17171f;
  border: 1px solid rgba(148, 163, 184, 0.2);
  overflow: hidden;
}

.efx-misc-acc-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 13px 16px;
  font-size: 13.5px;
  font-weight: 600;
  color: #e2e8f0;
  cursor: pointer;
  user-select: none;
  list-style: none;
}

.efx-misc-acc-summary::-webkit-details-marker {
  display: none;
}

.efx-misc-acc-chevron {
  flex: none;
  width: 9px;
  height: 9px;
  border-right: 2px solid #94a3b8;
  border-bottom: 2px solid #94a3b8;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}

.efx-misc-acc[open] .efx-misc-acc-chevron {
  transform: rotate(225deg);
}

.efx-misc-acc-body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease;
}

.efx-misc-acc[open] .efx-misc-acc-body {
  grid-template-rows: 1fr;
}

.efx-misc-acc-text {
  overflow: hidden;
}

.efx-misc-acc-text p {
  margin: 0;
  padding: 0 16px 14px;
  font-size: 12.5px;
  line-height: 1.6;
  color: #94a3b8;
}
`,
  },
  {
    id: 'marquee-ticker',
    name: 'Infinite Marquee Ticker',
    description:
      'An endless news-style ticker sliding duplicated text inside a masked pill track; hover pauses it.',
    category: 'misc',
    tags: ['marquee', 'ticker', 'infinite'],
    hint: 'auto',
    html: '<div class="efx-misc-ticker"><div class="efx-misc-ticker-track"><span>✦ Pure CSS&nbsp;·&nbsp;Zero JavaScript&nbsp;·&nbsp;Infinite Loop&nbsp;·&nbsp;</span><span>✦ Pure CSS&nbsp;·&nbsp;Zero JavaScript&nbsp;·&nbsp;Infinite Loop&nbsp;·&nbsp;</span></div></div>',
    css: `/* Infinite Marquee Ticker */
.efx-misc-ticker {
  width: 250px;
  padding: 10px 0;
  overflow: hidden;
  border-radius: 999px;
  background: #17171f;
  border: 1px solid rgba(148, 163, 184, 0.2);
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    #000 14%,
    #000 86%,
    transparent
  );
  mask-image: linear-gradient(
    90deg,
    transparent,
    #000 14%,
    #000 86%,
    transparent
  );
}

.efx-misc-ticker-track {
  display: flex;
  width: max-content;
  animation: efx-km-ticker 14s linear infinite;
}

.efx-misc-ticker-track span {
  white-space: nowrap;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #7dd3fc;
}

.efx-misc-ticker:hover .efx-misc-ticker-track {
  animation-play-state: paused;
}

@keyframes efx-km-ticker {
  to {
    transform: translateX(-50%);
  }
}
`,
  },
  {
    id: 'toast-pop',
    name: 'Pop-in Toast',
    description:
      'A toast card that springs in, lingers just long enough to read, then slides away on an infinite loop.',
    category: 'misc',
    tags: ['toast', 'notification', 'slide'],
    hint: 'auto',
    html: '<div class="efx-misc-toast-stage"><div class="efx-misc-toast"><span class="efx-misc-toast-icon">✓</span><div class="efx-misc-toast-text"><strong>Changes saved</strong><p>Your scene is live.</p></div></div></div>',
    css: `/* Pop-in Toast */
.efx-misc-toast-stage {
  display: flex;
  justify-content: center;
  width: 260px;
  overflow: hidden;
  padding: 18px 0;
}

.efx-misc-toast {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: none;
  width: 232px;
  padding: 12px 14px;
  border-radius: 14px;
  background: #1c1c28;
  border: 1px solid rgba(148, 163, 184, 0.22);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.5);
  animation: efx-km-toast 5s ease infinite;
}

.efx-misc-toast-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 30px;
  height: 30px;
  font-size: 15px;
  font-weight: 800;
  color: #4ade80;
  background: rgba(74, 222, 128, 0.14);
  border: 1px solid rgba(74, 222, 128, 0.35);
  border-radius: 10px;
}

.efx-misc-toast-text strong {
  display: block;
  font-size: 13px;
  color: #f1f5f9;
}

.efx-misc-toast-text p {
  margin: 2px 0 0;
  font-size: 11.5px;
  line-height: 1.45;
  color: #94a3b8;
}

@keyframes efx-km-toast {
  0% {
    transform: translateX(-170%);
    opacity: 0;
  }

  10% {
    transform: translateX(6%);
    opacity: 1;
  }

  14% {
    transform: translateX(0);
    opacity: 1;
  }

  76% {
    transform: translateX(0);
    opacity: 1;
  }

  88%,
  100% {
    transform: translateX(170%);
    opacity: 0;
  }
}
`,
  },
  {
    id: 'segmented-control',
    name: 'Segmented Control',
    description:
      'A pill control where a gradient thumb glides beneath whichever segment you hover, driven by sibling selectors.',
    category: 'misc',
    tags: ['tabs', 'control', 'hover'],
    hint: 'hover',
    html: '<div class="efx-misc-seg"><button class="efx-misc-seg-btn" type="button">Day</button><button class="efx-misc-seg-btn" type="button">Week</button><button class="efx-misc-seg-btn" type="button">Month</button><span class="efx-misc-seg-thumb"></span></div>',
    css: `/* Segmented Control */
.efx-misc-seg {
  position: relative;
  display: flex;
  width: 250px;
  height: 44px;
  padding: 4px;
  border-radius: 999px;
  background: #17171f;
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.efx-misc-seg-btn {
  position: relative;
  z-index: 1;
  flex: 1;
  font-size: 13px;
  font-weight: 600;
  color: #94a3b8;
  background: transparent;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: color 0.25s ease;
}

.efx-misc-seg-btn:hover {
  color: #ffffff;
}

.efx-misc-seg-thumb {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  width: calc((100% - 8px) / 3);
  border-radius: 999px;
  background: linear-gradient(135deg, #818cf8, #c084fc);
  box-shadow: 0 4px 14px rgba(129, 140, 248, 0.45);
  opacity: 0;
  transform: translateX(100%);
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.2s ease;
}

.efx-misc-seg:hover .efx-misc-seg-thumb {
  opacity: 1;
}

.efx-misc-seg-btn:nth-child(1):hover ~ .efx-misc-seg-thumb {
  transform: translateX(0);
}

.efx-misc-seg-btn:nth-child(2):hover ~ .efx-misc-seg-thumb {
  transform: translateX(100%);
}

.efx-misc-seg-btn:nth-child(3):hover ~ .efx-misc-seg-thumb {
  transform: translateX(200%);
}
`,
  },
  {
    id: 'ripple-tile',
    name: 'Ripple Tile',
    description:
      'A tile that radiates soft ripple rings from its center on hover, with a glowing bolt icon above them.',
    category: 'misc',
    tags: ['ripple', 'hover', 'pseudo-elements'],
    hint: 'hover',
    html: '<div class="efx-misc-ripple"><span class="efx-misc-ripple-icon">⚡</span></div>',
    css: `/* Ripple Tile */
.efx-misc-ripple {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 86px;
  border-radius: 20px;
  background: linear-gradient(145deg, #242438, #15151e);
  border: 1px solid rgba(148, 163, 184, 0.25);
  overflow: hidden;
  cursor: pointer;
}

.efx-misc-ripple::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 30px;
  height: 30px;
  margin: -15px 0 0 -15px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(250, 204, 21, 0.4),
    rgba(250, 204, 21, 0) 70%
  );
  opacity: 0;
  pointer-events: none;
}

.efx-misc-ripple::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid rgba(250, 204, 21, 0.5);
  opacity: 0;
  pointer-events: none;
}

.efx-misc-ripple:hover::before {
  animation: efx-km-ripple-fill 1.2s ease-out infinite;
}

.efx-misc-ripple:hover::after {
  animation: efx-km-ripple-ring 1.2s ease-out 0.15s infinite;
}

.efx-misc-ripple-icon {
  position: relative;
  z-index: 1;
  font-size: 30px;
  transition:
    transform 0.3s ease,
    filter 0.3s ease;
}

.efx-misc-ripple:hover .efx-misc-ripple-icon {
  transform: scale(1.12);
  filter: drop-shadow(0 0 8px rgba(250, 204, 21, 0.8));
}

@keyframes efx-km-ripple-fill {
  0% {
    transform: scale(0.4);
    opacity: 0.9;
  }

  100% {
    transform: scale(6);
    opacity: 0;
  }
}

@keyframes efx-km-ripple-ring {
  0% {
    transform: scale(0.55);
    opacity: 0.8;
  }

  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}
`,
  },
];
