import Features from '~/features/landing/components/feature-section/features'
import { Hero } from '~/features/landing/components/hero/Hero'
import HowItWorks from '~/features/landing/components/how-it-works/HowItWorks'
import { TrustTransparency } from '~/features/landing/components/trust-transparency/TrustTransparency'
import PricingSection from '~/features/landing/components/pricing-section'
import WhyChoose from '~/features/landing/components/why-choose/WhyChoose'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <WhyChoose />
      <PricingSection />
      <TrustTransparency />
    </>
  )
}
