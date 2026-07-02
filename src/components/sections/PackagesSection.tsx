import { packages } from '../../data/packages';
import PackagePoster from '../ui/PackagePoster';

export default function PackagesSection() {
  return (
    <section id="packages" className="py-24 px-4 md:px-8 bg-electric relative overflow-hidden flex items-center justify-center min-h-screen">
      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <PackagePoster key={pkg.title} pkg={pkg} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
