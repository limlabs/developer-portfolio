import React from 'react'

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
      <body className="bg-background flex flex-col items-center">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
