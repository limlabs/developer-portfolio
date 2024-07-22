import { FC } from "react"

import Link from "next/link"

import { PayloadLogo } from "@/assets/payloadLogo"
import { SocialIcons } from "@/components/content/socialIcons"
import { Profile } from "@/payload-types"

import { ThemeToggle } from "./themeToggle"

interface FooterProps {
  profile?: Profile
}

export const Footer: FC<FooterProps> = ({ profile }) => {
  return (
    <div className="mt-12 flex w-full max-w-[1300px] flex-col items-center p-12 text-primary lg:mt-20 lg:flex-row lg:justify-between">
      <div className="flex items-center justify-center gap-4">
        <PayloadLogo />
        <p>
          Website made with{" "}
          <Link href="https://payloadcms.com" className="underline" target="_payload">
            Payload
          </Link>
        </p>
      </div>
      <div className="flex flex-col items-center gap-8 lg:flex-row">
        <div className="mt-6 w-full lg:mt-0 lg:max-w-[175px]">
          <SocialIcons profile={profile} className="justify-center lg:justify-end" />
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}
