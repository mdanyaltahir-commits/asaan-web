import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "the-residences-islamabad",
    name: "The Residences",
    location: "Park Road",
    city: "Islamabad",
    category: "Residential",
    image: "/images/hero-property.webp",
    nocVerified: true,
  },
  {
    slug: "central-heights-lahore",
    name: "Central Heights",
    location: "Gulberg",
    city: "Lahore",
    category: "High-Rise",
    image: "/images/project-towers.webp",
    nocVerified: true,
  },
  {
    slug: "harbour-business-district-karachi",
    name: "Harbour Business District",
    location: "Shahrah-e-Faisal",
    city: "Karachi",
    category: "Commercial",
    image: "/images/property-commercial.webp",
    nocVerified: true,
  },
];
