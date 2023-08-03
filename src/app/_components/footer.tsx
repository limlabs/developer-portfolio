import Image from 'next/image'

import { SocialLink } from './socialLink'

export const Footer = () => {
  return (
    <div className="p-12 mt-12 flex flex-col items-center">
      <div className="flex justify-center items-center gap-4 text-foreground">
        <Image src="/payload-logo.png" alt="payload logo" width={30} height={30} />
        <p>Website made with Payload</p>
      </div>
      <div className="flex justify-evenly items-center mt-8 w-full max-w-sm">
        <SocialLink href="*" src="/mail-open.png" altText="mail icon" width={25} height={25} />
        <SocialLink href="*" src="/twitter.png" altText="twitter icon" width={25} height={25} />
        <SocialLink href="*" src="/youtube.png" altText="youtube icon" width={25} height={25} />
      </div>
    </div>
  )
}
