import { faqs } from "../../data/faqs";

export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-offwhite px-6 py-24 text-ink md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-14 max-w-4xl md:mb-20">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-electric">
            The useful bits
          </p>
          <h2
            id="faq-title"
            className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tighter sm:text-6xl md:text-8xl"
          >
            Frequently Asked
            <br />
            <span className="text-sunset">Questions.</span>
          </h2>
        </header>

        <div className="border-t-2 border-ink">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group border-b border-ink/25 py-2"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl font-black uppercase tracking-tight marker:content-none md:text-3xl">
                <span className="flex items-start gap-4 md:gap-8">
                  <span
                    className="pt-1 text-xs tracking-widest text-electric md:text-sm"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {faq.question}
                </span>
                <span
                  className="text-3xl text-sunset transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="max-w-3xl pb-7 pl-10 text-base font-semibold leading-7 text-ink/70 md:pl-16 md:text-lg">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

