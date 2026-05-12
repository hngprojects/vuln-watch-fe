import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  SendHorizontal,
} from 'lucide-react'

const contactItems = [
  {
    label: 'Phone Number',
    value: '+234 813 912 6624',
    icon: Phone,
  },
  {
    label: 'Email Address',
    value: 'vulnwatch@demo.co',
    icon: Mail,
  },
  {
    label: 'Opening Hour',
    value: 'Mon - Fri: 9:00 AM - 5:00 PM',
    icon: Clock3,
  },
  {
    label: 'Our Location',
    value: '12/14 Broad St, Lagos, Nigeria',
    icon: MapPin,
  },
]

export function Contact() {
  return (
    <main className="bg-white">
      <section className="flex min-h-[196px] items-center bg-gradient-to-b from-white via-[#F5FFF0] to-[#E4FFD8] px-4 pt-5 text-center">
        <div className="mx-auto max-w-[760px]">
          <h1 className="text-header font-geist text-[40px] leading-[48px] font-bold md:text-[42px]">
            Contact us
          </h1>
          <p className="text-body mx-auto mt-4 max-w-[690px] text-[11px] leading-[18px]">
            Do you have any question or need help with your domain? Our team is
            ready to assist you with professional solutions and reliable
            support. Feel free to contact us anytime and we will respond as
            quick as possible.
          </p>
        </div>
      </section>

      <section className="px-4 pt-[52px] pb-[50px]">
        <div className="mx-auto grid max-w-[816px] gap-4 lg:grid-cols-[348px_1fr]">
          <article className="min-h-[438px] rounded-md border border-[#D9D9D9] bg-white p-5">
            <h2 className="text-header font-geist text-[24px] leading-[30px] font-bold">
              Contact Information
            </h2>
            <p className="text-body mt-4 max-w-[290px] text-[11px] leading-[17px]">
              Feel free to contact us anytime and we will respond as quick as
              possible.
            </p>

            <div className="mt-[68px] divide-y divide-[#D9D9D9]">
              {contactItems.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex gap-3 py-4 first:pt-0">
                  <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center text-primary">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="text-header text-[12px] leading-4 font-semibold">
                      {label}
                    </h3>
                    <p className="text-body mt-0.5 text-[10px] leading-4">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="min-h-[438px] rounded-md border border-[#CFEAC4] bg-[#EEFFE8] p-5">
            <h2 className="text-header font-geist text-[24px] leading-[30px] font-bold">
              Get In Touch
            </h2>
            <p className="text-body mt-4 max-w-[390px] text-[11px] leading-[17px]">
              We would love to hear about your project and help secure your
              website. Fill out the contact form and our team will get back to
              you soon with the best possible solution for your needs.
            </p>

            <form className="mt-8 space-y-4">
              <div className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
                <label className="sr-only" htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="h-8 rounded-sm border border-[#D6D6D6] bg-white px-3 text-[10px] text-primary outline-none transition-colors placeholder:text-[#7A7A7A] focus:border-primary"
                />

                <label className="sr-only" htmlFor="contact-email">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="h-8 rounded-sm border border-[#D6D6D6] bg-white px-3 text-[10px] text-primary outline-none transition-colors placeholder:text-[#7A7A7A] focus:border-primary"
                />

                <label className="sr-only" htmlFor="contact-phone">
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="h-8 rounded-sm border border-[#D6D6D6] bg-white px-3 text-[10px] text-primary outline-none transition-colors placeholder:text-[#7A7A7A] focus:border-primary"
                />

                <label className="sr-only" htmlFor="contact-service">
                  Service You are Interested
                </label>
                <select
                  id="contact-service"
                  name="service"
                  defaultValue=""
                  className="h-8 rounded-sm border border-[#D6D6D6] bg-white px-3 text-[10px] text-[#7A7A7A] outline-none transition-colors focus:border-primary"
                >
                  <option value="" disabled>
                    Service You are Interested
                  </option>
                  <option value="domain-monitoring">Domain Monitoring</option>
                  <option value="vulnerability-scan">
                    Vulnerability Scan
                  </option>
                  <option value="security-consulting">
                    Security Consulting
                  </option>
                </select>
              </div>

              <label className="sr-only" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Message"
                className="min-h-[130px] w-full resize-none rounded-sm border border-[#D6D6D6] bg-white px-3 py-3 text-[10px] text-primary outline-none transition-colors placeholder:text-[#7A7A7A] focus:border-primary"
              />

              <button
                type="submit"
                className="inline-flex h-8 items-center gap-2 rounded-sm bg-primary px-4 text-[10px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Send Message
                <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-white text-primary">
                  <SendHorizontal className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
              </button>
            </form>
          </article>
        </div>
      </section>
    </main>
  )
}
