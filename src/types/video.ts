export interface Video {
  slug: string;
  title: string;
  category: "Market Updates" | "Project Reviews" | "Education" | "Expert Talks" | "Location Analysis" | "AASAAN Talks" | "Development Authority Updates";
  duration: string;
  date: string;
  image: string;
  featured?: boolean;
}
