import Image from 'next/image'
import { SocialLink } from './sodialLink'
export const Footer = () => {
  return (
    <div className="p-12">
      <div className="flex justify-center items-center gap-4 text-white">
        <Image src="/payload-logo.png" alt="payload logo" width={30} height={30} />
        <p>Website made with Payload</p>
      </div>
      <div className="flex justify-evenly items-center mt-8">
        <SocialLink href="*" src="/mail-open.png" altText="mail icon" width={25} height={25} />
        <SocialLink href="*" src="/twitter.png" altText="twitter icon" width={25} height={25} />
        <SocialLink href="*" src="/youtube.png" altText="youtube icon" width={25} height={25} />
      </div>
    </div>
  )
}
