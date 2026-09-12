import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({ eyebrow, title, description, image, breadcrumbs = [{ label: "Home", href: "/" }, { label: title }] }: { eyebrow?: string; title: string; description: string; image?: string; breadcrumbs?: Crumb[] }) {
  return <section className="relative isolate overflow-hidden bg-navy py-16 text-white sm:py-24"><>{image && <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-28" />}</><div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/92 to-navy/45" /><Container><Breadcrumbs items={breadcrumbs} dark /><div className="mt-12 max-w-4xl">{eyebrow && <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-soft">{eyebrow}</p>}<h1 className="mt-4 font-display text-5xl leading-[1.04] sm:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{description}</p></div></Container></section>;
}
