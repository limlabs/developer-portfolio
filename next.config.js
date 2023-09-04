require('dotenv').config()

const imageDomains = ['localhost']
if (process.env.NEXT_PUBLIC_SERVER_URL) {
  imageDomains.push(process.env.NEXT_PUBLIC_SERVER_URL)
}

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: imageDomains,
  },
}
