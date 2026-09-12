export type PropertyType = "House" | "Plot" | "Apartment" | "Commercial";

export interface Property {
  slug: string;
  title: string;
  location: string;
  city: string;
  price: string;
  propertyType: PropertyType;
  size: string;
  image: string;
  featured: boolean;
  area: string;
  bedrooms?: number;
  bathrooms?: number;
  purpose: "For Sale" | "For Rent";
  propertyId: string;
  classification: "Residential" | "Commercial";
  status: "Ready" | "Under Construction";
  installmentAvailable: boolean;
  verified: boolean;
  description: string;
  amenities: string[];
  nearby: string[];
  projectSlug?: string;
}
