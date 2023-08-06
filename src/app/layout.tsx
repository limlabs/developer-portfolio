import React from 'react'

import { Backdrop } from './_components/backdrop'
import { Footer } from './_components/footer'
import { NavBar } from './_components/navBar'
import { fetchProfile } from './_utils/api'

import './globals.css'

export const metadata = async () => {
  const profile = await fetchProfile()

  return {
    title: `${profile.name} | Portfolio`,
    description: 'My professional portfolio featuring past projects and contact info.',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="w-screen overflow-x-hidden">
        <Backdrop />
        <div className="relative z-20 min-h-screen flex flex-col items-center ">
          <NavBar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
