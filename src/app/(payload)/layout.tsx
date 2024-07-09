import "@payloadcms/next/css"
import "./custom.scss"

/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import React from "react"

/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import configPromise from "@payload-config"
import { RootLayout } from "@payloadcms/next/layouts"

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => <RootLayout config={configPromise}>{children}</RootLayout>

export default Layout
