import { steps } from './landingData'
import SectionHeading from './SectionHeading'

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="homi-section scroll-mt-24 bg-surface">
      <div className="homi-container">
        <SectionHeading
          eyebrow="How It Works"
          title="From new city to familiar circle in four steps"
          description="A simple, intentional flow that helps you discover the right people before you arrive — not after the move gets overwhelming."
        />

        <div className="relative mt-16">
          <div className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-homi-300 via-slate-200 to-transparent lg:block" />

          <div className="grid gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="group homi-card homi-card-interactive lg:grid lg:grid-cols-[120px_1fr] lg:items-start lg:gap-8"
              >
                <div className="flex items-center gap-4 lg:block">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white shadow-lg shadow-slate-900/15 transition duration-300 group-hover:scale-105">
                    {step.step}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 lg:mt-4 lg:block">
                    Step {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                  <p className="homi-subtitle mt-3 max-w-3xl">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
