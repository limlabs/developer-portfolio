import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { Footer } from './_components/siteLayout/footer'
import { NavBar } from './_components/siteLayout/navBar'
import { Backdrop } from './_components/ui/backdrop/backdrop'
import { ThemeProvider } from './_provider/themeProvider'
import { fetchProfile } from './_utils/api'

import './globals.css'

export async function generateMetadata() {
  const profile = await fetchProfile()

  return {
    title: profile.name,
    description: 'My professional portfolio featuring past projects and contact info.',
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const profile = await fetchProfile()
  return (
    <html lang="en" className={`dark ${inter.className}`}>
      <body className="w-screen overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Backdrop />
          <div className="relative z-20 min-h-screen flex flex-col items-center">
            <NavBar profile={profile} />
            <div className="flex flex-col w-full max-w-[1080px] px-8 lg:px-0" id="main-content">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
