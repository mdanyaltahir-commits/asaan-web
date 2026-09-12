import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities } from "@/data/cities";
import { properties } from "@/data/properties";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/layout/Container";
import { PropertyBrowser } from "@/components/property/PropertyBrowser";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ArticleCard } from "@/components/news/ArticleCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function generateStaticParams() { return cities.map(city => ({ city: city.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params; const city = cities.find(item => item.slug === slug);
  return city ? { title: `Property for Sale in ${city.name}`, description: city.intro, alternates: { canonical: `/buy/${city.slug}` } } : {};
}

export default async function CityPropertyPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params; const city = cities.find(item => item.slug === slug); if (!city) notFound();
  const cityProjects = projects.filter(project => project.city === city.name); const cityArticles = articles.filter(article => article.city === city.name).slice(0, 2);
  return <main><PageHero eyebrow="City Property Guide" title={`Property for Sale in ${city.name}`} description={city.intro} image={city.image} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Buy", href: "/buy" }, { label: city.name }]} /><section className="border-b border-navy/10 bg-white"><Container className="flex flex-wrap items-center gap-3 py-5"><span className="mr-2 text-xs font-bold uppercase tracking-wider text-slate">Featured areas</span>{city.areas.map(area => <Link key={area} href={`/search?q=${encodeURIComponent(`${area} ${city.name}`)}`} className="bg-sand px-3 py-2 text-xs font-semibold text-navy hover:bg-gold-pale">{area}</Link>)}</Container></section><section className="bg-offwhite py-16 sm:py-20"><Container><PropertyBrowser items={properties} initialCity={city.name} /></Container></section><section className="bg-white py-18 sm:py-24"><Container><SectionHeading eyebrow="Local opportunities" title={`Projects in ${city.name}`} description="Project cards reflect sample content and AASAAN's verification-ready data structure." />{cityProjects.length ? <div className="mt-10 grid gap-5 lg:grid-cols-3">{cityProjects.map(project => <ProjectCard key={project.slug} project={project} />)}</div> : <div className="mt-10 bg-sand p-10"><p className="font-display text-2xl">Verified project inventory for {city.name} will be added soon.</p></div>}</Container></section><section className="bg-sand py-18 sm:py-24"><Container><div className="grid gap-10 lg:grid-cols-2"><div><SectionHeading eyebrow="Popular choices" title={`What buyers explore in ${city.name}`} /><div className="mt-7 flex flex-wrap gap-2">{city.popularTypes.map(type => <span key={type} className="border border-navy/15 bg-white px-4 py-3 text-sm font-semibold">{type}</span>)}</div></div><div><SectionHeading eyebrow="City intelligence" title={`Latest from ${city.name}`} />{cityArticles.length ? <div className="mt-7 grid gap-4">{cityArticles.map(article => <ArticleCard key={article.slug} article={article} />)}</div> : <p className="mt-6 text-sm leading-7 text-slate">City-specific reporting is being prepared by the AASAAN Desk.</p>}</div></div></Container></section><section className="bg-white py-18 sm:py-24"><Container className="max-w-4xl"><h2 className="font-display text-4xl">Understanding the {city.name} property market</h2><p className="mt-6 text-base leading-8 text-slate">Compare neighbourhood maturity, access, possession status, services, documentation and your intended use before choosing a property. AASAAN's connected inspection, due-diligence and closing services are designed to support that wider decision.</p></Container></section></main>;
}
