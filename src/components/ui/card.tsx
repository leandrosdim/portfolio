import type { ReactNode } from "react";

interface ICardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
}: ICardProps) {
  return (
    <div
      className={`rounded-glass border border-brand-border bg-[var(--glass-bg)] backdrop-blur-glass ${
        hover
          ? "transition-all duration-300 hover:bg-[var(--glass-bg-hover)] hover:border-brand-border-hover hover:shadow-glow hover:-translate-y-0.5"
          : ""
      } ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </div>
  );
}