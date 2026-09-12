import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { ArticleDetail } from "@/components/news/ArticleDetail";

const items = articles.filter(article => article.kind === "insight");
export function generateStaticParams() { return items.map(article => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const article = items.find(item => item.slug === slug); return article ? { title: article.title, description: article.summary, alternates: { canonical: `/insights/${slug}` }, openGraph: { type: "article", images: [article.image] } } : {}; }
export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const article = items.find(item => item.slug === slug); if (!article) notFound(); return <ArticleDetail article={article} />; }
