import type {
  LoginFormData,
  SignUpFormData,
  ForgotPasswordFormData,
} from '~/types/auth.types'

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://api.staging.vuln-watch.hng14.com'

export interface ApiResponse<T> {
  isSuccess: boolean
  value: T | null
  error: {
    code: string
    message: string
  } | null
}

export const authService = {
  async login(
    data: LoginFormData
  ): Promise<ApiResponse<{ token: string; email: string }>> {
    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Version': '1',
      },
      body: JSON.stringify(data),
    })
    return res.json()
  },

  async register(
    data: SignUpFormData
  ): Promise<ApiResponse<{ token: string; email: string }>> {
    const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Version': '1',
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    })
    return res.json()
  },

  async forgotPassword(
    data: ForgotPasswordFormData
  ): Promise<ApiResponse<{ message: string }>> {
    const res = await fetch(`${API_BASE_URL}/api/auth/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Version': '1',
      },
      body: JSON.stringify(data),
    })
    return res.json()
  },
}
