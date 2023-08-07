require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [320, 768],
    domains: ['localhost', process.env.NEXT_PUBLIC_SERVER_URL],
  },
}
