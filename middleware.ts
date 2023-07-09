import { NextResponse } from 'next/server'

export async function middleware(req) {
  const { nextUrl: url, geo } = req

  url.searchParams.set('country', geo.country || 'US')

  // Transform the response page data
  return NextResponse.rewrite(url)
}
