import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import { VerificationBadge } from "./VerificationBadge";
import { Icon } from "@/components/ui/Icons";

export function ProjectCard({ project }: { project: Project }) {
  return <article className="group relative min-h-[470px] overflow-hidden bg-navy text-white"><Image src={project.image} alt={`${project.name}, ${project.city}`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" /><Link href={`/projects/${project.slug}`} className="absolute inset-0 flex flex-col justify-between p-6 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-gold"><div>{project.nocVerified && <VerificationBadge />}</div><div><p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-soft">{project.category}</p><h3 className="mt-2 font-display text-3xl">{project.name}</h3><p className="mt-2 text-xs text-white/60">By {project.developer}</p><p className="mt-3 flex items-center gap-2 text-sm text-white/70"><Icon name="pin" className="h-4 w-4" />{project.location}, {project.city}</p><p className="mt-3 text-sm font-bold text-brand-soft">{project.startingPrice}</p><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]">View Project <Icon name="arrow" /></span></div></Link></article>;
}
