"use client";

import { useMemo, useState } from "react";
import type { Video } from "@/types/video";
import { VideoCard } from "./VideoCard";

const filters = ["All", "Market Updates", "Project Reviews", "Education", "Expert Talks", "Location Analysis"];
export function VideoBrowser({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => videos.filter(video => active === "All" || video.category === active), [videos, active]);
  return <><div className="mb-10 flex flex-wrap gap-2">{filters.map(filter => <button key={filter} type="button" onClick={() => setActive(filter)} className={`border px-4 py-3 text-xs font-bold uppercase tracking-wider ${active === filter ? "border-navy bg-navy text-white" : "border-navy/15 bg-white"}`}>{filter}</button>)}</div><div className="grid gap-9 md:grid-cols-2 lg:grid-cols-3">{filtered.map(video => <VideoCard key={video.slug} video={video} />)}</div></>;
}
