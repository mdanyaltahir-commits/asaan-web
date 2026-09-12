"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";

const tabs = ["BUY", "SELL", "RENT"] as const;

export function PropertySearch() {
  const [active, setActive] = useState<(typeof tabs)[number]>("BUY");
  return (
    <div className="w-full bg-white text-navy shadow-[0_24px_60px_rgba(1,20,37,0.2)]">
      <div role="tablist" aria-label="Property action" className="flex border-b border-navy/10 px-4 sm:px-7">
        {tabs.map(tab => <button type="button" role="tab" aria-selected={active === tab} key={tab} onClick={() => setActive(tab)} className={`relative min-h-14 px-5 text-xs font-bold tracking-[0.18em] ${active === tab ? "text-navy after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:bg-gold" : "text-slate hover:text-navy"}`}>{tab}</button>)}
      </div>
      {active === "SELL" ? (
        <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div><p className="font-display text-2xl">Ready to sell your property?</p><p className="mt-1 text-sm text-slate">Tell us about it and an AASAAN expert will guide you.</p></div>
          <Button href="/sell" variant="gold">List Your Property <Icon name="arrow" /></Button>
        </div>
      ) : (
        <form action={active === "BUY" ? "/buy" : "/rent"} className="grid gap-0 p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-[1fr_1fr_1fr_auto]">
          <label className="border-b border-navy/12 px-3 py-3 sm:border-b-0 sm:border-r"><span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-slate">City</span><select name="city" className="mt-1 w-full appearance-none bg-transparent py-1 text-sm font-semibold outline-none"><option>Islamabad</option><option>Rawalpindi</option><option>Lahore</option><option>Karachi</option></select></label>
          <label className="border-b border-navy/12 px-3 py-3 sm:border-b-0 lg:border-r"><span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-slate">Property Type</span><select name="type" className="mt-1 w-full appearance-none bg-transparent py-1 text-sm font-semibold outline-none"><option>Any Property</option><option>House</option><option>Plot</option><option>Apartment</option><option>Commercial</option></select></label>
          <label className="px-3 py-3 sm:border-r"><span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-slate">Price Range</span><select name="price" className="mt-1 w-full appearance-none bg-transparent py-1 text-sm font-semibold outline-none"><option>Any Price</option><option>Under 1 Crore</option><option>1–5 Crore</option><option>5 Crore+</option></select></label>
          <Button variant="gold" className="mt-3 sm:col-span-2 lg:col-span-1 lg:ml-4 lg:mt-0">Search Properties <Icon name="search" className="h-4 w-4" /></Button>
        </form>
      )}
    </div>
  );
}
