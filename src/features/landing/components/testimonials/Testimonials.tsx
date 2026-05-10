import Image from 'next/image'
import { images } from '../../constants/images'
import { Card } from '~/components/ui/card'

const Testimonials = () => {
  return (
    <section className="space-y-12 bg-white py-[96px]">
      <div className="mx-auto max-w-xl space-y-4 px-5 text-center">
        <Card
          variant="neutral"
          className="inline-block rounded-lg px-4 py-1.5 text-sm font-medium text-neutral-900"
        >
          Testimonials
        </Card>
        <h1 className="text-4xl font-semibold text-[#2b2b2b]">
          Trusted by over 12,000+ teams worldwide
        </h1>
        <p className="text-muted-foreground">
          Loved by website security teams. Doubt us? Here’s what our amazing
          users say.
        </p>
      </div>
      <Image
        src={images.testimonialsImage}
        alt=""
        width={1000}
        height={1000}
        className="pointer-events-none w-full"
      />
    </section>
  )
}

export default Testimonials
