import type { ReactNode } from "react";

export function Badge({ children, variant = "gold" }: { children: ReactNode; variant?: "gold" | "navy" | "light" }) {
  const style = variant === "navy" ? "bg-navy text-white" : variant === "light" ? "bg-white/90 text-navy" : "bg-gold-pale text-gold-dark";
  return <span className={`inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${style}`}>{children}</span>;
}
