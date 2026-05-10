'use client'

import { GoogleOAuthProvider } from '@react-oauth/google'
import {
  QueryClient,
  QueryClientProvider,
  defaultShouldDehydrateQuery,
  isServer,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react'
import { Toaster as Sonner } from '~/components/ui/sonner'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { ReactLenis } from 'lenis/react'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 10 * MINUTE,
        staleTime: 1 * MINUTE,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === 'pending',
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (isServer) {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

const MINUTE = 1000 * 60

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()
  const googleClientId =
    process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
    'dummy-client-id.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <SessionProvider>
        <QueryClientProvider client={queryClient}>
          <ProgressBar
            style="style"
            options={{ showSpinner: false }}
            shallowRouting
          />
          <ReactLenis root>{children}</ReactLenis>
          <ReactQueryDevtools initialIsOpen={false} />
          <Sonner richColors expand={true} position="top-right" />
        </QueryClientProvider>
      </SessionProvider>
    </GoogleOAuthProvider>
  )
}
