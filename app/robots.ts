import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://indianmetaphysicalsociety.com";
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `https://indianmetaphysicalsociety.com/sitemap.xml`, host: base };
}
