import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Profile } from '../../../payload-types'
import payloadLogo from '../../_assets/payload-logo.svg'
import { SocialIcons } from '../content/socialIcons'
import { ThemeToggle } from './themeToggle'

interface FooterProps {
  profile: Profile
}

export const Footer: FC<FooterProps> = ({ profile }) => {
  return (
    <div className="p-12 mt-12 lg:mt-20 flex flex-col lg:flex-row lg:justify-between items-center w-full max-w-7xl">
      <div className="flex justify-center items-center gap-4 text-foreground">
        <Image src={payloadLogo} alt="Payload CMS logo" width={24} height={24} />
        <p>
          Website made with{' '}
          <Link href="https://payloadcms.com" className="underline" target="_payload">
            Payload
          </Link>
        </p>
      </div>
      <div className="w-full mt-6 lg:mt-0 lg:max-w-xs">
        <SocialIcons profile={profile} className="justify-center lg:justify-end" />
      </div>
      <ThemeToggle />
    </div>
  )
}
