import Link from "next/link";
import type { ReactNode } from "react";

type Props = { children: ReactNode; href?: string; variant?: "gold" | "navy" | "outline" | "light"; className?: string };

export function Button({ children, href, variant = "navy", className = "" }: Props) {
  const styles = {
    gold: "bg-gold text-navy hover:bg-gold-light",
    navy: "bg-navy text-white hover:bg-navy-light",
    outline: "border border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-white",
    light: "bg-white text-navy hover:bg-sand",
  }[variant];
  const classes = `inline-flex min-h-12 items-center justify-center gap-2 px-6 text-[13px] font-bold uppercase tracking-[0.14em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${styles} ${className}`;
  return href ? <Link href={href} className={classes}>{children}</Link> : <button type="submit" className={classes}>{children}</button>;
}
