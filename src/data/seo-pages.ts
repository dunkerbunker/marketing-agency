export interface SeoServicePage {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  image: string;
  imageAlt: string;
  idealFor: string[];
  deliverables: string[];
  approach: Array<{ title: string; description: string }>;
}

export interface IndustryPage {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  priorities: Array<{ title: string; description: string }>;
  services: string[];
}

export interface CaseStudyPage {
  slug: string;
  title: string;
  sector: string;
  description: string;
  image: string;
  imageAlt: string;
  challenge: string;
  direction: string;
  deliverables: string[];
  relatedServiceSlugs: string[];
}

export const seoServices: SeoServicePage[] = [
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing in Maldives",
    shortTitle: "Social Media Marketing",
    description:
      "Social media strategy, content planning and account management for Maldives resorts, cafés, creators and lifestyle brands.",
    eyebrow: "Always-on brand growth",
    intro:
      "A strong social presence needs more than a full calendar. We build a repeatable content system around your audience, commercial goals and brand personality, then manage the details that keep it moving.",
    image: "/images/male-cafe-campaign.webp",
    imageAlt:
      "Social media campaign photography for a local café in Malé, Maldives",
    idealFor: [
      "Local cafés and restaurants",
      "Resorts and tourism teams",
      "Fashion, beauty and lifestyle brands",
      "Creators, events and growing businesses",
    ],
    deliverables: [
      "Channel and audience strategy",
      "Monthly content planning",
      "Copywriting and publishing",
      "Community management",
      "Campaign concepts",
      "Performance reporting and iteration",
    ],
    approach: [
      {
        title: "Find the content gap",
        description:
          "We review the market, your existing channels and the audience behaviour that matters to identify a useful position.",
      },
      {
        title: "Build the system",
        description:
          "Content pillars, visual direction, formats and publishing rhythms are shaped into a plan your brand can sustain.",
      },
      {
        title: "Learn and sharpen",
        description:
          "Reporting connects creative decisions to reach, engagement, enquiries and the next round of content.",
      },
    ],
  },
  {
    slug: "branding-creative-direction",
    title: "Branding & Creative Direction in Maldives",
    shortTitle: "Branding & Creative Direction",
    description:
      "Brand strategy, visual identity and creative direction for distinctive Maldives businesses, launches and campaigns.",
    eyebrow: "Make the brand unmistakable",
    intro:
      "We turn the useful truth at the centre of a business into a clear position, visual language and voice. The result is a brand system that can stay recognisable from a menu to a launch film.",
    image: "/images/male-creative-studio.webp",
    imageAlt: "Brand identity concepts in a Malé creative studio",
    idealFor: [
      "New business launches",
      "Brands ready for a clearer position",
      "Resorts refreshing their guest-facing identity",
      "Campaigns that need one creative world",
    ],
    deliverables: [
      "Positioning and audience definition",
      "Naming and messaging direction",
      "Logo and visual identity systems",
      "Colour and typography",
      "Art direction",
      "Practical brand guidelines",
    ],
    approach: [
      {
        title: "Define the angle",
        description:
          "We clarify who the brand is for, what it should be known for and the idea that can hold the whole identity together.",
      },
      {
        title: "Create the visual language",
        description:
          "Typography, colour, imagery and layout become a flexible system rather than a collection of disconnected assets.",
      },
      {
        title: "Make it usable",
        description:
          "Guidelines and real applications help internal teams and partners keep the brand coherent after launch.",
      },
    ],
  },
  {
    slug: "content-creation-short-form-video",
    title: "Content Creation & Short-Form Video in Maldives",
    shortTitle: "Content & Short-Form Video",
    description:
      "Photography, Reels and TikTok content designed for Maldives brands, campaigns and modern social platforms.",
    eyebrow: "Made to earn attention",
    intro:
      "We plan and produce photography and short-form video with a job to do. Every shoot starts with a content idea, a platform context and a clear role in the wider campaign.",
    image: "/images/maldivian-content-creator.webp",
    imageAlt:
      "Maldivian content creator filming short-form video beside a dhoni",
    idealFor: [
      "Monthly social content",
      "Product and menu launches",
      "Resort experiences",
      "Events, fashion and creator campaigns",
    ],
    deliverables: [
      "Content pillars and shoot concepts",
      "Shot lists and production planning",
      "Campaign photography",
      "Reels and TikTok videos",
      "Platform-ready edits",
      "Caption and rollout guidance",
    ],
    approach: [
      {
        title: "Plan for the platform",
        description:
          "Hooks, pace, framing and deliverable ratios are considered before the camera comes out.",
      },
      {
        title: "Capture a useful library",
        description:
          "We design shoots to produce a coherent campaign and enough flexible material for ongoing publishing.",
      },
      {
        title: "Edit for momentum",
        description:
          "The final set balances fast social cuts with evergreen brand assets that continue to work beyond one post.",
      },
    ],
  },
  {
    slug: "campaign-strategy",
    title: "Creative Campaign Strategy in Maldives",
    shortTitle: "Campaign Strategy",
    description:
      "Campaign concepts, rollout planning and creative direction for Maldives launches, events, resorts and lifestyle brands.",
    eyebrow: "One idea, carried all the way",
    intro:
      "A campaign should feel connected from the first teaser to the final conversion point. We shape the central idea, channel roles and creative system so every part builds the same story.",
    image: "/images/maldives-fashion-shoot.webp",
    imageAlt: "Creative direction on a Maldives fashion campaign shoot",
    idealFor: [
      "Brand and product launches",
      "Resort offers and seasonal campaigns",
      "Events and ticket releases",
      "Fashion, beauty and hospitality promotions",
    ],
    deliverables: [
      "Campaign positioning",
      "Central creative concept",
      "Messaging hierarchy",
      "Channel and rollout plan",
      "Content and art direction",
      "Measurement framework",
    ],
    approach: [
      {
        title: "Choose the behaviour",
        description:
          "We define what the audience should notice, feel and do before deciding what the campaign needs to make.",
      },
      {
        title: "Build the idea",
        description:
          "A strong central concept gives every message, asset and channel a shared creative logic.",
      },
      {
        title: "Plan the release",
        description:
          "Tease, launch and sustain phases are mapped so attention has somewhere useful to go.",
      },
    ],
  },
  {
    slug: "website-landing-pages",
    title: "Website & Landing Page Design in Maldives",
    shortTitle: "Websites & Landing Pages",
    description:
      "Fast, distinctive websites and campaign landing pages for Maldives brands that need clearer journeys and stronger enquiries.",
    eyebrow: "Digital experiences with a point of view",
    intro:
      "We design websites around the decision a visitor needs to make. Clear structure, persuasive content and expressive visual direction work together without sacrificing speed or usability.",
    image: "/images/male-web-campaign.webp",
    imageAlt: "Website campaign creative developed for a modern Malé brand",
    idealFor: [
      "New brand websites",
      "Campaign and launch pages",
      "Hospitality and tourism enquiries",
      "Service businesses improving conversion",
    ],
    deliverables: [
      "Content and information architecture",
      "Conversion-focused wireframes",
      "Responsive visual design",
      "Copy direction",
      "Performance-minded development",
      "Analytics and enquiry journeys",
    ],
    approach: [
      {
        title: "Map the decision",
        description:
          "We organise the page around visitor questions, proof and the shortest useful path to action.",
      },
      {
        title: "Design the experience",
        description:
          "Brand expression, accessibility and responsive behaviour are resolved as one system.",
      },
      {
        title: "Launch and improve",
        description:
          "Technical checks, measurement and practical content management support the site after release.",
      },
    ],
  },
];

