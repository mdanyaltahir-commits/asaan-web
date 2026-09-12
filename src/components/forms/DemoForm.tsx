"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icons";

type Kind = "inquiry" | "listing" | "inspection" | "consultation" | "partner";

const baseFields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: true },
  { name: "city", label: "City", type: "select", options: ["Islamabad", "Rawalpindi", "Lahore", "Karachi", "Other"], required: true },
];

const extraFields: Record<Kind, Array<{ name: string; label: string; type: string; options?: string[]; required?: boolean }>> = {
  inquiry: [
    { name: "inquiryType", label: "Inquiry Type", type: "select", options: ["General Inquiry", "Property Assistance", "Project Inquiry", "Service Inquiry"], required: true },
    { name: "message", label: "How can we help?", type: "textarea", required: true },
  ],
  inspection: [
    { name: "propertyType", label: "Property Type", type: "select", options: ["House", "Apartment", "Commercial", "Other"], required: true },
    { name: "area", label: "Area / Location", type: "text", required: true },
    { name: "message", label: "Inspection details", type: "textarea" },
  ],
  consultation: [
    { name: "projectType", label: "Project Type", type: "select", options: ["Residential Construction", "Commercial Construction", "Renovation", "Project Management"], required: true },
    { name: "plotSize", label: "Plot / Project Size", type: "text" },
    { name: "message", label: "Tell us about the project", type: "textarea", required: true },
  ],
  partner: [
    { name: "partnerType", label: "I am a", type: "select", options: ["Agent", "Dealer", "Agency", "Developer"], required: true },
    { name: "company", label: "Company / Agency", type: "text" },
    { name: "message", label: "Tell us about your work", type: "textarea" },
  ],
  listing: [
    { name: "role", label: "I am an", type: "select", options: ["Owner", "Agent"], required: true },
    { name: "area", label: "Area", type: "text", required: true },
    { name: "propertyType", label: "Property Type", type: "select", options: ["House", "Apartment", "Residential Plot", "Commercial Plot", "Shop", "Office", "Farmhouse", "Building", "Land"], required: true },
    { name: "purpose", label: "Purpose", type: "select", options: ["Sell", "Rent"], required: true },
    { name: "price", label: "Expected Price", type: "text", required: true },
    { name: "size", label: "Property Size", type: "text", required: true },
    { name: "bedrooms", label: "Bedrooms", type: "number" },
    { name: "bathrooms", label: "Bathrooms", type: "number" },
    { name: "title", label: "Listing Title", type: "text", required: true },
    { name: "description", label: "Property Description", type: "textarea", required: true },
    { name: "images", label: "Property Images", type: "file" },
    { name: "documents", label: "Documents", type: "file" },
  ],
};

export function DemoForm({ kind = "inquiry", submitLabel = "Send Inquiry", compact = false }: { kind?: Kind; submitLabel?: string; compact?: boolean }) {
  const [sent, setSent] = useState(false);
  if (sent) return <div role="status" className="border border-[#b7d9c6] bg-[#edf7f1] p-7 text-[#175c39]"><Icon name="check" className="h-8 w-8" /><h3 className="mt-4 font-display text-2xl">Thank you — your demo request is ready.</h3><p className="mt-2 text-sm leading-6">No information has been permanently stored. A live submission workflow will be connected during the backend phase.</p><button type="button" onClick={() => setSent(false)} className="mt-5 text-xs font-bold uppercase tracking-wider underline">Start another request</button></div>;
  const fields = [...baseFields, ...extraFields[kind]];
  return <form onSubmit={event => { event.preventDefault(); setSent(true); }} className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
    {fields.map(field => <label key={field.name} className={`${field.type === "textarea" || field.type === "file" ? "sm:col-span-2" : ""} block text-xs font-bold uppercase tracking-[0.12em] text-navy`}><span>{field.label}{field.required && <span className="text-gold-dark"> *</span>}</span>{field.type === "select" ? <select name={field.name} required={field.required} className="mt-2 min-h-12 w-full border border-navy/15 bg-white px-4 text-sm font-normal outline-none focus:border-gold"><option value="">Select</option>{field.options?.map(option => <option key={option}>{option}</option>)}</select> : field.type === "textarea" ? <textarea name={field.name} required={field.required} rows={4} className="mt-2 w-full border border-navy/15 bg-white px-4 py-3 text-sm font-normal outline-none focus:border-gold" /> : <input name={field.name} required={field.required} type={field.type} multiple={field.type === "file"} className="mt-2 min-h-12 w-full border border-navy/15 bg-white px-4 py-3 text-sm font-normal outline-none file:mr-4 file:border-0 file:bg-sand file:px-3 file:py-2 focus:border-gold" />}</label>)}
    {kind === "listing" && <label className="flex items-start gap-3 text-sm font-normal leading-6 text-slate sm:col-span-2"><input required type="checkbox" className="mt-1 h-4 w-4 accent-gold-dark" /><span>I confirm that the information is accurate and agree to AASAAN reviewing the listing before publication.</span></label>}
    <div className={compact ? "" : "sm:col-span-2"}><Button variant="gold">{submitLabel} <Icon name="arrow" /></Button><p className="mt-3 text-xs leading-5 text-slate">Demo submission only — data is not stored.</p></div>
  </form>;
}
