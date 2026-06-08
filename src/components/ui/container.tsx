import type { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({
  children,
  className = "",
  narrow = false,
}: IContainerProps) {
  return (
    <div
      className={`mx-auto px-6 ${narrow ? "max-w-content-narrow" : "max-w-content"} ${className}`}
    >
      {children}
    </div>
  );
}