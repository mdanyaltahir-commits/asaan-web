import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aasaan.com.pk"),
  title: { default: "AASAAN | The Complete Property Ecosystem", template: "%s | AASAAN" },
  description: "Buy, sell, rent, verify and manage property through AASAAN — Pakistan's complete property ecosystem.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://aasaan.com.pk",
    siteName: "AASAAN",
    title: "AASAAN | The Complete Property Ecosystem",
    description: "One ecosystem. One property journey. Made Aasaan.",
    images: [{ url: "/images/hero-property.webp", width: 2048, height: 768, alt: "AASAAN property ecosystem" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
