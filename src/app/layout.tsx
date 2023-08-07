import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { Backdrop } from './_components/backdrop/backdrop'
import { Footer } from './_components/footer'
import { fetchProfile } from './_utils/api'

import './globals.css'

export const metadata = async () => {
  const profile = await fetchProfile()

  return {
    title: `Portfolio | ${profile.name}`,
    description: 'My professional portfolio featuring past projects and contact info.',
  }
}

export default function RootLayout({
  children,
  navBar,
}: {
  children: React.ReactNode
  navBar: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.className}`}>
      <body className="w-screen overflow-x-hidden">
        <Backdrop />
        <div className="relative z-20 min-h-screen flex flex-col items-center">
          {navBar}
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
