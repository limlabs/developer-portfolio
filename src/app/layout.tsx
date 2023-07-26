import React from 'react'
import Link from 'next/link'

import './globals.css'

export const metadata = {
  title: 'Payload Custom Server',
  description: 'Serve Payload alongside any front-end framework.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="https://payloadcms.com" target="_blank" rel="noopener noreferrer">
            <picture>
              <source
                media="(prefers-color-scheme: dark)"
                srcSet="https://raw.githubusercontent.com/payloadcms/payload/master/src/admin/assets/images/payload-logo-light.svg"
              />
              <img
                alt="Payload Logo"
                src="https://raw.githubusercontent.com/payloadcms/payload/master/src/admin/assets/images/payload-logo-dark.svg"
              />
            </picture>
          </Link>
        </header>
        {children}
      </body>
    </html>
  )
}
