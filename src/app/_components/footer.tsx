import Image from 'next/image'
import Link from 'next/link'

import payloadLogo from '../_assets/payload-logo.svg'
import { SocialIcons } from './socialIcons'

export const Footer = () => {
  return (
    <div className="p-12 mt-12 lg:mt-20 flex flex-col lg:flex-row lg:justify-between items-center w-full max-w-7xl">
      <div className="flex justify-center items-center gap-4 text-foreground">
        <Image src={payloadLogo} alt="Payload CMS logo" width={24} height={24} />
        <p>
          Website made with{' '}
          <Link href="https://payloadcms.com" className="underline">
            Payload CMS
          </Link>
        </p>
      </div>
      <div className="w-full lg:max-w-xs">
        <SocialIcons className="lg:justify-end" />
      </div>
    </div>
  )
}
