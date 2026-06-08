import type { ReactNode } from "react";

interface IBadgeProps {
  variant?: "default" | "accent" | "live" | "building" | "notLive";
  children: ReactNode;
  className?: string;
}

const variantStyles = {
  default:
    "bg-white/[0.06] text-brand-text-secondary border-brand-border",
  accent:
    "bg-brand-accent-muted text-brand-accent border-brand-accent/20",
  live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  building: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  notLive: "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

export default function Badge({
  variant = "default",
  children,
  className = "",
}: IBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
        variantStyles[variant]
      } ${className}`}
    >
      {(variant === "live" || variant === "building") && (
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            variant === "live" ? "bg-emerald-400" : "bg-amber-400"
          }`}
        />
      )}
      {children}
    </span>
  );
}