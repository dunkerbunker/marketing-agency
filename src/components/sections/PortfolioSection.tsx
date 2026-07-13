import { portfolio } from '../../data/portfolio';
import PortfolioCard from '../ui/PortfolioCard';

export default function PortfolioSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="py-32 px-6 bg-offwhite text-ink relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2
            id="work-title"
            className="text-5xl md:text-7xl font-display font-black uppercase leading-none"
          >
            Campaign work built <br /> to get <span className="text-sunset">noticed</span>
          </h2>
          <a href="/work" className="font-display font-bold uppercase tracking-widest text-sm hover:text-sunset transition-colors hover-trigger pb-2 border-b-2 border-ink hover:border-sunset">
            View all project stories
          </a>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolio.map((item, i) => (
            <PortfolioCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
