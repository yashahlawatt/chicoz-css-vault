import type { CSSEffect } from './types';

export const BUTTON_EFFECTS: CSSEffect[] = [
  {
    id: 'neon-button',
    name: 'Neon Glow Button',
    description:
      'An outlined button that ignites on hover with a layered neon glow, solid fill and inner light.',
    category: 'buttons',
    tags: ['hover', 'glow', 'border', 'neon'],
    hint: 'hover',
    html: '<button class="efx-btn-neon">Hover me</button>',
    css: `/* Neon Glow Button */
.efx-btn-neon {
  padding: 14px 34px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #4ade80;
  background: transparent;
  border: 2px solid #4ade80;
  border-radius: 10px;
  cursor: pointer;
  text-shadow: 0 0 10px rgba(74, 222, 128, 0.55);
  transition: all 0.35s ease;
}

.efx-btn-neon:hover {
  color: #052e16;
  background: #4ade80;
  text-shadow: none;
  box-shadow:
    0 0 16px rgba(74, 222, 128, 0.85),
    0 0 48px rgba(74, 222, 128, 0.45),
    inset 0 0 12px rgba(255, 255, 255, 0.4);
}
`,
  },
  {
    id: 'gradient-border-button',
    name: 'Gradient Border Button',
    description:
      'A pill button with a living gradient border that slides around the ring as you hover.',
    category: 'buttons',
    tags: ['hover', 'gradient', 'border'],
    hint: 'hover',
    html: '<button class="efx-btn-grad-border">Gradient</button>',
    css: `/* Gradient Border Button */
.efx-btn-grad-border {
  padding: 14px 34px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f8fafc;
  border: 2px solid transparent;
  border-radius: 999px;
  cursor: pointer;
  background:
    linear-gradient(#1b1b26, #1b1b26) padding-box,
    linear-gradient(120deg, #f472b6, #a78bfa, #fbbf24, #f472b6) border-box;
  background-size: 100% 100%, 300% 100%;
  background-position: 0 0, 0% 0%;
  transition:
    background-position 0.6s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.efx-btn-grad-border:hover {
  background-position: 0 0, 100% 0%;
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(167, 139, 250, 0.3);
}
`,
  },
  {
    id: 'shine-button',
    name: 'Shine Sweep Button',
    description:
      'A glossy rose button with a light beam that sweeps diagonally across its surface on hover.',
    category: 'buttons',
    tags: ['hover', 'shine', 'gradient'],
    hint: 'hover',
    html: '<button class="efx-btn-shine">Shine</button>',
    css: `/* Shine Sweep Button */
.efx-btn-shine {
  position: relative;
  overflow: hidden;
  padding: 14px 36px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(135deg, #f43f5e, #fb7185);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.efx-btn-shine::before {
  content: "";
  position: absolute;
  top: 0;
  left: -80%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    105deg,
    transparent,
    rgba(255, 255, 255, 0.55),
    transparent
  );
  transform: skewX(-20deg);
  transition: left 0.6s ease;
}

.efx-btn-shine:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px rgba(244, 63, 94, 0.4);
}

.efx-btn-shine:hover::before {
  left: 130%;
}
`,
  },
  {
    id: 'push-button-3d',
    name: '3D Push Button',
    description:
      'A tactile amber button with a hard shadow base that physically depresses when pressed.',
    category: 'buttons',
    tags: ['hover', 'active', '3d', 'shadow'],
    hint: 'click',
    html: '<button class="efx-btn-3d">Push me</button>',
    css: `/* 3D Push Button */
.efx-btn-3d {
  padding: 14px 34px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #422006;
  background: #fbbf24;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow:
    0 6px 0 #b45309,
    0 12px 20px rgba(0, 0, 0, 0.35);
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease;
}

.efx-btn-3d:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 0 #b45309,
    0 16px 24px rgba(0, 0, 0, 0.4);
}

.efx-btn-3d:active {
  transform: translateY(4px);
  box-shadow:
    0 2px 0 #b45309,
    0 6px 12px rgba(0, 0, 0, 0.35);
}
`,
  },
  {
    id: 'liquid-button',
    name: 'Liquid Fill Button',
    description:
      'A rising wave of color floods the button from below using a rotated pseudo-element.',
    category: 'buttons',
    tags: ['hover', 'fill', 'wave'],
    hint: 'hover',
    html: '<button class="efx-btn-fill">Liquid</button>',
    css: `/* Liquid Fill Button */
.efx-btn-fill {
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: 14px 34px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #e879f9;
  background: transparent;
  border: 2px solid #e879f9;
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.4s ease;
}

.efx-btn-fill::before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 50%;
  bottom: -10%;
  width: 120%;
  aspect-ratio: 1;
  border-radius: 42%;
  background: #e879f9;
  transform: translate(-50%, 100%) rotate(0deg);
  transition: transform 0.6s cubic-bezier(0.6, 0.05, 0.2, 1);
}

.efx-btn-fill:hover {
  color: #3b0764;
}

.efx-btn-fill:hover::before {
  transform: translate(-50%, 22%) rotate(180deg);
}
`,
  },
  {
    id: 'pulse-button',
    name: 'Pulse Ring Button',
    description:
      'Two expanding rings radiate from this emerald button on a loop to draw attention.',
    category: 'buttons',
    tags: ['animation', 'ring', 'attention'],
    hint: 'auto',
    html: '<button class="efx-btn-pulse">Pulse</button>',
    css: `/* Pulse Ring Button */
.efx-btn-pulse {
  position: relative;
  padding: 14px 34px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  background: #10b981;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.efx-btn-pulse::before,
.efx-btn-pulse::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 2px solid #10b981;
  animation: efx-pulse-ring 2s ease-out infinite;
  pointer-events: none;
}

.efx-btn-pulse::after {
  animation-delay: 1s;
}

@keyframes efx-pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.55);
    opacity: 0;
  }
}

.efx-btn-pulse:hover {
  background: #059669;
  transform: translateY(-2px);
}
`,
  },
  {
    id: 'swipe-underline-button',
    name: 'Swipe Underline Button',
    description:
      'A ghost button whose lime underline sweeps out from the left edge and glows as you hover.',
    category: 'buttons',
    tags: ['hover', 'underline', 'minimal'],
    hint: 'hover',
    html: '<button class="efx-btn-swipe">Underline</button>',
    css: `/* Swipe Underline Button */
.efx-btn-swipe {
  position: relative;
  padding: 14px 30px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #94a3b8;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.efx-btn-swipe::after {
  content: "";
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 7px;
  height: 3px;
  border-radius: 2px;
  background: #a3e635;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
}

.efx-btn-swipe:hover {
  color: #f8fafc;
}

.efx-btn-swipe:hover::after {
  transform: scaleX(1);
}
`,
  },
  {
    id: 'arrow-nudge-button',
    name: 'Arrow Nudge Button',
    description:
      'An indigo pill whose arrow mascot slides forward and lights up the border when you point at it.',
    category: 'buttons',
    tags: ['hover', 'arrow', 'nudge'],
    hint: 'hover',
    html: '<button class="efx-btn-arrow">Next</button>',
    css: `/* Arrow Nudge Button */
.efx-btn-arrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 13px 26px 13px 30px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #c7d2fe;
  background: #1d1d33;
  border: 1px solid #31315a;
  border-radius: 999px;
  cursor: pointer;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
}

.efx-btn-arrow::after {
  content: "→";
  font-size: 16px;
  line-height: 1;
  transition: transform 0.3s ease;
}

.efx-btn-arrow:hover {
  border-color: #818cf8;
  box-shadow: 0 8px 24px rgba(129, 140, 248, 0.35);
  transform: translateY(-2px);
}

.efx-btn-arrow:hover::after {
  transform: translateX(6px);
}

.efx-btn-arrow:active {
  transform: translateY(0);
}
`,
  },
  {
    id: 'split-fill-button',
    name: 'Split Fill Button',
    description:
      'Two color panels rush in from the left and right edges to meet behind the label on hover.',
    category: 'buttons',
    tags: ['hover', 'fill', 'split'],
    hint: 'hover',
    html: '<button class="efx-btn-split">Split</button>',
    css: `/* Split Fill Button */
.efx-btn-split {
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding: 14px 36px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #5eead4;
  background: transparent;
  border: 2px solid #2dd4bf;
  border-radius: 12px;
  cursor: pointer;
  transition:
    color 0.4s ease,
    border-color 0.4s ease,
    transform 0.3s ease;
}

.efx-btn-split::before,
.efx-btn-split::after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  width: 51%;
  transform: scaleX(0);
  transition: transform 0.45s cubic-bezier(0.65, 0, 0.35, 1);
}

.efx-btn-split::before {
  left: 0;
  background: #2dd4bf;
  transform-origin: left center;
}

.efx-btn-split::after {
  right: 0;
  background: #a78bfa;
  transform-origin: right center;
}

.efx-btn-split:hover {
  color: #0f172a;
  border-color: transparent;
  transform: translateY(-2px);
}

.efx-btn-split:hover::before,
.efx-btn-split:hover::after {
  transform: scaleX(1);
}
`,
  },
  {
    id: 'corner-trace-button',
    name: 'Corner Trace Button',
    description:
      'Amber corner brackets draw around the frame in two beats, tracing the whole border on hover.',
    category: 'buttons',
    tags: ['hover', 'border', 'trace'],
    hint: 'hover',
    html: '<button class="efx-btn-trace">Trace</button>',
    css: `/* Corner Trace Button */
.efx-btn-trace {
  position: relative;
  padding: 14px 34px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fbbf24;
  background: transparent;
  border: 1px solid rgba(251, 191, 36, 0.3);
  border-radius: 6px;
  cursor: pointer;
  transition:
    color 0.3s ease,
    background 0.3s ease;
}

.efx-btn-trace::before,
.efx-btn-trace::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  transition:
    width 0.3s ease,
    height 0.3s ease 0.25s;
}

.efx-btn-trace::before {
  top: -4px;
  left: -4px;
  border-top: 2px solid #fbbf24;
  border-left: 2px solid #fbbf24;
}

.efx-btn-trace::after {
  bottom: -4px;
  right: -4px;
  border-bottom: 2px solid #fbbf24;
  border-right: 2px solid #fbbf24;
}

.efx-btn-trace:hover {
  color: #fffbeb;
  background: rgba(251, 191, 36, 0.08);
}

.efx-btn-trace:hover::before,
.efx-btn-trace:hover::after {
  width: calc(100% + 8px);
  height: calc(100% + 8px);
}
`,
  },
  {
    id: 'skew-shift-button',
    name: 'Skew Shift Button',
    description:
      'A bold orange block shears sideways on hover while the label counter-leans to stay readable.',
    category: 'buttons',
    tags: ['hover', 'skew', 'motion'],
    hint: 'hover',
    html: '<button class="efx-btn-skew"><span class="efx-btn-skew-label">Skew</span></button>',
    css: `/* Skew Shift Button */
.efx-btn-skew {
  padding: 14px 32px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  background: #f97316;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s ease;
}

.efx-btn-skew-label {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.efx-btn-skew:hover {
  transform: skewX(-8deg) translateY(-2px);
  box-shadow: -10px 10px 24px rgba(249, 115, 22, 0.35);
}

.efx-btn-skew:hover .efx-btn-skew-label {
  transform: skewX(8deg);
}
`,
  },
  {
    id: 'ripple-button',
    name: 'Ripple Burst Button',
    description:
      'Press to fire a soft white ripple across this blue pill, like a drop landing in water.',
    category: 'buttons',
    tags: ['click', 'ripple', 'material'],
    hint: 'click',
    html: '<button class="efx-btn-ripple">Ripple</button>',
    css: `/* Ripple Burst Button */
.efx-btn-ripple {
  position: relative;
  overflow: hidden;
  padding: 14px 36px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  background: #3b82f6;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.3s ease;
}

.efx-btn-ripple::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 24px;
  height: 24px;
  margin: -12px 0 0 -12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.55);
  transform: scale(0);
  opacity: 0;
  pointer-events: none;
}

.efx-btn-ripple:hover {
  box-shadow: 0 10px 26px rgba(59, 130, 246, 0.45);
}

.efx-btn-ripple:active {
  transform: scale(0.96);
}

.efx-btn-ripple:active::after {
  animation: efx-kb-ripple 0.55s ease-out;
}

@keyframes efx-kb-ripple {
  0% {
    transform: scale(0);
    opacity: 0.7;
  }
  100% {
    transform: scale(13);
    opacity: 0;
  }
}
`,
  },
  {
    id: 'jelly-button',
    name: 'Jelly Button',
    description:
      'A squishy violet button that wobbles like jelly with every press, springing back to rest.',
    category: 'buttons',
    tags: ['click', 'jelly', 'bounce'],
    hint: 'click',
    html: '<button class="efx-btn-jelly">Jelly</button>',
    css: `/* Jelly Button */
.efx-btn-jelly {
  padding: 14px 36px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #2e1065;
  background: #c084fc;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 8px 22px rgba(192, 132, 252, 0.35);
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;
}

.efx-btn-jelly:hover {
  background: #d8b4fe;
  box-shadow: 0 12px 28px rgba(192, 132, 252, 0.5);
}

.efx-btn-jelly:active {
  animation: efx-kb-jelly 0.6s ease both;
}

@keyframes efx-kb-jelly {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1.25, 0.75);
  }
  40% {
    transform: scale(0.8, 1.2);
  }
  55% {
    transform: scale(1.12, 0.88);
  }
  70% {
    transform: scale(0.95, 1.05);
  }
  85% {
    transform: scale(1.04, 0.96);
  }
  100% {
    transform: scale(1, 1);
  }
}
`,
  },
  {
    id: 'dual-glow-button',
    name: 'Dual Glow Button',
    description:
      'A shadowy pill lit from both sides — cyan on the left, pink on the right — as you hover.',
    category: 'buttons',
    tags: ['hover', 'glow', 'neon'],
    hint: 'hover',
    html: '<button class="efx-btn-dual">Dual Glow</button>',
    css: `/* Dual Glow Button */
.efx-btn-dual {
  padding: 14px 36px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #e2e8f0;
  background: #12121d;
  border: 1px solid #2b2b42;
  border-radius: 999px;
  cursor: pointer;
  transition:
    color 0.4s ease,
    border-color 0.4s ease,
    box-shadow 0.4s ease,
    transform 0.3s ease;
}

.efx-btn-dual:hover {
  color: #ffffff;
  border-color: rgba(226, 232, 240, 0.4);
  box-shadow:
    -12px 0 30px -8px rgba(34, 211, 238, 0.65),
    12px 0 30px -8px rgba(244, 114, 182, 0.65),
    inset 0 0 16px rgba(148, 163, 184, 0.15);
  transform: translateY(-2px);
}
`,
  },
  {
    id: 'dash-outline-button',
    name: 'Running Dash Button',
    description:
      'A marching-ants dashed border that continuously runs around this pill without any input.',
    category: 'buttons',
    tags: ['animation', 'border', 'dashed'],
    hint: 'auto',
    html: '<button class="efx-btn-dash">Dash</button>',
    css: `/* Running Dash Button */
.efx-btn-dash {
  padding: 13px 32px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f9a8d4;
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  background:
    linear-gradient(#15151f, #15151f) padding-box,
    repeating-linear-gradient(0deg, #f472b6 0 7px, transparent 7px 15px) border-box,
    repeating-linear-gradient(90deg, #f472b6 0 7px, transparent 7px 15px) border-box;
  animation: efx-kb-dash-run 1.1s linear infinite;
  transition:
    color 0.3s ease,
    box-shadow 0.3s ease;
}

.efx-btn-dash:hover {
  color: #ffffff;
  box-shadow: 0 0 22px rgba(244, 114, 182, 0.35);
}

@keyframes efx-kb-dash-run {
  to {
    background-position: 0 0, 0 15px, 15px 0;
  }
}
`,
  },
  {
    id: 'label-swap-button',
    name: 'Label Swap Button',
    description:
      'The label rolls upward like a slot machine to reveal a second lime message on hover.',
    category: 'buttons',
    tags: ['hover', 'label', 'swap'],
    hint: 'hover',
    html: '<button class="efx-btn-swap"><span class="efx-btn-swap-box"><span class="efx-btn-swap-a">Submit</span><span class="efx-btn-swap-b">Sent!</span></span></button>',
    css: `/* Label Swap Button */
.efx-btn-swap {
  padding: 14px 30px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  color: #f8fafc;
  background: #181828;
  border: 1px solid #34344f;
  border-radius: 999px;
  cursor: pointer;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.efx-btn-swap-box {
  display: block;
  position: relative;
  overflow: hidden;
}

.efx-btn-swap-a,
.efx-btn-swap-b {
  display: block;
  line-height: 18px;
  transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);
}

.efx-btn-swap-b {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  color: #a3e635;
}

.efx-btn-swap:hover {
  border-color: #a3e635;
  box-shadow: 0 8px 24px rgba(163, 230, 53, 0.25);
}

.efx-btn-swap:hover .efx-btn-swap-a {
  transform: translateY(-100%);
}

.efx-btn-swap:hover .efx-btn-swap-b {
  transform: translateY(-100%);
}
`,
  },
  {
    id: 'gradient-shift-button',
    name: 'Gradient Shift Button',
    description:
      'A vivid three-stop gradient slides across the pill on hover, sweeping the colors along with it.',
    category: 'buttons',
    tags: ['hover', 'gradient', 'shift'],
    hint: 'hover',
    html: '<button class="efx-btn-grad-shift">Aurora</button>',
    css: `/* Gradient Shift Button */
.efx-btn-grad-shift {
  padding: 14px 36px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(90deg, #8b5cf6, #ec4899, #06b6d4, #8b5cf6);
  background-size: 300% 100%;
  background-position: 0% 0%;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: 0 8px 22px rgba(139, 92, 246, 0.35);
  transition:
    background-position 0.6s ease,
    box-shadow 0.4s ease,
    transform 0.3s ease;
}

.efx-btn-grad-shift:hover {
  background-position: 100% 0%;
  box-shadow: 0 12px 30px rgba(236, 72, 153, 0.45);
  transform: translateY(-2px);
}
`,
  },
  {
    id: 'letter-tracking-button',
    name: 'Letter Tracking Button',
    description:
      'The letters drift apart and the frame lights up cyan as the label expands on hover.',
    category: 'buttons',
    tags: ['hover', 'typography', 'spacing'],
    hint: 'hover',
    html: '<button class="efx-btn-tracking">Expand</button>',
    css: `/* Letter Tracking Button */
.efx-btn-tracking {
  padding: 14px 30px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #cbd5e1;
  background: transparent;
  border: 1px solid #3f3f5a;
  border-radius: 8px;
  cursor: pointer;
  transition:
    letter-spacing 0.45s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    text-shadow 0.3s ease,
    padding 0.45s ease;
}

.efx-btn-tracking:hover {
  letter-spacing: 7px;
  padding-left: 33px;
  color: #ffffff;
  border-color: #22d3ee;
  text-shadow: 0 0 14px rgba(34, 211, 238, 0.6);
}
`,
  },
  {
    id: 'retro-offset-button',
    name: 'Retro Offset Button',
    description:
      'A chunky yellow button with a hard violet drop shadow that slams perfectly flat when pressed.',
    category: 'buttons',
    tags: ['click', 'retro', 'shadow'],
    hint: 'click',
    html: '<button class="efx-btn-retro">Retro</button>',
    css: `/* Retro Offset Button */
.efx-btn-retro {
  padding: 13px 32px;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1c1917;
  background: #fde047;
  border: 3px solid #101014;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 6px 6px 0 #a78bfa;
  transition:
    transform 0.14s ease,
    box-shadow 0.14s ease;
}

.efx-btn-retro:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0 #a78bfa;
}

.efx-btn-retro:active {
  transform: translate(6px, 6px);
  box-shadow: 0 0 0 #a78bfa;
}
`,
  },
  {
    id: 'glass-blur-button',
    name: 'Glass Blur Button',
    description:
      'A frosted panel button that sharpens into glass on hover with blur, sheen and a soft lift.',
    category: 'buttons',
    tags: ['hover', 'glass', 'blur'],
    hint: 'hover',
    html: '<button class="efx-btn-glass">Glass</button>',
    css: `/* Glass Blur Button */
.efx-btn-glass {
  padding: 14px 36px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(226, 232, 240, 0.85);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 16px;
  cursor: pointer;
  transition:
    background 0.4s ease,
    border-color 0.4s ease,
    box-shadow 0.4s ease,
    color 0.3s ease,
    transform 0.3s ease;
}

.efx-btn-glass:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px) saturate(160%);
  box-shadow:
    0 14px 34px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}
`,
  },
];
