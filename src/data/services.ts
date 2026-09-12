export interface Service {
  name: string;
  description: string;
  href: string;
  icon: string;
  badge?: string;
}

export const services: Service[] = [
  { name: "AASAAN Property", description: "Buy property with confidence", href: "/buy", icon: "home" },
  { name: "AASAAN Selling", description: "Sell smarter, faster", href: "/services/selling", icon: "tag" },
  { name: "AASAAN Renting", description: "Find or list rental properties", href: "/services/renting", icon: "key" },
  { name: "AASAAN Inspection", description: "Professional property inspection", href: "/services/inspection", icon: "search" },
  { name: "AASAAN Due Diligence", description: "Know before you commit", href: "/services/due-diligence", icon: "shield" },
  { name: "AASAAN Legal Desk", description: "Documentation made Aasaan", href: "/services/legal-desk", icon: "document" },
  { name: "AASAAN Merging", description: "File recovery & merging services", href: "/services/property-file-merging", icon: "merge" },
  { name: "AASAAN Construction", description: "From plot to property", href: "/construction", icon: "building" },
  { name: "AASAAN Projects", description: "NOC-approved real estate projects", href: "/projects", icon: "city" },
  { name: "AASAAN Closing", description: "Complete transaction support", href: "/services/closing", icon: "check" },
  { name: "AASAAN Investment Group", description: "Market insights & investment opportunities", href: "/investment", icon: "chart", badge: "Coming Soon" },
  { name: "AasaanPaisa", description: "Property payments made simple", href: "/aasaanpaisa", icon: "wallet", badge: "Coming Soon" },
];
