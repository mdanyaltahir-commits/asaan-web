import { Icon } from "@/components/ui/Icons";

export function VerificationBadge() {
  return <span className="inline-flex items-center gap-1.5 bg-brand-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-gold-dark"><Icon name="shield" className="h-3.5 w-3.5" />NOC Verified</span>;
}
