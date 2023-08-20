import { revalidatePath } from 'next/cache'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// e.g a webhook to `your-website.com/api/revalidate?tag=collection&secret=<token>`
export async function GET(request: NextRequest): Promise<unknown> {
  console.log('received revalidation request for ', request.nextUrl.toString())
  // const secret = request.nextUrl.searchParams.get('secret')
  const path = request.nextUrl.searchParams.get('path')

  // if (secret !== process.env.MY_SECRET_TOKEN) {
  //   return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  // }

  if (!path) {
    return NextResponse.json({ message: 'Missing path param' }, { status: 400 })
  }

  revalidatePath(path)

  return NextResponse.json({ revalidated: true, now: Date.now() })
}
