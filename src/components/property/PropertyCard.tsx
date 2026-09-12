import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/types/property";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icons";

export function PropertyCard({ property }: { property: Property }) {
  return <article className="group bg-white"><Link href={`/buy?property=${property.slug}`} className="block focus-visible:outline-2 focus-visible:outline-gold"><div className="relative aspect-[4/3] overflow-hidden bg-sand"><Image src={property.image} alt={`${property.propertyType} in ${property.location}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.035]" /><div className="absolute left-4 top-4"><Badge variant="light">{property.propertyType}</Badge></div><span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center bg-navy/90 text-white transition-colors group-hover:bg-gold group-hover:text-navy"><Icon name="arrow" /></span></div><div className="border-x border-b border-navy/10 p-5"><p className="text-lg font-bold text-gold-dark">{property.price}</p><h3 className="mt-2 font-display text-[1.35rem] leading-7 text-navy">{property.title}</h3><div className="mt-4 flex items-center justify-between border-t border-navy/8 pt-4 text-xs text-slate"><span className="flex items-center gap-1.5"><Icon name="pin" className="h-4 w-4" />{property.location}</span><span>{property.size}</span></div></div></Link></article>;
}