export const industryPages: IndustryPage[] = [
  {
    slug: "resort-tourism-marketing",
    title: "Resort & Tourism Marketing in Maldives",
    shortTitle: "Resorts & Tourism",
    description:
      "Brand, social and campaign marketing for Maldives resorts and tourism businesses seeking a more distinctive guest story.",
    intro:
      "Paradise is the category baseline, not a position. We help resorts and tourism teams define the detail, mood and experience that make one island worth choosing over another.",
    image: "/images/maldives-resort-campaign.webp",
    imageAlt:
      "Tropical island resort campaign visual for Maldives tourism marketing",
    priorities: [
      {
        title: "A specific guest promise",
        description:
          "We translate the real experience into a focused story instead of relying on interchangeable destination language.",
      },
      {
        title: "Content with continuity",
        description:
          "Campaign, social and on-property moments share one creative direction across the guest journey.",
      },
      {
        title: "Useful demand signals",
        description:
          "Creative reporting is connected to discovery, qualified traffic, enquiries and booking intent.",
      },
    ],
    services: [
      "Resort positioning and campaign concepts",
      "Social media strategy and management",
      "Experience-led photography and video",
      "Influencer and creator direction",
      "Offer and landing-page campaigns",
      "Launch and seasonal rollout planning",
    ],
  },
  {
    slug: "cafe-lifestyle-marketing",
    title: "Café & Lifestyle Brand Marketing in Maldives",
    shortTitle: "Cafés & Lifestyle Brands",
    description:
      "Branding, social content and launch campaigns for Malé cafés, restaurants, beauty, fashion and lifestyle businesses.",
    intro:
      "Local brands win when people can recognise their point of view before they read the name. We build practical brand and content systems that turn everyday visits, products and releases into reasons to pay attention.",
    image: "/images/male-cafe-campaign.webp",
    imageAlt:
      "Lifestyle campaign photography for a local café in Malé, Maldives",
    priorities: [
      {
        title: "A recognisable visual world",
        description:
          "Identity and content direction make the brand easier to remember across feeds, menus, packaging and physical spaces.",
      },
      {
        title: "Consistent local relevance",
        description:
          "Planning balances platform culture, Maldivian context and the offers the business needs to move.",
      },
      {
        title: "Launches with momentum",
        description:
          "Teasers, creator content and release-day assets work as a sequence rather than isolated posts.",
      },
    ],
    services: [
      "Brand identity and refreshes",
      "Monthly social media management",
      "Food, product and lifestyle photography",
      "Reels and short-form video",
      "Opening, menu and collection launches",
      "Event and creator campaigns",
    ],
  },
];

