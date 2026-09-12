import Link from "next/link";
import type { Service } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icons";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link href={service.href} className="group relative flex min-h-64 flex-col border border-navy/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold/70 hover:shadow-[0_20px_50px_rgba(3,25,44,.08)] focus-visible:outline-2 focus-visible:outline-gold">
      <div className="flex items-start justify-between"><span className="grid h-12 w-12 place-items-center bg-sand text-gold-dark transition-colors group-hover:bg-navy group-hover:text-gold"><Icon name={service.icon} className="h-6 w-6" /></span><span className="text-xs text-navy/25">{String(index + 1).padStart(2, "0")}</span></div>
      <div className="mt-auto pt-9">{service.badge && <Badge>{service.badge}</Badge>}<h3 className="mt-3 font-display text-2xl text-navy">{service.name}</h3><p className="mt-2 text-sm leading-6 text-slate">{service.description}</p><span className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-gold-dark opacity-0 transition-opacity group-hover:opacity-100">Explore <Icon name="arrow" className="h-4 w-4" /></span></div>
    </Link>
  );
}
