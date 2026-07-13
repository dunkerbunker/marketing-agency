export interface Service {
  id: string;
  slug: string;
  title: string;
  img: string;
  imgAlt: string;
  description: string;
}

export interface PackageAddOn {
  title: string;
  label: string;
  description: string;
  includes: string[];
  price: string;
  note: string;
}

export interface Package {
  title: string;
  tagline: string;
  cadence?: string;
  description?: string;
  includes: string[];
  price?: string;
  priceSuffix?: string;
  priceFull?: string;
  priceColor: string;
  buttonText: string;
  buttonClasses: string;
  cardClasses: string;
  bulletColor: string;
  ribbonText: string;
  ribbonClasses: string;
  titleColor?: string;
  note?: string;
  addOn?: PackageAddOn;
  featured?: boolean;
}

export interface PortfolioItemType {
  slug: string;
  img: string;
  title: string;
  alt: string;
  classes: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  stagger: string;
}

export interface ProcessStep {
  num: string;
  title: string;
}

export interface NavLink {
  label: string;
  href: string;
  colorClass: string;
}
