import { NextRequest, NextResponse } from 'next/server'

const BACKEND_URL =
  process.env.BASE_URL || 'https://api.staging.vuln-watch.hng14.com/api'

export async function POST(request: NextRequest) {
  const body = await request.json()

  const res = await fetch(`${BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Version': '1',
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()
  return NextResponse.json(data, { status: res.status })
}
