import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types/article";
import { Icon } from "@/components/ui/Icons";

export function ArticleCard({ article }: { article: Article }) {
  const base = article.kind === "news" ? "/news" : "/insights";
  return <article className="group bg-white"><Link href={`${base}/${article.slug}`} className="block focus-visible:outline-2 focus-visible:outline-gold"><div className="relative aspect-[16/10] overflow-hidden bg-sand"><Image src={article.image} alt="" fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]" /></div><div className="border-x border-b border-navy/10 p-6"><div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-gold-dark"><span>{article.category}</span><span className="text-slate">• {article.date}</span></div><h2 className="mt-3 font-display text-2xl leading-8 text-navy">{article.title}</h2><p className="mt-3 text-sm leading-6 text-slate">{article.summary}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider">Read more <Icon name="arrow" className="h-4 w-4" /></span></div></Link></article>;
}
