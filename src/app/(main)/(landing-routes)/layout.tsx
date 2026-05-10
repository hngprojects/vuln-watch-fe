import { Header } from '~/features/landing/components/header/Header'
import { Footer } from '~/features/landing/components/footer/Footer'
import { TrustTransparency } from '~/features/landing/components/trustTransparency/TrustTransparency'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <TrustTransparency />
      <Footer />
    </div>
  )
}
