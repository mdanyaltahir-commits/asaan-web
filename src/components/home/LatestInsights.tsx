import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icons";
import { articles } from "@/data/articles";

export function LatestInsights() {
  return <section className="bg-white py-20 lg:py-28"><Container><div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><SectionHeading eyebrow="Knowledge that moves you" title="Latest News & Insights" description="Clear, considered perspectives on property, regulation and investment." /><Link href="/insights" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-navy hover:text-gold-dark">All insights <Icon name="arrow" /></Link></div><div className="mt-12 grid gap-8 lg:grid-cols-3">{articles.map(article => <article key={article.slug} className="group"><Link href={`/insights?article=${article.slug}`} className="block focus-visible:outline-2 focus-visible:outline-gold"><div className="relative aspect-[16/10] overflow-hidden bg-sand"><Image src={article.image} alt="" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]" /></div><div className="pt-5"><div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em]"><span className="text-gold-dark">{article.category}</span><span className="h-px w-5 bg-navy/20" /><time className="text-slate">{article.date}</time></div><h3 className="mt-3 font-display text-2xl leading-8 text-navy transition-colors group-hover:text-gold-dark">{article.title}</h3><span className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-navy">Read article <Icon name="arrow" className="h-4 w-4" /></span></div></Link></article>)}</div></Container></section>;
}
