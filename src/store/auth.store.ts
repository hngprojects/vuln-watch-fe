import { create } from 'zustand'
import Cookies from 'js-cookie'

interface AuthState {
  token: string | null
  email: string | null
  isAuthenticated: boolean
  login: (token: string, email: string) => void
  logout: () => void
}

const TOKEN_KEY = 'auth_token'
const EMAIL_KEY = 'auth_email'

// Initialize state from cookies if available (useful for client-side hydration)
const getInitialState = () => {
  if (typeof window !== 'undefined') {
    const token = Cookies.get(TOKEN_KEY)
    const email = Cookies.get(EMAIL_KEY)
    return {
      token: token || null,
      email: email || null,
      isAuthenticated: !!token,
    }
  }
  return {
    token: null,
    email: null,
    isAuthenticated: false,
  }
}

export const useAuthStore = create<AuthState>((set) => ({
  ...getInitialState(),

  login: (token, email) => {
    // Set in cookies for middleware protection
    Cookies.set(TOKEN_KEY, token, {
      expires: 7,
      secure: true,
      sameSite: 'strict',
    })
    Cookies.set(EMAIL_KEY, email, {
      expires: 7,
      secure: true,
      sameSite: 'strict',
    })

    set({ token, email, isAuthenticated: true })
  },

  logout: () => {
    // Remove cookies
    Cookies.remove(TOKEN_KEY)
    Cookies.remove(EMAIL_KEY)

    set({ token: null, email: null, isAuthenticated: false })
  },
}))
