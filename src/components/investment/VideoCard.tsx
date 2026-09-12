import Image from "next/image";
import type { Video } from "@/types/video";
import { Icon } from "@/components/ui/Icons";

export function VideoCard({ video, large = false }: { video: Video; large?: boolean }) {
  return <article className="group"><div className={`relative overflow-hidden bg-navy ${large ? "aspect-[16/8]" : "aspect-video"}`}><Image src={video.image} alt="" fill sizes={large ? "100vw" : "(max-width:1024px) 100vw, 33vw"} className="object-cover opacity-85 transition-transform duration-500 group-hover:scale-[1.03]" /><button type="button" aria-label={`Play ${video.title}`} className="absolute inset-0 grid place-items-center"><span className="grid h-16 w-16 place-items-center bg-gold text-navy"><Icon name="play" className="h-8 w-8" /></span></button><span className="absolute bottom-3 right-3 bg-navy px-2 py-1 text-[10px] font-bold text-white">{video.duration}</span></div><p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dark">{video.category}</p><h2 className={`${large ? "text-3xl sm:text-4xl" : "text-2xl"} mt-2 font-display leading-tight text-navy`}>{video.title}</h2><p className="mt-2 text-xs text-slate">{video.date} · Video preview</p></article>;
}
