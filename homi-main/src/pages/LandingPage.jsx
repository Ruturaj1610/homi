import LandingNavbar from '../components/landing/LandingNavbar'
import HeroSection from '../components/landing/HeroSection'
import FeaturesSection from '../components/landing/FeaturesSection'
import HowItWorksSection from '../components/landing/HowItWorksSection'
import TestimonialsSection from '../components/landing/TestimonialsSection'
import FaqSection from '../components/landing/FaqSection'
import LandingFooter from '../components/landing/LandingFooter'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface text-slate-900">
      <LandingNavbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <LandingFooter />
    </div>
  )
}
