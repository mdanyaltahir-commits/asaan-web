export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-gold-dark">{eyebrow}</p>}
      <h2 className="font-display text-4xl leading-[1.08] text-navy sm:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-slate sm:text-lg">{description}</p>}
    </div>
  );
}
