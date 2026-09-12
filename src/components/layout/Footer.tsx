import Link from "next/link";
import { Container } from "./Container";
import { Icon } from "@/components/ui/Icons";

const groups = [
  { title: "Quick Links", links: [["Buy Property", "/buy"], ["Sell Property", "/sell"], ["Rent Property", "/rent"], ["Projects", "/projects"], ["Services", "/services"], ["News", "/insights"], ["Resources", "/resources"], ["Contact", "/contact"]] },
  { title: "Our Services", links: [["AASAAN Property", "/buy"], ["AASAAN Selling", "/sell"], ["AASAAN Renting", "/rent"], ["AASAAN Inspection", "/services"], ["AASAAN Legal Desk", "/services"], ["AASAAN Merging", "/services"], ["AASAAN Construction", "/services"], ["AASAAN Projects", "/projects"], ["AASAAN Closing", "/services"]] },
  { title: "Other", links: [["AASAAN Investment Group — Coming Soon", "/investment"], ["AasaanPaisa — Coming Soon", "/aasaanpaisa"], ["About AASAAN", "/about"], ["Careers", "/contact"], ["Partner With Us", "/contact"], ["Terms & Conditions", "/resources"], ["Privacy Policy", "/resources"]] },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1.15fr_1.35fr] lg:py-20">
        <div>
          <Link href="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center border border-gold text-gold">A</span><span className="text-xl font-bold tracking-[0.18em]">AASAAN</span></Link>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">One ecosystem for every step of your property journey — built for Pakistan and Pakistanis worldwide.</p>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-gold">The Complete Property Ecosystem</p>
        </div>
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white/95">{group.title}</h2>
            <ul className="space-y-3">{group.links.map(([label, href]) => <li key={label}><Link href={href} className="text-[13px] leading-5 text-white/58 transition-colors hover:text-gold">{label}</Link></li>)}</ul>
          </div>
        ))}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em]">Subscribe to Updates</h2>
          <p className="mt-5 text-sm leading-6 text-white/60">Property insights, verified projects and important market updates.</p>
          <form className="mt-5" action="/contact">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <div className="flex border-b border-white/30 focus-within:border-gold">
              <input id="footer-email" name="email" type="email" placeholder="Email address" className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-white/40" />
              <button aria-label="Subscribe" type="submit" className="p-3 text-gold"><Icon name="arrow" /></button>
            </div>
          </form>
        </div>
      </Container>
      <div className="border-t border-white/10"><Container className="flex flex-col gap-3 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} AASAAN. All rights reserved.</p><p>One Property Journey. Made Aasaan.</p></Container></div>
    </footer>
  );
}
