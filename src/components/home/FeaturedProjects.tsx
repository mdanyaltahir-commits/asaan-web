import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icons";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  return <section className="bg-sand py-20 lg:py-28"><Container><div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><SectionHeading eyebrow="Verified Opportunities" title="NOC-Approved Projects" description="Invest in verified projects with confidence." /><Link href="/projects" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-navy hover:text-gold-dark">Explore projects <Icon name="arrow" /></Link></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div><p className="mt-6 max-w-3xl text-xs leading-5 text-slate">Every project promoted through AASAAN Projects must satisfy our regulatory and NOC verification policy. Verification reflects the information available at the time of review.</p></Container></section>;
}
