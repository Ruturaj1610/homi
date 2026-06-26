import { testimonials } from './landingData'
import SectionHeading from './SectionHeading'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="homi-section scroll-mt-24 bg-slate-900 text-white">
      <div className="homi-container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by people making bold moves"
          description="Students and young professionals use Homi to turn unfamiliar cities into places where someone already feels like home."
          className="[&_h2]:text-white [&_p]:text-slate-300 [&_p:first-of-type]:text-homi-200"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col rounded-[var(--radius-homi-card)] border border-white/10 bg-white/5 p-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.45)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <blockquote className="flex-1 text-base leading-relaxed text-slate-200">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-homi-500/20 text-sm font-semibold text-homi-100 ring-1 ring-homi-400/30">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
