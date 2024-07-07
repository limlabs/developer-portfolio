import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import '../(app)/globals.css'

import { Backdrop } from '@/components/ui/backdrop/backdrop'
import { ThemeProvider } from '@/components/siteLayout/themeProvider'
import { serverUrl } from '@/utilities/serverConfig'

export async function generateMetadata() {
  return {
    metadataBase: new URL(serverUrl),
    title: `Portfolio Starter | Setup`,
    description: 'Setup page for portfolio starter.',
  }
}

export default async function SetupLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <body className="w-full overflow-x-hidden">
        <ThemeProvider
          enableColorScheme
          enableSystem
          defaultTheme="system"
          disableTransitionOnChange={false}
          attribute="class"
        >
          <Backdrop />
          <div className="relative z-20 flex min-h-screen flex-col items-center justify-between">
            <div
              className="flex-grow-1 flex h-full w-full max-w-[1080px] flex-1 flex-col items-center justify-center px-7 lg:px-8 xl:px-0"
              id="main-content"
            >
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
