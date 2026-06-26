import { features } from './landingData'
import FeatureIcon from './FeatureIcon'
import SectionHeading from './SectionHeading'

export default function FeaturesSection() {
  return (
    <section id="features" className="homi-section scroll-mt-24 bg-white">
      <div className="homi-container">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to feel at home, faster"
          description="Homi combines the warmth of shared identity with the polish of a modern relocation platform — designed for people starting fresh in new cities."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article key={feature.title} className="homi-card-muted homi-card-interactive group p-7">
              <FeatureIcon name={feature.icon} />
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
