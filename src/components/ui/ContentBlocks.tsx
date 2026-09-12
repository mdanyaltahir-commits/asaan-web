import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Icon } from "./Icons";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";

export function FeatureGrid({ eyebrow, title, description, items, columns = 3 }: { eyebrow?: string; title: string; description?: string; items: Array<{ title: string; description: string; icon?: string }>; columns?: 2 | 3 | 4 }) {
  const cols = columns === 4 ? "lg:grid-cols-4" : columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
  return <section className="bg-offwhite py-18 sm:py-24"><Container><SectionHeading eyebrow={eyebrow} title={title} description={description} /><div className={`mt-10 grid ${cols}`}>{items.map((item, index) => <article key={item.title} className="border border-navy/10 bg-white p-7"><div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center bg-sand text-gold-dark"><Icon name={item.icon ?? "check"} /></span><span className="text-xs text-navy/25">{String(index + 1).padStart(2, "0")}</span></div><h3 className="mt-8 font-display text-2xl text-navy">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate">{item.description}</p></article>)}</div></Container></section>;
}

export function ProcessTimeline({ eyebrow = "How it works", title, steps }: { eyebrow?: string; title: string; steps: Array<{ title: string; description: string }> }) {
  return <section className="bg-white py-18 sm:py-24"><Container><SectionHeading eyebrow={eyebrow} title={title} /><ol className="mt-12 grid gap-px bg-navy/10 md:grid-cols-2 lg:grid-cols-3">{steps.map((step, index) => <li key={step.title} className="bg-white p-7"><span className="text-xs font-bold tracking-[0.18em] text-gold-dark">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-5 font-display text-2xl text-navy">{step.title}</h3><p className="mt-3 text-sm leading-6 text-slate">{step.description}</p></li>)}</ol></Container></section>;
}

export function CTASection({ title, description, href = "/contact", label = "Speak to AASAAN" }: { title: string; description: string; href?: string; label?: string }) {
  const destination = href.startsWith("#") ? "/contact" : href;
  return <section className="bg-navy py-16 text-white"><Container className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="font-display text-4xl">{title}</h2><p className="mt-3 max-w-2xl text-sm leading-6 text-white/65">{description}</p></div><Button href={destination} variant="gold">{label}<Icon name="arrow" /></Button></Container></section>;
}

export function LinkStrip({ links }: { links: Array<{ label: string; href: string }> }) {
  return <div className="border-y border-navy/10 bg-sand"><Container className="flex flex-wrap gap-x-8 gap-y-3 py-5">{links.map(link => <Link key={link.href} href={link.href} className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy hover:text-gold-dark">{link.label}<Icon name="arrow" className="h-4 w-4" /></Link>)}</Container></div>;
}
