import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/layout/Container";
import { VideoBrowser } from "@/components/investment/VideoBrowser";
import { videos } from "@/data/videos";

export const metadata: Metadata = { title: "Property Video Library", description: "Watch AASAAN market updates, project reviews, education and expert talks.", alternates: { canonical: "/videos" } };
export default function VideosPage() { return <main><PageHero eyebrow="AASAAN Video" title="Property Insight, in Focus" description="Market briefings, project conversations and practical property education." image="/images/hero-property.webp" /><section className="bg-offwhite py-16 sm:py-20"><Container><VideoBrowser videos={videos} /></Container></section></main>; }
