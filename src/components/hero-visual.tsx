export default function HeroVisual() {
  return (
    <div
      className="relative w-full max-w-lg mx-auto"
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
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-brand-text-secondary/50 select-none">1</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-violet-400/80">const</span>
              <span className="text-xs font-mono text-brand-accent">developer</span>
              <span className="text-xs font-mono text-brand-text-secondary/50">=</span>
              <span className="text-xs font-mono text-amber-400/80">{"{"}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-brand-text-secondary/50 select-none">2</span>
            <div className="flex items-center gap-2 pl-4">
              <span className="text-xs font-mono text-emerald-400/80">name</span>
              <span className="text-xs font-mono text-brand-text-secondary/50">:</span>
              <span className="text-xs font-mono text-amber-300/70">&quot;Leandros Dim&quot;</span>
              <span className="text-xs font-mono text-brand-text-secondary/30">,</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-brand-text-secondary/50 select-none">3</span>
            <div className="flex items-center gap-2 pl-4">
              <span className="text-xs font-mono text-emerald-400/80">role</span>
              <span className="text-xs font-mono text-brand-text-secondary/50">:</span>
              <span className="text-xs font-mono text-amber-300/70">&quot;Full-Stack Engineer&quot;</span>
              <span className="text-xs font-mono text-brand-text-secondary/30">,</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-brand-text-secondary/50 select-none">4</span>
            <div className="flex items-center gap-2 pl-4">
              <span className="text-xs font-mono text-emerald-400/80">skills</span>
              <span className="text-xs font-mono text-brand-text-secondary/50">:</span>
              <span className="text-xs font-mono text-amber-400/80">[</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-brand-text-secondary/50 select-none">5</span>
            <div className="flex items-center gap-2 pl-8">
              <span className="text-xs font-mono text-brand-accent/80">&quot;React&quot;</span>
              <span className="text-xs font-mono text-brand-text-secondary/30">,</span>
              <span className="text-xs font-mono text-brand-accent/80">&quot;Next.js&quot;</span>
              <span className="text-xs font-mono text-brand-text-secondary/30">,</span>
              <span className="text-xs font-mono text-brand-accent/80">&quot;Postgres&quot;</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-brand-text-secondary/50 select-none">6</span>
            <div className="flex items-center gap-2 pl-4">
              <span className="text-xs font-mono text-amber-400/80">]</span>
              <span className="text-xs font-mono text-brand-text-secondary/30">,</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-brand-text-secondary/50 select-none">7</span>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-amber-400/80">{"}"}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-brand-border">
            <span className="text-xs font-mono text-brand-text-secondary/50 select-none">8</span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-mono text-violet-400/80">export</span>
              <span className="text-xs font-mono text-violet-400/80">default</span>
              <span className="text-xs font-mono text-brand-accent">developer</span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-brand-border">
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