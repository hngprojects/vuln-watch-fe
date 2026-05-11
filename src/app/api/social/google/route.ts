import { NextRequest, NextResponse } from 'next/server'
import { envConfig } from '~/config/env.config'
import { createFetchUtil, HttpError } from '~/actions/fetchutil'
import { z } from 'zod'

interface LoginResponse {
  isSuccess: boolean
  value: {
    token: string
    email: string
  } | null
  error: {
    code: string
    message: string
  } | null
}

export async function POST(request: NextRequest) {
  const { id_token } = await request.json()

  if (!id_token) {
    return NextResponse.json(
      { message: 'No idToken provided' },
      { status: 400 }
    )
  }

  const baseurl = envConfig.BASEURL

  if (!baseurl) {
    return NextResponse.json(
      { message: 'Unable to determine backend URL' },
      { status: 500 }
    )
  }

  const api = createFetchUtil({ baseUrl: baseurl })

  try {
    const res = await api<LoginResponse>('/auth/google', {
      method: 'POST',
      body: { IdToken: id_token, id_token: id_token, idToken: id_token }, // Sending all variations to be safe
    })

    console.log(res, 'response')

    return NextResponse.json({
      token: res.value?.token,
      email: res.value?.email,
      success: true,
    })
  } catch (error) {
    console.dir(error, { depth: null })
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid form data',
          errors: error.issues,
        },
        { status: 400 }
      )
    } else if (error instanceof HttpError) {
      console.error(
        'HTTP Error:',
        error.message,
        'Status:',
        error.response.status
      )
      return NextResponse.json(
        {
          success: false,
          message:
            error.responseBody?.message || `Server error: ${error.message}`,
          statusCode: error.statusCode,
          responseBody: error.responseBody,
        },
        { status: error.statusCode }
      )
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'An unexpected error occurred',
        },
        { status: 500 }
      )
    }
  }
}

// http://49.12.208.6:3008/api/docs#/Authentication/RegistrationController_googleAuth
