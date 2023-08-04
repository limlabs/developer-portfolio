import React from 'react'

import { Backdrop } from './_components/backdrop'
import { Footer } from './_components/footer'
import { NavBar } from './_components/navBar'

import './globals.css'

export const metadata = {
  title: 'Payload Custom Server',
  description: 'Serve Payload alongside any front-end framework.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Backdrop />
        <div className="relative z-20 min-h-screen flex flex-col">
          <NavBar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
