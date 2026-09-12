import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/layout/Container";
import { SearchExperience } from "@/components/search/SearchExperience";

export const metadata: Metadata = { title: "Search AASAAN", description: "Search properties, projects, articles and services across AASAAN.", alternates: { canonical: "/search" } };
export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) { const { q = "" } = await searchParams; return <main><PageHero eyebrow="Search the Ecosystem" title="What are you looking for?" description="Search across properties, verified-ready projects, services and property intelligence." /><section className="bg-offwhite py-16 sm:py-20"><Container><SearchExperience initialQuery={q} /></Container></section></main>; }
