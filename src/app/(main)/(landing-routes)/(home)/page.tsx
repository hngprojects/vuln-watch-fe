import { Hero } from '~/features/landing/components/hero/Hero'
import HowItWorks from '~/features/landing/components/how-it-works/HowItWorks'
import { TrustTransparency } from '~/features/landing/components/trustTransparency/TrustTransparency'
import PricingSection from '~/features/landing/components/pricing-section'
import WhyChoose from '~/features/landing/components/reason/WhyChoose'

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyChoose />
      <PricingSection />
      <TrustTransparency />
    </>
  )
}
