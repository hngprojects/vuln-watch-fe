'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { loginSchema } from '~/schemas/auth.schema'
import type { LoginFormData } from '~/types/auth.types'

import { AuthCard } from './AuthCard'
import { AuthInput } from './AuthInput'
import { PasswordInput } from './PasswordInput'
import { AuthDivider } from './AuthDivider'
import { SocialAuthButton } from './SocialAuthButton'

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: LoginFormData) => {
    console.log('Login data:', data)
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#FAFAFA] px-4 py-8 sm:px-6 lg:px-8">
      <AuthCard>
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4">
            <Image
              src="/images/logo-auth.png"
              alt="VulnWatch AI Logo"
              width={240}
              height={69}
              className="h-auto w-[240px] object-contain"
              priority
            />
          </div>
          <p className="font-geist text-center text-[15px] font-normal text-[#666666] sm:text-[16px]">
            Enter your credentials to access the secure enterprise dashboard.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
          noValidate
        >
          <AuthInput
            label="Email"
            type="email"
            placeholder="analyst@company.com"
            icon={<Mail className="h-5 w-5" />}
            error={errors.email?.message}
            {...register('email')}
          />

          <div className="flex flex-col gap-1">
            <PasswordInput
              label="Password"
              placeholder="........"
              error={errors.password?.message}
              {...register('password')}
            />
            <div className="flex justify-end pt-1">
              <Link
                href="/forgot-password"
                className="font-geist text-[13px] font-medium text-[#666666] hover:text-[#C68A00] hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="mt-2 flex flex-col gap-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="font-geist flex h-[44px] w-full items-center justify-center rounded-[8px] bg-[#C68A00] px-6 py-4 text-[16px] leading-[24px] font-medium tracking-[0.02em] text-[#FFFFFF] transition-opacity hover:opacity-90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
            >
              Sign In
            </button>

            <p className="font-geist text-center text-[14px] leading-[24px] font-normal text-[#3D4947]">
              Already have an Account?{' '}
              <Link
                href="/register"
                className="font-medium text-[#C68A00] hover:underline"
              >
                Sign up
              </Link>
            </p>

            <AuthDivider />

            <SocialAuthButton text="Sign up with Google" />
          </div>
        </form>
      </AuthCard>
    </div>
  )
}
