'use client';

import type { ReactNode } from 'react';

/**
 * Tiny zero-dependency syntax highlighter tuned for the CSS / HTML snippets
 * used across the library. Renders GitHub-dark style colored spans.
 */

const C = {
  comment: '#8b949e',
  atRule: '#d2a8ff',
  selector: '#7ee787',
  property: '#79c0ff',
  value: '#a5d6ff',
  punct: '#8b949e',
  plain: '#c9d1d9',
  tag: '#7ee787',
  attr: '#79c0ff',
  string: '#a5d6ff',
} as const;

function Span({ text, color, italic }: { text: string; color: string; italic?: boolean }) {
  return (
    <span style={{ color, fontStyle: italic ? 'italic' : undefined }}>{text}</span>
  );
}

/** Highlight a CSS source string (comments must sit on their own lines). */
export function highlightCSS(code: string): ReactNode[] {
  const lines = code.replace(/\n+$/, '').split('\n');
  const out: ReactNode[] = [];
  let inComment = false;

  lines.forEach((line, idx) => {
    const parts: ReactNode[] = [];
    let k = 0;
    const push = (text: string, color: string, italic = false) => {
      if (!text) return;
      parts.push(<Span key={k++} text={text} color={color} italic={italic} />);
    };

    const trimmed = line.trim();

    if (inComment) {
      push(line, C.comment, true);
      if (trimmed.includes('*/')) inComment = false;
    } else if (trimmed === '') {
      // blank line
    } else if (trimmed.startsWith('/*')) {
      push(line, C.comment, true);
      if (!trimmed.includes('*/')) inComment = true;
    } else if (trimmed.startsWith('@')) {
      const braceAt = line.indexOf('{');
      if (braceAt === -1) {
        push(line, C.atRule);
      } else {
        push(line.slice(0, braceAt), C.atRule);
        push(line.slice(braceAt), C.punct);
      }
    } else if (/^\}/.test(trimmed) && trimmed === '}') {
      push(line, C.punct);
    } else if (trimmed.endsWith('{')) {
      const braceAt = line.lastIndexOf('{');
      push(line.slice(0, braceAt), C.selector);
      push('{', C.punct);
    } else if (trimmed.includes(':')) {
      const indent = line.slice(0, line.indexOf(trimmed));
      const colonAt = line.indexOf(':');
      push(indent, C.plain);
      push(line.slice(indent.length, colonAt), C.property);
      push(':', C.punct);
      let valueEnd = line.length;
      let semi = '';
      if (trimmed.endsWith(';')) {
        valueEnd = line.lastIndexOf(';');
        semi = ';';
      }
      push(line.slice(colonAt + 1, valueEnd), C.value);
      push(semi, C.punct);
    } else {
      push(line, C.plain);
    }

    out.push(
      <div key={idx} className="whitespace-pre">
        {parts.length ? parts : '\u00A0'}
      </div>,
    );
  });

  return out;
}

/** Highlight an HTML source string (tags + attributes + strings). */
export function highlightHTML(code: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /<!--[\s\S]*?-->|<\/?[a-zA-Z][^<>]*>/g;
  let last = 0;
  let k = 0;
  let m: RegExpExecArray | null;

  const pushPlain = (text: string) => {
    if (!text) return;
    out.push(<Span key={k++} text={text} color={C.plain} />);
  };

  while ((m = re.exec(code)) !== null) {
    pushPlain(code.slice(last, m.index));
    const token = m[0];

    if (token.startsWith('<!--')) {
      out.push(<Span key={k++} text={token} color={C.comment} italic />);
    } else {
      const tagMatch = token.match(/^(<\/?)([a-zA-Z][\w-]*)([\s\S]*?)(\/?>)$/);
      if (tagMatch) {
        const [, open, name, attrs, close] = tagMatch;
        out.push(<Span key={k++} text={open} color={C.punct} />);
        out.push(<Span key={k++} text={name} color={C.tag} />);
        const attrRe = /([a-zA-Z-]+)(="[^"]*")?/g;
        let pos = 0;
        let am: RegExpExecArray | null;
        while ((am = attrRe.exec(attrs)) !== null) {
          if (am.index > pos) pushPlain(attrs.slice(pos, am.index));
          out.push(<Span key={k++} text={am[1]} color={C.attr} />);
          if (am[2]) {
            const eqAt = am[2].indexOf('=');
            out.push(<Span key={k++} text="=" color={C.punct} />);
            out.push(<Span key={k++} text={am[2].slice(eqAt + 1)} color={C.string} />);
          }
          pos = am.index + am[0].length;
        }
        if (pos < attrs.length) pushPlain(attrs.slice(pos));
        out.push(<Span key={k++} text={close} color={C.punct} />);
      } else {
        pushPlain(token);
      }
    }
    last = m.index + token.length;
  }
  pushPlain(code.slice(last));
  return out;
}

interface CodeBlockProps {
  code: string;
  language: 'css' | 'html';
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const highlighted = language === 'css' ? highlightCSS(code) : highlightHTML(code);
  return (
    <div
      role="region"
      aria-label={`${language.toUpperCase()} code snippet`}
      className="fx-scroll max-h-72 overflow-auto bg-[#0d1117] px-4 py-3 font-mono text-[12.5px] leading-relaxed"
    >
      <pre className="min-w-max">{highlighted}</pre>
    </div>
  );
}
