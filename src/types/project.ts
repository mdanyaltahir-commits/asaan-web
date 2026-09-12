export type ProjectCategory = "Residential" | "High-Rise" | "Commercial";

export interface Project {
  slug: string;
  name: string;
  location: string;
  city: string;
  category: ProjectCategory;
  image: string;
  nocVerified: boolean;
  developer: string;
  startingPrice: string;
  overview: string;
  authority: string;
  approvalStatus: string;
  approvalReference: string;
  verificationDate: string;
  verificationSource: string;
  inventory: string[];
  paymentPlan: string[];
  amenities: string[];
  landmarks: string[];
}
