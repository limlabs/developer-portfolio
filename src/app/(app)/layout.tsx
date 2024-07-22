import './globals.css'

import React from 'react'

import { Inter } from 'next/font/google'

import { Footer } from '@/components/siteLayout/footer'
import { NavBar } from '@/components/siteLayout/navBar'
import { Backdrop } from '@/components/ui/backdrop/backdrop'
import { fetchAppearance, fetchHeader, fetchProfile } from '@/utilities/api'

import './globals.css'
import { ThemeProvider } from '@/components/siteLayout/themeProvider'
import { serverUrl } from '@/utilities/serverConfig'
import { AppearanceStyles } from '@/components/appearance/styles'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  const profile = await fetchProfile()

  return {
    metadataBase: new URL(serverUrl),
    title: `Portfolio | ${profile.name}`,
    description: 'My professional portfolio featuring past projects and contact info.',
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [profile, header, appearance] = await Promise.all([
    fetchProfile(),
    fetchHeader(),
    fetchAppearance(),
  ])

  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="w-full overflow-x-hidden">
        <AppearanceStyles appearance={appearance} />
        <ThemeProvider
          enableColorScheme
          enableSystem
          defaultTheme="system"
          disableTransitionOnChange={false}
          attribute="class"
        >
          {appearance.general?.enableBackdropAnimation && <Backdrop />}
          <div className="relative z-20 flex min-h-screen flex-col items-center">
            <NavBar profile={profile} header={header} />
            <div
              className="flex w-full max-w-[1080px] flex-col justify-center px-7 lg:px-8 xl:px-0"
              id="main-content"
            >
              {children}
            </div>
            <Footer profile={profile} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
