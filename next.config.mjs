import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  experimental: {
    reactCompiler: false,
  },
  images: {
    domains: ['localhost'].concat(
      process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL 
        ? [process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL] 
        : []
    )
  },
}

export default withPayload(nextConfig)
