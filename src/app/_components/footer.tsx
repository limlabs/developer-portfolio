import Image from 'next/image'

import { SocialIcons } from './socialIcons'

export const Footer = () => {
  return (
    <div className="p-12 mt-12 flex flex-col items-center">
      <div className="flex justify-center items-center gap-4 text-foreground">
        <Image src="/payload-logo.png" alt="payload logo" width={30} height={30} />
        <p>Website made with Payload</p>
      </div>
      <div className="w-full">
        <SocialIcons />
      </div>
    </div>
  )
}
