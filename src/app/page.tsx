import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { LatestInsights } from "@/components/home/LatestInsights";
import { ExpertCTA } from "@/components/home/ExpertCTA";

export default function Home() {
  return <main><Hero /><TrustStrip /><EcosystemSection /><FeaturedProperties /><FeaturedProjects /><LatestInsights /><ExpertCTA /></main>;
}
