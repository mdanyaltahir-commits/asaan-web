import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PropertyCard } from "@/components/property/PropertyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icons";
import { properties } from "@/data/properties";

export function FeaturedProperties() {
  return <section className="bg-white py-20 lg:py-28"><Container><div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><SectionHeading eyebrow="Curated for you" title="Featured Properties" description="Explore standout opportunities across Pakistan's leading property markets." /><Link href="/buy" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-navy hover:text-gold-dark">View all properties <Icon name="arrow" /></Link></div><div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{properties.filter(property => property.featured).slice(0, 4).map(property => <PropertyCard key={property.slug} property={property} />)}</div></Container></section>;
}
