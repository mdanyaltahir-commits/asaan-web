import { Icon } from "@/components/ui/Icons";

export function VerificationBadge() {
  return <span className="inline-flex items-center gap-1.5 bg-[#e8f4ee] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#17633c]"><Icon name="shield" className="h-3.5 w-3.5" />NOC Verified</span>;
}
