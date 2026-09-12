import Link from "next/link";
import { Container } from "./Container";
import { SubscribeForm } from "@/components/forms/SubscribeForm";

const groups = [
  { title: "Quick Links", links: [["Buy Property", "/buy"], ["Sell Property", "/sell"], ["Rent Property", "/rent"], ["Projects", "/projects"], ["Property Map", "/property-map"]] },
  { title: "Services", links: [["Selling", "/services/selling"], ["Renting", "/services/renting"], ["Inspection", "/services/inspection"], ["Due Diligence", "/services/due-diligence"], ["Legal Desk", "/services/legal-desk"], ["Merging", "/services/property-file-merging"], ["Closing", "/services/closing"], ["Construction", "/construction"]] },
  { title: "Explore", links: [["News & Insights", "/insights"], ["Videos", "/videos"], ["Resources", "/resources"], ["Overseas Pakistanis", "/overseas-pakistanis"], ["Partners", "/partners"], ["About", "/about"]] },
  { title: "Future", links: [["Investment Group — Coming Soon", "/investment"], ["AasaanPaisa — Coming Soon", "/aasaanpaisa"], ["Account", "/account"], ["Contact", "/contact"]] },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.2fr_.8fr_1fr_.9fr_1fr_1.25fr] lg:py-20">
        <div>
          <Link href="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center border border-gold text-gold">A</span><span className="text-xl font-bold tracking-[0.18em]">AASAAN</span></Link>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">One ecosystem for every step of your property journey — built for Pakistan and Pakistanis worldwide.</p>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-gold">The Complete Property Ecosystem</p>
          <div className="mt-7 flex gap-2" aria-label="Social channels coming soon">{["in", "f", "ig", "yt"].map(icon => <span key={icon} className="grid h-8 w-8 place-items-center border border-white/20 text-[10px] font-bold uppercase text-white/55">{icon}</span>)}</div>
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
          <p className="mt-3 text-xs text-white/45">Contact details will be published once confirmed.</p>
          <SubscribeForm dark />
        </div>
      </Container>
      <div className="border-t border-white/10"><Container className="flex flex-col gap-3 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} AASAAN. All rights reserved.</p><div className="flex gap-5"><Link href="/resources">Terms & Conditions</Link><Link href="/resources">Privacy Policy</Link></div><p>One Property Journey. Made Aasaan.</p></Container></div>
    </footer>
  );
}
