import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";

export function ExpertCTA() {
  return <section className="relative overflow-hidden bg-navy py-20 text-white lg:py-24"><div className="absolute -right-20 -top-40 h-[420px] w-[420px] rounded-full border border-gold/10" /><div className="absolute -right-4 -top-24 h-[280px] w-[280px] rounded-full border border-gold/10" /><Container className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">Personal guidance</p><h2 className="font-display text-4xl sm:text-5xl">Speak to an AASAAN Expert</h2><p className="mt-4 max-w-2xl text-base leading-7 text-white/65">Our team is here to help you at every step of your property journey.</p></div><div className="flex flex-col gap-3 sm:flex-row"><Button href="/contact" variant="gold">Get Assistance <Icon name="arrow" /></Button><Button href="/contact?channel=whatsapp" variant="light">Chat on WhatsApp</Button></div></Container></section>;
}
