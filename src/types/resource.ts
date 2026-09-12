export interface ResourceItem {
  slug: string;
  title: string;
  project: string;
  city: string;
  type: "Master Plan" | "Booking Form" | "Payment Plan" | "NOC Document" | "Brochure" | "Floor Plan" | "Property Guide" | "Authority Resource";
  format: "PDF" | "Link";
  available: boolean;
}
