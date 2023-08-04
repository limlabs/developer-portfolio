import Image from 'next/image'
import { SocialLink } from '../_components/socialLink'

export const Header = () => {
  return (
    <header className="p-4 mx-6 md:flex lg:flex lg:w-full  justify-between items-center bg-muted text-muted-foreground  mt-8 rounded-lg">
      <div className="flex justify-evenly lg:justify-start items-center gap-4 md:gap-0 w-full">
        <div>
          <Image
            src="/headshot.png"
            className="rounded-full  "
            alt="headshot of developer"
            width={90}
            height={90}
            priority
          />
        </div>
        <div>
          <h1 className="font-bold lg:text-xl">Samantha Smith</h1>
          <h4 className="text-base">UI/UX Designer</h4>
        </div>
      </div>
      <div className="flex justify-evenly pt-4 lg:gap-8 lg:pr-4 w-full">
        <SocialLink href="*" src="/mail-open.png" altText="mail icon" width={30} height={30} />
        <SocialLink href="*" src="/twitter.png" altText="twitter icon" width={30} height={30} />
        <SocialLink href="*" src="/youtube.png" altText="youtube icon" width={30} height={30} />
      </div>
    </header>
  )
}
