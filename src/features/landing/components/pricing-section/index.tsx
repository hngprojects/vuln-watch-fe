import PricingHeader from './PricingHeader'
import PricingCard from './PricingCard'
import { plans } from './constants'

const PricingSection = () => {
  return (
    <section className="bg-background mx-auto w-full px-4 py-20 md:px-20">
      <div className="mx-auto w-full max-w-[1280px]">
        <PricingHeader />

        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3 md:px-10">
          {plans.map((plan, index) => (
            <PricingCard
              key={`${plan.name}-${index}`}
              plan={plan}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
