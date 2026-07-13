import type { MetadataRoute } from "next";
import {
  caseStudies,
  industryPages,
  seoServices,
} from "../data/seo-pages";
import { siteUrl } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/industries`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/work`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = seoServices.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industries: MetadataRoute.Sitemap = industryPages.map((industry) => ({
    url: `${siteUrl}/industries/${industry.slug}`,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const workPages: MetadataRoute.Sitemap = caseStudies.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    changeFrequency: "yearly",
    priority: 0.65,
  }));

  return [...staticPages, ...servicePages, ...industries, ...workPages];
}

