import Image from 'next/image'
import { cn } from '~/utils'

const steps = [
  {
    id: '01',
    title: 'Add Your Domain',
    description:
      'Generate daily/weekly sales and profit reports. Export to CSV/PDF with one click',
    image: '/images/dashboard.jpg',
    alt: 'VulnWatch Dashboard',
    imageLeft: true,
  },
  {
    id: '02',
    title: 'Scan Your Website',
    description:
      'Full access to settings, reports, and tax configurations between Admin and Users',
    image: '/images/scan.jpg',
    alt: 'Scan Your Website',
    imageLeft: false,
  },
  {
    id: '03',
    title: 'Get Report',
    description:
      'Expiring SSL certificate, misconfigured DNS and exposed admin pages can break your site & lead to loss of customer trust overnight.',
    image: '/images/report.jpg',
    alt: 'SSL Expiry Email Report',
    imageLeft: true,
  },
]

const HowItWorks = () => {
  return (
    <section className="overflow-x-hidden bg-[#F1FCEA] pt-16 md:pt-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-20">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="border-header bg-cards text-header mb-8 inline-block rounded-lg border px-4 py-1 text-sm font-medium">
            How It Works
          </span>
          <h2 className="text-header max-w-[617px] text-3xl leading-tight font-bold tracking-[-0.02em] sm:text-4xl md:text-[44px]">
            Three (3) steps from Curious to Confident
          </h2>
          <p className="text-body mt-4 max-w-[555px] text-lg font-normal">
            No installs, no agents, no access to your hosting account. Just a
            domain and a minute of your time.
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto flex max-w-[1100px] flex-col">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={cn(
                'flex justify-center',
                index === 1 && 'md:-translate-x-35'
              )}
            >
              {/* Mobile */}
              <div className="flex w-full flex-col md:hidden">
                <div className="bg-cards relative h-[220px] overflow-hidden rounded-t-[24px]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    className="object-cover object-top"
                    sizes="100vw"
                  />
                </div>
                <div className="bg-secondary flex flex-col gap-3 rounded-b-3xl px-6 py-5">
                  <h3 className="text-header text-xl font-bold">
                    {step.title}
                  </h3>
                  <p className="text-header text-sm leading-relaxed">
                    {step.description}
                  </p>
                  <span className="text-header mt-1 block text-5xl leading-none font-bold">
                    {step.id}
                  </span>
                </div>
              </div>

              {/* Desktop */}
              <div className="hidden items-end md:flex">
                {step.imageLeft ? (
                  <>
                    <div className="border-cards bg-cards relative z-10 mr-[-15px] h-[330px] w-[440px] shrink-0 self-end overflow-hidden rounded-[24px] border-[5px] shadow-lg">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        className="object-cover object-top"
                        sizes="440px"
                      />
                    </div>
                    <div className="bg-secondary relative z-20 flex h-[370px] w-[580px] shrink-0 flex-col justify-center gap-6 rounded-tr-[40px] rounded-br-[40px] p-12">
                      <div>
                        <h3 className="text-header mb-2 text-2xl font-bold">
                          {step.title}
                        </h3>
                        <p className="text-header max-w-[380px] text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <span className="text-header block text-7xl leading-none font-bold">
                        {step.id}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-secondary relative z-20 flex h-[370px] w-[580px] shrink-0 flex-col justify-center gap-6 rounded-tl-[40px] rounded-bl-[40px] p-12">
                      <div>
                        <h3 className="text-header mb-2 text-2xl font-bold">
                          {step.title}
                        </h3>
                        <p className="text-header max-w-[380px] text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <span className="text-header block text-7xl leading-none font-bold">
                        {step.id}
                      </span>
                    </div>
                    <div className="border-cards bg-cards relative z-10 ml-[-15px] h-[330px] w-[440px] shrink-0 self-end overflow-hidden rounded-[24px] border-[5px] shadow-lg">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        className="object-cover object-top"
                        sizes="440px"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
