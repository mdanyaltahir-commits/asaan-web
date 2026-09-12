"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";
import { Icon } from "@/components/ui/Icons";

const nav = [
  ["Buy", "/buy"], ["Sell", "/sell"], ["Rent", "/rent"], ["Projects", "/projects"],
  ["Services", "/services"], ["Insights", "/insights"], ["Resources", "/resources"], ["About", "/about"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-50 border-b border-white/10 bg-navy text-white">
      <Container className="flex h-[76px] items-center justify-between gap-8">
        <Link href="/" aria-label="AASAAN home" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-gold/70 text-sm font-bold text-gold">A</span>
          <span className="text-xl font-bold tracking-[0.18em]">AASAAN</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 xl:flex">
          {nav.map(([label, href]) => <Link key={href} href={href} className="text-[13px] font-medium text-white/78 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-gold">{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <Link href="/buy" aria-label="Search properties" className="p-2 text-white/80 hover:text-gold"><Icon name="search" /></Link>
          <Link href="/contact" className="text-[13px] font-semibold hover:text-gold">Login</Link>
          <Link href="/sell" className="border border-gold bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-navy transition-colors hover:bg-gold-light">List Your Property</Link>
        </div>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} className="p-2 text-white md:hidden">
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </Container>
      {open && (
        <div id="mobile-navigation" className="absolute left-0 top-full w-full border-t border-white/10 bg-navy shadow-2xl md:hidden">
          <Container className="py-5">
            <nav aria-label="Mobile navigation" className="grid">
              {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-3.5 text-sm text-white/85">{label}</Link>)}
            </nav>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link href="/contact" onClick={() => setOpen(false)} className="grid min-h-12 place-items-center border border-white/25 text-sm font-semibold">Login</Link>
              <Link href="/sell" onClick={() => setOpen(false)} className="grid min-h-12 place-items-center bg-gold text-xs font-bold uppercase tracking-wider text-navy">List Property</Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
