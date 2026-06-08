import type { ReactNode } from "react";

interface ISectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  noTopPadding?: boolean;
}

export default function Section({ id, children, className = "", noTopPadding = false }: ISectionProps) {
  return (
    <section
      id={id}
      className={`${noTopPadding ? "pb-12 md:pb-16" : "py-12 md:py-16"} ${className}`}
    >
      {children}
    </section>
  );
}