import type { ReactNode } from "react";

interface IServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  className = "",
}: IServiceCardProps) {
  return (
    <div
      className={`group rounded-glass border border-brand-border bg-[var(--glass-bg)] backdrop-blur-glass p-6 transition-all duration-300 hover:border-brand-border-hover hover:bg-[var(--glass-bg-hover)] hover:shadow-glow hover:-translate-y-0.5 ${className}`}
    >
      <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-4 group-hover:bg-brand-accent/20 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-brand-text-primary mb-2">
        {title}
      </h3>
      <p className="text-sm text-brand-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}