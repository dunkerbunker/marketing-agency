export const brand = {
  name: "kulaa.studio",
  logoText: "Kulaa",
  logoDot: ".",
  logoSuffix: "Studio",
  email: "hello@kulaa.studio",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE?.trim() ?? "",
  location: "Malé, Maldives",
  description:
    "A bold creative and digital marketing agency in Maldives for branding, social media, content and campaigns that perform.",
  socials: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL?.trim() ?? "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL?.trim() ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() ?? "",
    googleBusiness:
      process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL?.trim() ?? "",
  },
};

export const verifiedSocialProfiles = Object.values(brand.socials).filter(
  (url): url is string => Boolean(url),
);
