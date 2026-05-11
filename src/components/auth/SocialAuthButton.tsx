'use client'

import React, { useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { toast } from 'sonner'

interface SocialAuthButtonProps {
  text?: string
}

export function SocialAuthButton({
  text = 'Sign up with Google',
}: SocialAuthButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setIsLoading(true)
        console.log('Google Token Received:', tokenResponse)

        const response = await fetch('/api/social/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id_token: tokenResponse.access_token })
        })
        
        const data = await response.json()
        if (data.success) {
           toast.success('Google login successful!')
        } else {
           toast.error(data.message || 'Backend rejected token')
           console.error('Backend rejected token:', data)
        }
      } catch (error) {
        toast.error('Google login failed. Please try again.')
        console.error('Google login failed:', error)
      } finally {
        setIsLoading(false)
      }
    },
    onError: (error) => {
      toast.error('Google Login Failed')
      console.log('Google Login Failed:', error)
    },
  })

  return (
    <button
      type="button"
      onClick={() => login()}
      disabled={isLoading}
      className="flex h-[46px] w-full items-center justify-center gap-2 rounded-[8px] border border-[#2B2B2B80] bg-transparent px-6 py-3 transition-colors hover:bg-neutral-50 active:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </svg>
      <span className="font-geist text-[16px] leading-none font-normal tracking-[-0.01em] text-[#2D2D2D]">
        {isLoading ? 'Connecting...' : text}
      </span>
    </button>
  )
}
