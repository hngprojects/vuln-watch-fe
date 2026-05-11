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
<<<<<<< HEAD
    <section className="overflow-x-hidden">
      <div className="bg-background md:bg-[#F1FCEA] md:py-14">
        <div className="mx-auto max-w-[1440px] px-5 md:px-20">
          <div className="mx-auto max-w-2xl  bg-background px-8 py-10 text-center md:border-0 md:bg-transparent md:px-0 md:py-0">
            <span className="mb-6 inline-block rounded-lg bg-cards px-5 py-2 text-sm font-bold text-header">
              How It Works
            </span>
            <h2 className="mt-4 max-w-154.25 text-3xl font-semibold text-header sm:text-4xl md:text-[48px] ">
              Three (3) steps from Curious to Confident
            </h2>
            <p className="mt-4 max-w-138.75 text-lg font-normal text-body md:text-xl ">
              No installs, no agents, no access to your hosting account. Just a
              domain and a minute of your time.
            </p>
          </div>
=======
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
>>>>>>> 07996d5dd738a3c34004cb95c316412c6ce10ae9
        </div>
      </div>

 
      <div className="bg-background pb-0 md:bg-[#F1FCEA]">
        <div className="mx-auto max-w-[1440px] px-3 md:px-0">
          <div className="  bg-[#F1FCEA] pt-10 pb-0 rounded-3xl md:border-0 ">
            <div className="mx-auto max-w-275 md:px-20">
              <div className="flex flex-col gap-6 md:gap-0">
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={cn(
                      'flex justify-center',
                      index === 1 && 'md:-translate-x-39',
                    )}
                  >
                    <div className="w-full md:hidden">
                      <div className="relative z-10 ml-14 h-48 overflow-hidden rounded-tl-3xl border-t-[5px] border-cards bg-cards">
                        <Image
                          src={step.image}
                          alt={step.alt}
                          fill
                          className="object-cover object-top"
                          sizes="100vw"
                        />
                      </div>
                      <div className="relative z-20 -mt-6  flex flex-col gap-3 rounded-tl-[20px] bg-secondary px-6 pb-8 pt-8">
                        <h3 className="text-lg font-bold text-header">{step.title}</h3>
                        <p className="text-sm leading-relaxed text-header">{step.description}</p>
                        <span className="mt-2 text-4xl font-bold leading-none text-header">{step.id}</span>
                      </div>
                    </div>

                    <div className="hidden items-end md:flex">
                      {step.imageLeft ? (
                        <>
                          <div className="relative z-0 -mr-3.75 h-82.5 w-110 shrink-0 self-end overflow-hidden rounded-tl-3xl border-t-[5px] border-l-[5px] border-cards bg-cards">
                            <Image
                              src={step.image}
                              alt={step.alt}
                              fill
                              className="object-cover object-top"
                              sizes="440px"
                            />
                          </div>
                          <div className="relative z-10 flex h-92.5 w-145 shrink-0 flex-col justify-center gap-6 rounded-br-[40px] rounded-tr-[40px] bg-secondary p-12">
                            <div>
                              <h3 className="mb-2 text-2xl font-bold text-header">{step.title}</h3>
                              <p className="max-w-95 text-base leading-relaxed text-header">{step.description}</p>
                            </div>
                            <span className="block text-7xl font-bold leading-none text-header">{step.id}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="relative z-10 flex h-92.5 w-145 shrink-0 flex-col justify-center gap-6 rounded-bl-[40px] rounded-tl-[40px] bg-secondary p-12">
                            <div>
                              <h3 className="mb-2 text-2xl font-bold text-header">{step.title}</h3>
                              <p className="max-w-95 text-base leading-relaxed text-header">{step.description}</p>
                            </div>
                            <span className="block text-7xl font-bold leading-none text-header">{step.id}</span>
                          </div>
                          <div className="relative z-0 -ml-3.75 h-82.5 w-110 shrink-0 self-end overflow-hidden rounded-tr-3xl border-t-[5px] border-r-[5px] border-cards bg-cards">
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
          </div>
        </div>
      </div>

    </section>
  )
}

export default HowItWorks