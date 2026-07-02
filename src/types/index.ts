export interface Service {
  id: string;
  title: string;
  img: string;
  description: string;
}

export interface Package {
  title: string;
  target: string;
  includes: string[];
  pricePrefix?: string;
  priceUnderline?: string;
  priceSuffix?: string;
  priceFull?: string;
  priceColor: string;
  buttonText: string;
  buttonClasses: string;
  cardClasses: string;
  wrapperClasses?: string;
  bulletColor: string;
  ribbonText: string;
  ribbonClasses: string;
  titleColor?: string;
}

export interface PortfolioItemType {
  img: string;
  title: string;
  classes: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
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
