import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/layout/Container";
import { PropertyBrowser } from "@/components/property/PropertyBrowser";
import { properties } from "@/data/properties";
import { cities } from "@/data/cities";
import { Icon } from "@/components/ui/Icons";

export const metadata: Metadata = { title: "Property for Sale in Pakistan", description: "Browse verified houses, apartments, plots and commercial property for sale across Pakistan.", alternates: { canonical: "/buy" } };

const categories = ["Houses", "Apartments", "Residential Plots", "Commercial Plots", "Shops", "Offices", "Farmhouses", "Buildings", "Land"];

export default function BuyPage() {
  return <main><PageHero eyebrow="AASAAN Property" title="Property for Sale in Pakistan" description="Search homes, plots, apartments and commercial opportunities with clearer information and connected expert support." image="/images/property-house.webp" /><section className="bg-offwhite py-16 sm:py-20"><Container><div className="mb-12 flex flex-wrap gap-2">{cities.map(city => <Link key={city.slug} href={`/buy/${city.slug}`} className="border border-navy/15 bg-white px-4 py-3 text-xs font-bold uppercase tracking-wider text-navy hover:border-gold">{city.name}</Link>)}</div><PropertyBrowser items={properties} /></Container></section><section className="bg-white py-18 sm:py-24"><Container><div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">Explore by type</p><h2 className="mt-4 font-display text-4xl sm:text-5xl">Every kind of property journey</h2></div><div className="grid sm:grid-cols-2">{categories.map(category => <Link key={category} href={`/search?q=${encodeURIComponent(category)}`} className="flex items-center justify-between border-b border-navy/10 py-4 text-sm font-semibold hover:text-gold-dark">{category}<Icon name="arrow" className="h-4 w-4" /></Link>)}</div></div></Container></section><section className="bg-sand py-18 sm:py-24"><Container className="max-w-4xl"><h2 className="font-display text-4xl">Buying property in Pakistan with greater clarity</h2><div className="mt-6 grid gap-6 text-sm leading-7 text-slate sm:grid-cols-2"><p>Property decisions should combine the right location, realistic budget, documentation and physical condition. AASAAN brings those parts of the journey closer together.</p><p>Listings shown in this Phase 2 experience use structured sample data. Live inventory and verification records will be connected in the backend phase.</p></div></Container></section></main>;
}
