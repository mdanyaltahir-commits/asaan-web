"use client";

import { useMemo, useState } from "react";
import type { ResourceItem } from "@/types/resource";
import { ResourceCard } from "./ResourceCard";

export function ResourceBrowser({ resources }: { resources: ResourceItem[] }) {
  const [city, setCity] = useState(""); const [project, setProject] = useState(""); const [type, setType] = useState("");
  const filtered = useMemo(() => resources.filter(resource => (!city || resource.city === city) && (!project || resource.project === project) && (!type || resource.type === type)), [resources, city, project, type]);
  const selectClass = "mt-2 min-h-12 w-full border border-navy/10 bg-white px-4 text-sm text-navy";
  return <><div className="mb-10 grid gap-3 bg-sand p-5 sm:grid-cols-3"><label className="text-[10px] font-bold uppercase tracking-wider text-slate">City<select value={city} onChange={e => setCity(e.target.value)} className={selectClass}><option value="">All</option>{[...new Set(resources.map(item => item.city))].map(item => <option key={item}>{item}</option>)}</select></label><label className="text-[10px] font-bold uppercase tracking-wider text-slate">Project<select value={project} onChange={e => setProject(e.target.value)} className={selectClass}><option value="">All</option>{[...new Set(resources.map(item => item.project))].map(item => <option key={item}>{item}</option>)}</select></label><label className="text-[10px] font-bold uppercase tracking-wider text-slate">Document Type<select value={type} onChange={e => setType(e.target.value)} className={selectClass}><option value="">All</option>{[...new Set(resources.map(item => item.type))].map(item => <option key={item}>{item}</option>)}</select></label></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map(resource => <ResourceCard key={resource.slug} resource={resource} />)}</div></>;
}
