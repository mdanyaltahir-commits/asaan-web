import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/layout/Container";
import { ArticleBrowser } from "@/components/news/ArticleBrowser";
import { articles } from "@/data/articles";

export const metadata: Metadata = { title: "Real Estate Insights", description: "Property guides, market updates, policies, regulations and project intelligence from AASAAN.", alternates: { canonical: "/insights" } };
export default function InsightsPage() { const items = articles.filter(article => article.kind === "insight"); return <main><PageHero eyebrow="AASAAN Insights" title="Understand Property Better" description="Clear guides, market perspectives and practical context for better property decisions." image="/images/project-towers.webp" /><section className="bg-offwhite py-16 sm:py-20"><Container><ArticleBrowser articles={items} categories={["Real Estate Guides", "Market Update", "Regulation", "Project Updates"]} /></Container></section></main>; }
