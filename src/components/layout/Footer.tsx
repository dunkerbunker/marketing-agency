import { brand } from '../../data/brand';

export default function Footer() {
  return (
    <footer className="bg-ink text-offwhite border-t border-offwhite/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <h2 className="text-4xl font-display font-black uppercase tracking-tighter mb-4">
            {brand.logoText}<span className="text-sunset">{brand.logoDot}</span>{brand.logoSuffix}
          </h2>
          <p className="text-offwhite/60 font-medium max-w-sm">
            {brand.description}
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6 text-offwhite/40">Socials</h4>
          <ul className="space-y-3 font-display uppercase font-bold text-sm">
            <li><a href={brand.socials.instagram} className="hover:text-sunset transition-colors hover-trigger">Instagram</a></li>
            <li><a href={brand.socials.tiktok} className="hover:text-aqua transition-colors hover-trigger">TikTok</a></li>
            <li><a href={brand.socials.linkedin} className="hover:text-electric transition-colors hover-trigger">LinkedIn</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6 text-offwhite/40">Contact</h4>
          <ul className="space-y-3 font-display uppercase font-bold text-sm">
            <li><a href={`mailto:${brand.email}`} className="hover:text-sunset transition-colors hover-trigger">{brand.email}</a></li>
            <li><a href={`tel:${brand.phone.replace(/\s+/g, '')}`} className="hover:text-aqua transition-colors hover-trigger">{brand.phone}</a></li>
            <li className="text-offwhite/60">{brand.location}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-offwhite/10 text-xs font-display uppercase tracking-widest text-offwhite/40">
        <p>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Made in Maldives</p>
      </div>
    </footer>
  );
}
