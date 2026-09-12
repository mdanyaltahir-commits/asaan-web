"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/ui/Icons";

export function SubscribeForm({ dark = false }: { dark?: boolean }) {
  const [sent, setSent] = useState(false);
  const inputId = useId();
  if (sent) return <p role="status" className={`mt-5 text-sm ${dark ? "text-brand-soft" : "text-gold-dark"}`}>Thank you. This demo has not stored your email.</p>;
  return <form onSubmit={event => { event.preventDefault(); setSent(true); }} className={`mt-5 flex border-b ${dark ? "border-white/30" : "border-border-soft"}`}><label htmlFor={inputId} className="sr-only">Email address</label><input required id={inputId} type="email" placeholder="Email address" className="min-h-14 min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-current/40" /><button aria-label="Subscribe" type="submit" className={`${dark ? "text-brand-soft" : "bg-gold px-6 text-white"} p-3 text-xs font-bold uppercase tracking-wider`}><span className="hidden sm:inline">Subscribe</span><Icon name="arrow" className="sm:hidden" /></button></form>;
}
