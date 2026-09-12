import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/layout/Container";
import { ArticleBrowser } from "@/components/news/ArticleBrowser";
import { articles } from "@/data/articles";

export const metadata: Metadata = { title: "Pakistan Real Estate News & Regulatory Updates", description: "Development authority, property policy, tax and market updates from the AASAAN Desk.", alternates: { canonical: "/news" } };
export default function NewsPage() { const items = articles.filter(article => article.kind === "news"); return <main><PageHero eyebrow="AASAAN Desk" title="Pakistan Real Estate News & Regulatory Updates" description="A source-conscious view of the information shaping property decisions." image="/images/property-commercial.webp" /><section className="bg-offwhite py-16 sm:py-20"><Container><ArticleBrowser articles={items} categories={["CDA", "RDA", "LDA", "SBCA", "FBR", "Government Policies", "Development Authorities", "Property Taxes", "Market Updates"]} /></Container></section></main>; }
