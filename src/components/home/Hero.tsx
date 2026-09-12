import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PropertySearch } from "@/components/property/PropertySearch";

const trust = ["NOC Verified Projects Only", "Trusted Services", "Expert Assistance", "End-to-End Support", "For Pakistan & Overseas"];

export function Hero() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-navy text-white lg:min-h-[820px]">
      <Image src="/images/hero-property.webp" alt="Contemporary home overlooking Islamabad and the Margalla Hills" fill priority sizes="100vw" className="object-cover object-[64%_center]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,25,44,.98)_0%,rgba(3,25,44,.88)_38%,rgba(3,25,44,.42)_72%,rgba(3,25,44,.2)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,25,44,.82)_0%,transparent_45%)]" />
      <Container className="relative flex min-h-[760px] flex-col justify-center pb-10 pt-20 lg:min-h-[820px] lg:pt-14">
        <div className="max-w-3xl">
          <p className="mb-6 flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.22em] text-gold sm:text-xs"><span className="h-px w-9 bg-gold" />Pakistan&apos;s Complete Property Ecosystem</p>
          <h1 className="font-display text-[clamp(3.25rem,6.5vw,6.8rem)] leading-[0.95] tracking-[-0.035em]">One Ecosystem.<br />One Property Journey.<br /><em className="font-normal text-gold">Made Aasaan.</em></h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/76 sm:text-lg">Buy, Sell, Rent, Verify, Build, Invest and Manage — everything property, under one trusted platform.</p>
        </div>
        <div className="mt-10 max-w-5xl"><PropertySearch /></div>
        <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
          {trust.map(item => <span key={item} className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/65"><span className="grid h-4 w-4 place-items-center rounded-full border border-gold/70 text-[8px] text-gold">✓</span>{item}</span>)}
        </div>
      </Container>
    </section>
  );
}
