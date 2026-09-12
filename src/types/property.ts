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
}
