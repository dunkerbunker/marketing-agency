import { packages } from "../../data/packages";
import PackagePoster from "../ui/PackagePoster";

export default function PackagesSection() {
  return (
    <section
      id="packages"
      aria-labelledby="packages-title"
      className="relative overflow-hidden bg-electric px-4 py-24 md:px-8 md:py-32"
    >
      <div
        className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full border border-offwhite/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-40 h-72 w-72 rounded-full border border-aqua/30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        <header className="mb-14 max-w-4xl text-offwhite md:mb-20">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-aqua">
            kulaa.studio packages
          </p>
          <h2
            id="packages-title"
            className="mb-6 font-display text-5xl font-black uppercase leading-[0.92] tracking-tighter sm:text-6xl md:text-8xl"
          >
            Marketing packages for
            <br />
            <span className="text-aqua">growing brands.</span>
          </h2>
          <p className="max-w-3xl text-base font-medium leading-7 text-offwhite/80 md:text-lg">
            From social media marketing and monthly content to full creative
            partnership, choose a focused plan or shape a custom package around
            your brand, campaign and growth goals.
          </p>
        </header>

        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {packages.map((pkg, index) => (
            <PackagePoster
              key={pkg.title}
              pkg={pkg}
              index={index}
              className={
                packages.length % 2 === 1 && index === packages.length - 1
                  ? "lg:col-span-2"
                  : undefined
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
