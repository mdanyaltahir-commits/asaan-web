import Link from "next/link";

export interface Crumb { label: string; href?: string }

export function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, ...(item.href ? { item: `https://aasaan.com.pk${item.href}` } : {}) })),
  };
  return <><nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] ${dark ? "text-white/60" : "text-slate"}`}>{items.map((item, index) => <span key={`${item.label}-${index}`} className="flex items-center gap-2">{index > 0 && <span aria-hidden="true">/</span>}{item.href ? <Link href={item.href} className="hover:text-gold-dark">{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}</nav><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
