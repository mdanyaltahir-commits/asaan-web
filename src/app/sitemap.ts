import type { MetadataRoute } from "next";

const routes = ["", "/buy", "/sell", "/rent", "/projects", "/services", "/insights", "/resources", "/about", "/contact", "/investment", "/aasaanpaisa"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map(route => ({ url: `https://aasaan.com.pk${route}`, lastModified: now, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}
