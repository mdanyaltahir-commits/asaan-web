import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

const pages: Record<string, { eyebrow: string; title: string; description: string }> = {
  buy: { eyebrow: "AASAAN Property", title: "Buy with confidence", description: "Discover curated homes, plots, apartments and commercial opportunities across Pakistan." },
  sell: { eyebrow: "AASAAN Selling", title: "Sell smarter, faster", description: "List your property with the clarity, reach and expert support it deserves." },
  rent: { eyebrow: "AASAAN Renting", title: "A better way to rent", description: "Find your next space or connect your property with serious tenants." },
  projects: { eyebrow: "AASAAN Projects", title: "Verified projects. Clear decisions.", description: "Explore real estate projects that satisfy AASAAN's regulatory and NOC verification policy." },
  services: { eyebrow: "AASAAN Services", title: "Support for every property step", description: "Inspection, due diligence, documentation, construction and closing — connected in one ecosystem." },
  insights: { eyebrow: "News & Insights", title: "Know the market", description: "Practical property intelligence, regulatory updates and expert perspectives for better decisions." },
  resources: { eyebrow: "Property Resources", title: "Useful information, made clear", description: "Access property guides, approvals, plans, forms and documents in one trusted place." },
  about: { eyebrow: "About AASAAN", title: "Property should feel simpler", description: "We are building Pakistan's complete property ecosystem around trust, expertise and connected service." },
  contact: { eyebrow: "Expert Assistance", title: "Let's make it Aasaan", description: "Tell us what you need. An AASAAN expert will help guide your next property step." },
  investment: { eyebrow: "Coming Soon", title: "AASAAN Investment Group", description: "Market insight and carefully considered property investment opportunities are on the way." },
  aasaanpaisa: { eyebrow: "Coming Soon", title: "AasaanPaisa", description: "A simpler, connected experience for property payments is in development." },
};

export function generateStaticParams() { return Object.keys(pages).map(slug => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  return page ? { title: page.title, description: page.description, alternates: { canonical: `/${slug}` } } : {};
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return <PlaceholderPage {...page} />;
}
