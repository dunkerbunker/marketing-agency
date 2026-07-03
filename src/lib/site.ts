const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kulaa.studio";

export const siteUrl = configuredSiteUrl.replace(/\/+$/, "");

export const siteConfig = {
  name: "kulaa.studio",
  title: "Maldives Marketing Agency for Bold Brands, Creators & Campaigns",
  description:
    "A premium Maldives marketing agency helping cafés, resorts, creators, fashion, beauty, events, tourism and lifestyle brands grow through branding, social media, content and campaigns.",
  url: siteUrl,
  locale: "en_MV",
  // TODO: Replace with a dedicated 1200×630 social image and confirm the logo URL.
  ogImage: "/images/maldives-resort-campaign.webp",
};
