import type { MetadataRoute } from "next";
import { articles } from "./data";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://indianmetaphysicalsociety.com";
  const pages = ["", "/about", "/founder", "/services", "/blog", "/gallery", "/contact", "/book", "/share-experience", "/privacy", "/terms", "/disclaimer"];
  return [
    ...pages.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : path === "/book" || path === "/founder" ? .9 : .7 })),
    ...articles.map((article) => ({ url: `${base}/blog/${article.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: .6 })),
  ];
}
