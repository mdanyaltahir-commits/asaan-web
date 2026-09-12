"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Project, ProjectCategory } from "@/types/project";
import { ProjectCard } from "./ProjectCard";

const tabs = [{ label: "All Projects", href: "/projects" }, { label: "High-Rise", href: "/projects/high-rise" }, { label: "Residential", href: "/projects/residential" }, { label: "Commercial", href: "/projects/commercial" }];

export function ProjectCollection({ projects, active }: { projects: Project[]; active?: ProjectCategory }) {
  const [city, setCity] = useState("");
  const [developer, setDeveloper] = useState("");
  const filtered = useMemo(() => projects.filter(project => (!city || project.city === city) && (!developer || project.developer === developer)), [projects, city, developer]);
  return <>
    <div className="mb-8 flex flex-wrap gap-2">{tabs.map(tab => <Link key={tab.href} href={tab.href} className={`border px-4 py-3 text-xs font-bold uppercase tracking-wider ${(!active && tab.href === "/projects") || tab.label === active ? "border-navy bg-navy text-white" : "border-navy/15 bg-white text-navy hover:border-gold"}`}>{tab.label}</Link>)}</div>
    <div className="mb-10 grid gap-3 bg-sand p-5 sm:grid-cols-2 lg:grid-cols-4">
      <label className="text-[10px] font-bold uppercase tracking-wider text-slate">City<select value={city} onChange={event => setCity(event.target.value)} className="mt-2 min-h-11 w-full border border-navy/10 bg-white px-3 text-sm font-semibold text-navy"><option value="">All</option>{[...new Set(projects.map(project => project.city))].map(item => <option key={item}>{item}</option>)}</select></label>
      <label className="text-[10px] font-bold uppercase tracking-wider text-slate">Project Type<select className="mt-2 min-h-11 w-full border border-navy/10 bg-white px-3 text-sm font-semibold text-navy"><option>{active ?? "All"}</option></select></label>
      <label className="text-[10px] font-bold uppercase tracking-wider text-slate">Developer<select value={developer} onChange={event => setDeveloper(event.target.value)} className="mt-2 min-h-11 w-full border border-navy/10 bg-white px-3 text-sm font-semibold text-navy"><option value="">All</option>{[...new Set(projects.map(project => project.developer))].map(item => <option key={item}>{item}</option>)}</select></label>
      <label className="text-[10px] font-bold uppercase tracking-wider text-slate">Price Range<select className="mt-2 min-h-11 w-full border border-navy/10 bg-white px-3 text-sm font-semibold text-navy"><option>All</option><option>Under PKR 1 Crore</option><option>PKR 1–3 Crore</option><option>PKR 3 Crore+</option></select></label>
    </div>
    {filtered.length ? <div className="grid gap-5 lg:grid-cols-3">{filtered.map(project => <ProjectCard key={project.slug} project={project} />)}</div> : <div className="bg-sand p-10 text-center"><h2 className="font-display text-3xl">No projects match these filters</h2></div>}
  </>;
}
