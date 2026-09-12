import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/layout/Container";
import { ResourceBrowser } from "@/components/resources/ResourceBrowser";
import { resources } from "@/data/resources";

export const metadata: Metadata = { title: "Property Resources & Downloads", description: "Browse property guides, plans, forms, project documents and authority resources.", alternates: { canonical: "/resources" } };
export default function ResourcesPage() { return <main><PageHero eyebrow="AASAAN Resources" title="Property Resources & Downloads" description="Useful information organised by city, project and document type." image="/images/property-commercial.webp" /><section className="bg-offwhite py-16 sm:py-20"><Container><ResourceBrowser resources={resources} /><p className="mt-8 border-l-2 border-gold pl-5 text-sm leading-6 text-slate">No fake official files are provided. Download actions remain disabled until verified documents are supplied through the publishing workflow.</p></Container></section></main>; }
