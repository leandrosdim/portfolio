"use client";

import { useEffect, useRef, useState } from "react";

interface IToken {
  text: string;
  className: string;
}

interface ILine {
  indent: number;
  tokens: IToken[];
}

const CODE_LINES: ILine[] = [
  {
    indent: 0,
    tokens: [
      { text: "const", className: "text-xs font-mono text-violet-400/80" },
      { text: " developer", className: "text-xs font-mono text-brand-accent" },
      { text: " =", className: "text-xs font-mono text-brand-text-secondary/50" },
      { text: " {", className: "text-xs font-mono text-amber-400/80" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "name", className: "text-xs font-mono text-emerald-400/80" },
      { text: ":", className: "text-xs font-mono text-brand-text-secondary/50" },
      { text: ' "Leandros Dim"', className: "text-xs font-mono text-amber-300/70" },
      { text: ",", className: "text-xs font-mono text-brand-text-secondary/30" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "role", className: "text-xs font-mono text-emerald-400/80" },
      { text: ":", className: "text-xs font-mono text-brand-text-secondary/50" },
      { text: ' "Full-Stack Engineer"', className: "text-xs font-mono text-amber-300/70" },
      { text: ",", className: "text-xs font-mono text-brand-text-secondary/30" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "skills", className: "text-xs font-mono text-emerald-400/80" },
      { text: ":", className: "text-xs font-mono text-brand-text-secondary/50" },
      { text: " [", className: "text-xs font-mono text-amber-400/80" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { text: '"React"', className: "text-xs font-mono text-brand-accent/80" },
      { text: ",", className: "text-xs font-mono text-brand-text-secondary/30" },
      { text: ' "Next.js"', className: "text-xs font-mono text-brand-accent/80" },
      { text: ",", className: "text-xs font-mono text-brand-text-secondary/30" },
      { text: ' "Postgres"', className: "text-xs font-mono text-brand-accent/80" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { text: "]", className: "text-xs font-mono text-amber-400/80" },
      { text: ",", className: "text-xs font-mono text-brand-text-secondary/30" },
    ],
  },
  {
    indent: 0,
    tokens: [
      { text: "}", className: "text-xs font-mono text-amber-400/80" },
    ],
  },
  {
    indent: 0,
    tokens: [
      { text: "export", className: "text-xs font-mono text-violet-400/80" },
      { text: " default", className: "text-xs font-mono text-violet-400/80" },
      { text: " developer", className: "text-xs font-mono text-brand-accent" },
    ],
  },
];

function getLineText(line: ILine): string {
  return line.tokens.map((t) => t.text).join("");
}

function renderLineTokens(line: ILine, visibleChars: number): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let remaining = visibleChars;

  for (let i = 0; i < line.tokens.length && remaining > 0; i++) {
    const token = line.tokens[i];
    if (remaining >= token.text.length) {
      nodes.push(
        <span key={i} className={token.className}>
          {token.text}
        </span>
      );
      remaining -= token.text.length;
    } else {
      nodes.push(
        <span key={i} className={token.className}>
          {token.text.slice(0, remaining)}
        </span>
      );
      remaining = 0;
    }
  }

  return nodes;
}

export default function HeroVisual() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const skippedRef = useRef(false);

  const totalLines = CODE_LINES.length;

  useEffect(() => {
    if (done) return;

    const lineText = getLineText(CODE_LINES[lineIndex]);
    const typingSpeed = 20;
    const linePause = 120;

    if (charIndex < lineText.length) {
      const timer = setTimeout(() => {
        setCharIndex((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (lineIndex < totalLines - 1) {
      const timer = setTimeout(() => {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      }, linePause);
      return () => clearTimeout(timer);
    } else {
      setDone(true);
    }
  }, [lineIndex, charIndex, done, totalLines]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !skippedRef.current) {
          skippedRef.current = true;
          setLineIndex(totalLines - 1);
          setCharIndex(getLineText(CODE_LINES[totalLines - 1]).length);
          setDone(true);
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [totalLines]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg mx-auto overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-brand-accent/5 rounded-3xl blur-3xl" />

      <div className="relative glass rounded-glass-lg border border-brand-border overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-brand-border bg-white/[0.02]">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-amber-400/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 text-xs text-brand-text-secondary font-mono">
            portfolio.tsx
          </span>
          <div className="flex-1" />
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/50" />
          </div>
        </div>

        <div className="p-5 space-y-4">
          {CODE_LINES.map((line, i) => {
            const lineText = getLineText(line);
            const indentPx = line.indent * 16;

            if (i < lineIndex) {
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs font-mono text-brand-text-secondary/50 select-none">
                    {i + 1}
                  </span>
                  <div
                    className="flex items-center gap-2"
                    style={{ paddingLeft: `${indentPx}px` }}
                  >
                    {line.tokens.map((token, ti) => (
                      <span key={ti} className={token.className}>
                        {token.text}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }

            if (i === lineIndex && !done) {
              const showSeparator =
                i === 7;

              return (
                <div
                  key={i}
                  className={
                    showSeparator
                      ? "flex items-center gap-3 mt-3 pt-3 border-t border-brand-border"
                      : "flex items-center gap-3"
                  }
                >
                  <span className="text-xs font-mono text-brand-text-secondary/50 select-none">
                    {i + 1}
                  </span>
                  <div
                    className="flex items-center gap-2"
                    style={{ paddingLeft: `${indentPx}px` }}
                  >
                    {renderLineTokens(line, charIndex)}
                    <span className="text-xs font-mono text-brand-accent animate-blink">
                      |
                    </span>
                  </div>
                </div>
              );
            }

            if (i === lineIndex && done) {
              const showSeparator = i === 7;

              return (
                <div
                  key={i}
                  className={
                    showSeparator
                      ? "flex items-center gap-3 mt-3 pt-3 border-t border-brand-border"
                      : "flex items-center gap-3"
                  }
                >
                  <span className="text-xs font-mono text-brand-text-secondary/50 select-none">
                    {i + 1}
                  </span>
                  <div
                    className="flex items-center gap-2"
                    style={{ paddingLeft: `${indentPx}px` }}
                  >
                    {line.tokens.map((token, ti) => (
                      <span key={ti} className={token.className}>
                        {token.text}
                      </span>
                    ))}
                  </div>
                </div>
              );
            }

            if (i === lineIndex + 1) {
              const isSeparatorLine = i === 7;

              if (isSeparatorLine && !done) {
                return null;
              }
            }

            return null;
          })}

          <div
            className={`mt-3 pt-3 border-t border-brand-border transition-opacity duration-500 ${
              done ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400/80 animate-pulse-glow" />
                <span className="text-[10px] font-mono text-emerald-400/70">
                  compiled successfully
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/60" />
                  <span className="text-[10px] font-mono text-brand-text-secondary/50">
                    0 errors
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />
                  <span className="text-[10px] font-mono text-brand-text-secondary/50">
                    0 warnings
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-end gap-1.5 h-8">
              <div className="flex-1 bg-brand-accent/20 rounded-sm" style={{ height: "40%" }} />
              <div className="flex-1 bg-brand-accent/30 rounded-sm" style={{ height: "55%" }} />
              <div className="flex-1 bg-brand-accent/40 rounded-sm" style={{ height: "70%" }} />
              <div className="flex-1 bg-brand-accent/60 rounded-sm" style={{ height: "85%" }} />
              <div className="flex-1 bg-brand-accent/80 rounded-sm" style={{ height: "100%" }} />
              <div className="flex-1 bg-brand-accent/60 rounded-sm" style={{ height: "75%" }} />
              <div className="flex-1 bg-brand-accent/40 rounded-sm" style={{ height: "50%" }} />
              <div className="flex-1 bg-brand-accent/20 rounded-sm" style={{ height: "35%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}