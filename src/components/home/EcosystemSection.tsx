import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export function EcosystemSection() {
  return <section className="bg-offwhite py-20 lg:py-28"><Container><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><SectionHeading eyebrow="Everything Property" title="The AASAAN Ecosystem" description="Specialist services, connected around one goal: making every property decision simpler, safer and more confident." /><p className="max-w-sm border-l border-gold pl-5 text-sm leading-6 text-slate">From your first search to final closing — and every critical step in between.</p></div><div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{services.map((service, index) => <ServiceCard key={service.name} service={service} index={index} />)}</div></Container></section>;
}
