import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icons";

const items = [
  ["shield", "Verified Information", "We check before you invest"],
  ["check", "Professional Support", "From search to closing"],
  ["city", "Nationwide Coverage", "All major cities of Pakistan"],
  ["pin", "Serving Pakistan & Overseas", "Wherever you are"],
];

export function TrustStrip() {
  return <section aria-label="Why choose AASAAN" className="border-y border-navy/10 bg-offwhite"><Container className="grid sm:grid-cols-2 lg:grid-cols-4">{items.map(([icon, title, copy]) => <div key={title} className="flex gap-4 border-b border-navy/10 py-8 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0"><Icon name={icon} className="h-7 w-7 shrink-0 text-gold-dark" /><div><h2 className="text-sm font-bold text-navy">{title}</h2><p className="mt-1 text-xs leading-5 text-slate">{copy}</p></div></div>)}</Container></section>;
}
