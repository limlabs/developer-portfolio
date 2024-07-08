

let productionUrl = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ?? 'http://localhost:3000'
if (!productionUrl.startsWith('http')) {
  productionUrl = 'https://' + productionUrl
}

export const serverUrl = productionUrl
