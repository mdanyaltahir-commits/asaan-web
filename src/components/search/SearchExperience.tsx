"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { properties } from "@/data/properties";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";
import { services } from "@/data/services";
import { Icon } from "@/components/ui/Icons";

export function SearchExperience({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return [
      ...properties.map(item => ({ type: "Property", title: item.title, detail: item.location, href: `/property/${item.slug}` })),
      ...projects.map(item => ({ type: "Project", title: item.name, detail: `${item.location}, ${item.city}`, href: `/projects/${item.slug}` })),
      ...articles.map(item => ({ type: item.kind === "news" ? "News" : "Insight", title: item.title, detail: item.category, href: `/${item.kind === "news" ? "news" : "insights"}/${item.slug}` })),
      ...services.map(item => ({ type: "Service", title: item.name, detail: item.description, href: item.href })),
    ].filter(item => `${item.title} ${item.detail} ${item.type}`.toLowerCase().includes(q));
  }, [query]);
  return <div><label htmlFor="site-search" className="sr-only">Search AASAAN</label><div className="flex border gap-3 border-b-2 border-navy py-3"><Icon name="search" className="h-7 w-7 text-gold-dark" /><input id="site-search" value={query} onChange={e => setQuery(e.target.value)} autoFocus type="search" placeholder="Search properties, projects, articles and services" className="min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-slate/60" /></div><div className="mt-10 space-y-3">{query && <p className="mb-5 text-sm text-slate">{results.length} matching results</p>}{results.map((item, index) => <Link key={`${item.href}-${index}`} href={item.href} className="flex items-center justify-between gap-5 border border-navy/10 bg-white p-5 hover:border-gold"><div><span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark">{item.type}</span><h2 className="mt-1 font-display text-xl text-navy">{item.title}</h2><p className="mt-1 text-sm text-slate">{item.detail}</p></div><Icon name="arrow" /></Link>)}{query && !results.length && <div className="bg-sand p-10 text-center"><h2 className="font-display text-3xl">No matches found</h2><p className="mt-2 text-sm text-slate">Try a city, property type or service name.</p></div>}</div></div>;
}
