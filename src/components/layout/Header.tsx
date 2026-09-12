"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";
import { Icon } from "@/components/ui/Icons";

const nav = [["Buy", "/buy"], ["Sell", "/sell"], ["Rent", "/rent"], ["Projects", "/projects"], ["Insights", "/insights"], ["Resources", "/resources"], ["About", "/about"]];
const serviceGroups = [
  { title: "Transaction Services", links: [["AASAAN Selling", "/services/selling"], ["AASAAN Renting", "/services/renting"], ["AASAAN Closing", "/services/closing"]] },
  { title: "Trust & Verification", links: [["AASAAN Inspection", "/services/inspection"], ["AASAAN Due Diligence", "/services/due-diligence"]] },
  { title: "Specialist Property Services", links: [["AASAAN Legal Desk", "/services/legal-desk"], ["AASAAN Merging", "/services/property-file-merging"]] },
  { title: "Build & Projects", links: [["AASAAN Construction", "/construction"], ["AASAAN Projects", "/projects"]] },
  { title: "Future Ecosystem", links: [["Investment Group · Coming Soon", "/investment"], ["AasaanPaisa · Coming Soon", "/aasaanpaisa"]] },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-50 border-b border-border-soft bg-white text-navy">
      <Container className="flex h-[76px] items-center justify-between gap-8">
        <Link href="/" aria-label="AASAAN home" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-gold/70 text-sm font-bold text-gold-dark">A</span>
          <span className="text-xl font-bold tracking-[0.18em]">AASAAN</span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-6 xl:flex">
          {nav.map(([label, href], index) => <span key={href} className="contents">{index === 4 && <div className="group/mega relative"><button type="button" className="flex items-center gap-1 text-[13px] font-medium text-navy/80 hover:text-gold-dark" aria-haspopup="true">Services <Icon name="chevron" className="h-3.5 w-3.5" /></button><div className="invisible absolute left-1/2 top-full w-[820px] -translate-x-1/2 pt-7 opacity-0 transition-all group-hover/mega:visible group-hover/mega:opacity-100 group-focus-within/mega:visible group-focus-within/mega:opacity-100"><div className="grid grid-cols-3 gap-x-8 gap-y-7 border-t-2 border-gold bg-white p-8 text-navy shadow-2xl">{serviceGroups.map(group => <div key={group.title}><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark">{group.title}</p><div className="mt-3 grid gap-2">{group.links.map(([item, target]) => <Link key={target} href={target} className="text-sm font-semibold text-navy/80 hover:text-gold-dark">{item}</Link>)}</div></div>)}</div></div></div>}{<Link href={href} className="text-[13px] font-medium text-navy/80 transition-colors hover:text-gold-dark focus-visible:outline-2 focus-visible:outline-gold">{label}</Link>}</span>)}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <Link href="/search" aria-label="Search AASAAN" className="p-2 text-navy/80 hover:text-gold-dark"><Icon name="search" /></Link>
          <Link href="/account" className="text-[13px] font-semibold hover:text-gold-dark">Login</Link>
          <Link href="/list-property" className="border border-gold bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-gold-light hover:bg-gold-light">List Your Property</Link>
        </div>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} className="p-2 text-navy md:hidden">
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </Container>
      {open && (
        <div id="mobile-navigation" className="absolute left-0 top-full w-full border-t border-white/10 bg-navy shadow-2xl md:hidden">
          <Container className="py-5">
            <nav aria-label="Mobile navigation" className="grid">
              {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="border-b border-white/10 py-3.5 text-sm text-white/85">{label}</Link>)}
              <Link href="/services" onClick={() => setOpen(false)} className="border-b border-white/10 py-3.5 text-sm text-white/85">Services</Link>
            </nav>
            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 border-b border-white/10 pb-5">{serviceGroups.slice(0, 4).flatMap(group => group.links).map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="text-[11px] leading-4 text-white/55 hover:text-brand-soft">{label}</Link>)}</div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <Link href="/account" onClick={() => setOpen(false)} className="grid min-h-12 place-items-center border border-white/25 text-sm font-semibold">Login</Link>
              <Link href="/list-property" onClick={() => setOpen(false)} className="grid min-h-12 place-items-center bg-gold text-xs font-bold uppercase tracking-wider text-white">List Property</Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
