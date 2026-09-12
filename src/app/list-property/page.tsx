import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/layout/Container";
import { DemoForm } from "@/components/forms/DemoForm";

export const metadata: Metadata = { title: "List Your Property", description: "Submit a property for AASAAN review using our guided listing flow.", alternates: { canonical: "/list-property" } };
const steps = ["Basic Details", "Property Information", "Location", "Pricing", "Photos", "Documents", "Review & Submit"];
export default function ListPropertyPage() { return <main><PageHero eyebrow="Managed Submission" title="List Your Property" description="Share the essentials now. Every listing is reviewed by AASAAN before publication." /><section className="bg-offwhite py-16 sm:py-20"><Container><ol className="mb-12 grid gap-px bg-navy/10 sm:grid-cols-2 lg:grid-cols-7">{steps.map((step, index) => <li key={step} className="bg-white p-4"><span className="text-[10px] font-bold text-gold-dark">{index + 1}</span><p className="mt-2 text-xs font-bold leading-5">{step}</p></li>)}</ol><div className="mx-auto max-w-4xl border-t-2 border-gold bg-white p-6 shadow-[0_18px_50px_rgba(3,25,44,.06)] sm:p-10"><h2 className="font-display text-3xl">Property submission</h2><p className="mt-3 text-sm leading-6 text-slate">Listings are reviewed by AASAAN before publication. This Phase 2 form validates locally but does not store data.</p><div className="mt-8"><DemoForm kind="listing" submitLabel="Review & Submit" /></div></div></Container></section></main>; }
