const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kulaa.studio";

export const siteUrl = configuredSiteUrl.replace(/\/+$/, "");

export const siteConfig = {
  name: "kulaa.studio",
  title: "Marketing Agency Maldives | kulaa.studio",
  description:
    "Branding, social media, content and campaigns for Maldives resorts, cafés, creators and lifestyle brands. Build a bolder brand with kulaa.studio.",
  url: siteUrl,
  locale: "en_MV",
  ogImage: "/images/kulaa-social-card.webp",
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || undefined,
};

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: image,
          alt: title,
          ...(image === siteConfig.ogImage
            ? { width: 1200, height: 630 }
            : {}),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
import type { Metadata } from "next";
