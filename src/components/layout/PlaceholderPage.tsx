import Link from "next/link";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";

export function PlaceholderPage({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <main><section className="bg-navy py-20 text-white sm:py-28"><Container><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-soft">{eyebrow}</p><h1 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{description}</p></div></Container></section><section className="bg-offwhite py-20"><Container><div className="max-w-2xl border-l-2 border-gold pl-7"><h2 className="font-display text-3xl text-navy">This experience is being made Aasaan.</h2><p className="mt-4 leading-7 text-slate">The full module will arrive in a future phase. For now, our team can help you personally.</p><div className="mt-7 flex flex-wrap gap-3"><Button href="/contact" variant="gold">Contact our team <Icon name="arrow" /></Button><Link href="/" className="inline-flex min-h-12 items-center px-5 text-xs font-bold uppercase tracking-[0.14em] text-navy">Back to home</Link></div></div></Container></section></main>;
}
