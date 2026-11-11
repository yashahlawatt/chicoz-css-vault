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
];
