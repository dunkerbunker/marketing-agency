import { testimonials } from '../../data/testimonials';
import TestimonialCard from '../ui/TestimonialCard';

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative py-24 md:py-32 flex items-center justify-center bg-gradient-to-br from-electric to-sunset overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-sunset"></div>
            <span className="font-display font-bold text-sunset tracking-[0.15em] uppercase text-sm">
              Word On The Island
            </span>
          </div>
          <h2
            id="testimonials-title"
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-black uppercase tracking-tighter text-offwhite leading-none"
          >
            Results brands talk about.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-start pb-12">
          {testimonials.map((item, i) => (
            <TestimonialCard key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
