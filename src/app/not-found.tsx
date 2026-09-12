import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icons";

export default function NotFound() { return <main className="grid min-h-[65vh] place-items-center bg-offwhite py-20"><Container className="text-center"><p className="text-xs font-bold uppercase tracking-[.2em] text-gold-dark">404</p><h1 className="mt-4 font-display text-5xl sm:text-7xl">Looks like this property moved.</h1><p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate">The page is not available, but the rest of the AASAAN ecosystem is ready to explore.</p><Link href="/" className="mt-8 inline-flex min-h-12 items-center gap-2 bg-gold px-6 text-xs font-bold uppercase tracking-wider text-white">Return Home <Icon name="arrow" /></Link></Container></main>; }
