import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/layout/Container";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";
import { ProcessTimeline, CTASection } from "@/components/ui/ContentBlocks";

export const metadata: Metadata = { title: "Property Services", description: "Discover every connected property service in the AASAAN ecosystem.", alternates: { canonical: "/services" } };
const journey = ["Discover", "Verify", "Transact", "Recover", "Build", "Invest", "Operate"].map((title, index) => ({ title, description: ["Find the right property or project.", "Understand condition, records and approvals.", "Coordinate selling, renting and closing.", "Navigate property-file challenges.", "Move from plot to completed property.", "Build better market understanding.", "Manage the property journey over time."][index] }));
export default function ServicesPage() { return <main><PageHero eyebrow="The Complete Property Ecosystem" title="Every Property Service. One AASAAN Ecosystem." description="Specialist departments connected around one property journey." image="/images/property-commercial.webp" /><section className="bg-offwhite py-18 sm:py-24"><Container><div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{services.map((service, index) => <ServiceCard key={service.name} service={service} index={index} />)}</div></Container></section><ProcessTimeline eyebrow="One connected journey" title="How the ecosystem connects" steps={journey} /><CTASection title="Not sure where to begin?" description="Tell us the property outcome you need and an AASAAN expert will help identify the right starting point." /></main>; }
