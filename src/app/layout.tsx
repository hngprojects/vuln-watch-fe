import type { Metadata } from 'next'
import { Geist, Inter } from 'next/font/google'
import './globals.css'
import { cn } from '~/utils'
import { Providers } from './provider'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'VulnWatch AI — Intelligent Vulnerability Detection',
  description:
    'VulnWatch AI helps security teams detect, track, and remediate vulnerabilities faster with AI-powered scanning and real-time alerts.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geist.variable,
          inter.variable,
          geist.className,
          'max-w-[1920px] antialiased'
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
