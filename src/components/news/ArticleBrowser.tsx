"use client";

import { useMemo, useState } from "react";
import type { Article } from "@/types/article";
import { ArticleCard } from "./ArticleCard";

export function ArticleBrowser({ articles, categories }: { articles: Article[]; categories: string[] }) {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("All");
  const filtered = useMemo(() => articles.filter(article => (category === "All" || article.category === category) && `${article.title} ${article.summary}`.toLowerCase().includes(query.toLowerCase())), [articles, category, query]);
  return <><div className="mb-10 grid gap-4 border border-navy/10 bg-white p-5 md:grid-cols-[1fr_auto]"><label className="text-[10px] font-bold uppercase tracking-wider text-slate">Search<input value={query} onChange={e => setQuery(e.target.value)} type="search" placeholder="Search articles" className="mt-2 min-h-12 w-full border border-navy/15 px-4 text-sm font-normal text-navy outline-none focus:border-gold" /></label><div className="flex flex-wrap items-end gap-2">{["All", ...categories].map(item => <button key={item} type="button" onClick={() => setCategory(item)} className={`min-h-12 border px-4 text-[10px] font-bold uppercase tracking-wider ${category === item ? "border-navy bg-navy text-white" : "border-navy/15"}`}>{item}</button>)}</div></div>{filtered.length ? <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{filtered.map(article => <ArticleCard key={article.slug} article={article} />)}</div> : <div className="bg-sand p-10 text-center"><h2 className="font-display text-3xl">No articles found</h2><p className="mt-2 text-sm text-slate">Try a broader search or another category.</p></div>}</>;
}
