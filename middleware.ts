import { MiddlewareRequest } from '@netlify/next'

export async function middleware(req) {
  const request = new MiddlewareRequest(req)
  const response = await request.next()

  // Transform the response page data
  response.transformData((data) => {
    data.pageProps.country = request.geo?.city
    return data
  })
}
