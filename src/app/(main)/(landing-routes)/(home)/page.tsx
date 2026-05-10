import FAQs from '~/features/landing/components/faqs/Faqs'
import { Hero } from '~/features/landing/components/hero/Hero'
import Testimonials from '~/features/landing/components/testimonials/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <FAQs />
    </>
  )
}
