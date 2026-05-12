'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useAuthStore } from '~/store/auth.store'

export default function DashboardPage() {
  const { email, isAuthenticated, logout } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/login')
    }
  }, [isAuthenticated, router])

  const handleLogout = () => {
    logout()
    router.replace('/login')
  }

  if (!isAuthenticated) return null

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAFAFA] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[700px] rounded-[12px] border border-[#2B2B2B4D] bg-white p-8 shadow-sm sm:p-12 md:p-16">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4">
            <Link href="/">
              <Image
                src="/images/logo-auth.png"
                alt="VulnWatch AI Logo"
                width={240}
                height={69}
                className="h-auto w-[240px] object-contain"
                priority
              />
            </Link>
          </div>
          <p className="font-geist text-center text-[15px] font-normal text-[#666666] sm:text-[16px]">
            Welcome back,{' '}
            <span className="font-medium text-[#2B2B2B]">
              {email ?? 'User'}
            </span>
          </p>
        </div>

        {/* Placeholder sections */}
        <div className="mb-8 flex flex-col gap-3">
          {[
            'Vulnerability Scanner',
            'Threat Intelligence',
            'Reports & Analytics',
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-[8px] border border-[#2B2B2B4D] bg-[#FAFAFA] px-4 py-4"
            >
              <div className="h-2 w-2 rounded-full bg-[#C68A00]" />
              <span className="font-geist text-[14px] font-normal text-[#2B2B2B]">
                {item}
              </span>
              <span className="font-geist ml-auto rounded-full border border-[#d4d4d4] bg-white px-3 py-0.5 text-[12px] text-[#666666]">
                Coming soon
              </span>
            </div>
          ))}
        </div>

        {/* Logout button */}
        <button
          id="logout-button"
          onClick={handleLogout}
          className="font-geist flex h-[44px] w-full items-center justify-center gap-2 rounded-[8px] border border-[#ef444466] bg-[#ef44440d] px-6 text-[16px] font-medium text-[#ef4444] transition-opacity hover:opacity-80 active:scale-[0.99]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Sign Out
        </button>
      </div>
    </div>
  )
}