export const caseStudies: CaseStudyPage[] = [
  {
    slug: "male-cafe-launch",
    title: "Malé Café Launch",
    sector: "Hospitality & social media",
    description:
      "A warm, energetic launch direction designed to turn a new Malé café into a recognisable social destination.",
    image: "/images/male-cafe-campaign.webp",
    imageAlt:
      "Lifestyle photography from a social media launch campaign for a Malé café",
    challenge:
      "A new café needs to communicate more than its menu. The creative direction had to introduce the atmosphere, make the experience feel social and create enough variety for a sustained opening rollout.",
    direction:
      "The visual system centres candid movement, tactile food detail and a lively local rhythm. Hero images, short-form cuts and modular social assets are designed to work together from teaser week through the opening period.",
    deliverables: [
      "Launch concept",
      "Social rollout plan",
      "Lifestyle photography",
      "Short-form video direction",
      "Opening-week content system",
    ],
    relatedServiceSlugs: ["social-media-marketing", "campaign-strategy"],
  },
  {
    slug: "island-resort-escape",
    title: "Island Resort Escape",
    sector: "Resort & tourism",
    description:
      "An experience-led resort campaign direction built around scale, stillness and a more distinctive sense of escape.",
    image: "/images/maldives-resort-campaign.webp",
    imageAlt:
      "Tropical island resort campaign visual for Maldives tourism marketing",
    challenge:
      "Resort imagery can quickly become interchangeable. This campaign needed a clearer emotional point of view while preserving the natural appeal people expect from a Maldives escape.",
    direction:
      "Wide aerial perspective is balanced with intimate experience details, giving the campaign both aspiration and human texture. The system is designed for social storytelling, offer pages and campaign-led digital placements.",
    deliverables: [
      "Campaign positioning",
      "Creative direction",
      "Experience shot list",
      "Social campaign system",
      "Landing-page direction",
    ],
    relatedServiceSlugs: ["campaign-strategy", "content-creation-short-form-video"],
  },
  {
    slug: "island-skincare",
    title: "Island Skincare",
    sector: "Beauty & product",
    description:
      "A tactile beauty campaign concept pairing clean product detail with an unmistakably island-made atmosphere.",
    image: "/images/island-skincare-campaign.webp",
    imageAlt:
      "Beauty product content for an island-inspired skincare campaign",
    challenge:
      "The product needed to feel premium without losing its connection to place. The visual language also had to flex between product education, launch storytelling and everyday social content.",
    direction:
      "Natural texture, restrained colour and close product detail create a calm but distinctive world. The campaign system leaves room for ingredients, routines and creator-led demonstrations without losing consistency.",
    deliverables: [
      "Product campaign concept",
      "Visual identity direction",
      "Product photography",
      "Social content templates",
      "Launch messaging framework",
    ],
    relatedServiceSlugs: [
      "branding-creative-direction",
      "content-creation-short-form-video",
    ],
  },
  {
    slug: "maldives-fashion-story",
    title: "Maldives Fashion Story",
    sector: "Fashion & editorial",
    description:
      "An editorial fashion direction that uses the Maldives as a living setting rather than a decorative backdrop.",
    image: "/images/maldives-fashion-shoot.webp",
    imageAlt: "Editorial fashion campaign photographed in the Maldives",
    challenge:
      "The campaign needed to feel contemporary and locally grounded while giving the collection enough visual range for editorial, social and launch use.",
    direction:
      "Strong silhouettes, directional movement and island textures create a graphic visual rhythm. The system supports a hero story as well as short-form edits and individual product moments.",
    deliverables: [
      "Editorial concept",
      "Art direction",
      "Campaign photography",
      "Short-form edit plan",
      "Launch asset system",
    ],
    relatedServiceSlugs: [
      "campaign-strategy",
      "content-creation-short-form-video",
    ],
  },
  {
    slug: "modern-island-dining",
    title: "Modern Island Dining",
    sector: "Food & hospitality",
    description:
      "A refined dining campaign direction balancing culinary detail, atmosphere and a modern Maldivian point of view.",
    image: "/images/maldivian-fine-dining.webp",
    imageAlt:
      "Creative campaign photography for a Maldivian fine-dining experience",
    challenge:
      "Fine-dining content has to communicate craft and occasion without becoming distant. The work needed a coherent balance of food detail, service and setting.",
    direction:
      "Controlled light, close texture and quiet human moments create an elevated but inviting visual language. Assets are planned for menu storytelling, reservations and ongoing social publishing.",
    deliverables: [
      "Dining campaign direction",
      "Food and atmosphere photography",
      "Social content plan",
      "Reservation messaging",
      "Digital launch assets",
    ],
    relatedServiceSlugs: ["content-creation-short-form-video", "campaign-strategy"],
  },
  {
    slug: "digital-brand-launch",
    title: "Digital Brand Launch",
    sector: "Website & brand launch",
    description:
      "A connected digital launch system bringing brand identity, campaign content and a focused web journey together.",
    image: "/images/male-web-campaign.webp",
    imageAlt:
      "Website and digital launch campaign for a modern Malé brand",
    challenge:
      "The launch needed one consistent story across social touchpoints and the website, with a clear route from first impression to enquiry.",
    direction:
      "A modular visual system carries the same hierarchy, colour and message through launch assets and the responsive site. The web journey is organised around clarity, proof and a direct next step.",
    deliverables: [
      "Digital launch strategy",
      "Responsive website direction",
      "Campaign visual system",
      "Launch content",
      "Enquiry journey",
    ],
    relatedServiceSlugs: [
      "website-landing-pages",
      "branding-creative-direction",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return seoServices.find((service) => service.slug === slug);
}

export function getIndustryBySlug(slug: string) {
  return industryPages.find((industry) => industry.slug === slug);
}

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
