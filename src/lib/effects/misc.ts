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
];
