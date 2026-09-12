import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";
import { projects } from "@/data/projects";
import { servicePages } from "@/data/service-pages";
import { articles } from "@/data/articles";
import { cities } from "@/data/cities";

const routes = ["", "/buy", "/sell", "/rent", "/projects", "/projects/high-rise", "/projects/residential", "/projects/commercial", "/services", "/construction", "/insights", "/news", "/videos", "/resources", "/property-map", "/overseas-pakistanis", "/about", "/contact", "/list-property", "/partners", "/investment", "/aasaanpaisa", "/search"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const dynamic = [...cities.map(city => `/buy/${city.slug}`), ...properties.map(property => `/property/${property.slug}`), ...projects.map(project => `/projects/${project.slug}`), ...servicePages.map(service => `/services/${service.slug}`), ...articles.map(article => `/${article.kind === "news" ? "news" : "insights"}/${article.slug}`)];
  return [...routes, ...dynamic].map(route => ({ url: `https://aasaan.com.pk${route}`, lastModified: now, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}
