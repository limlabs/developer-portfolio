import Image from 'next/image'

import { SocialLink } from './socialLink'

export const AboutCard = () => {
  return (
    <div className="bg-muted px-4 md:px-28 py-12  mt-48 md:mt-12 mx-8 rounded-lg max-w-screen-lg">
      <div className="flex flex-col md:flex-row items-center md:justify-evenly relative">
        <Image
          src="/headshot.png"
          className="rounded-full absolute md:relative z-20 -top-48 md:-top-0 flex-shrink-0"
          alt="headshot of developer"
          width={220}
          height={220}
          priority
        />
        <div className="text-muted-foreground rounded-xl pt-12 md:pt-0 px-8 md:px-0 md:pl-24 max-w-2xl md:col-span-3">
          <h1 className="font-extrabold leading-[30-px] text-2xl md:text-5xl">Samantha Smith</h1>
          <p className="leading-7 text-base md:mt-2">Portland, OR</p>
          <h4 className="font-semibold leading-tight text-base md:text-lg md:mt-2">
            UI/UX Designer
          </h4>
          <p className="text-sm md:text-base md:leading-relaxed mt-4 md:mt-6">
            Samantha Smith is a visionary artist with a passion for pushing boundaries. She crafts
            captivating visual stories that leave a lasting impact. Her work reflects a perfect
            blend of innovation and elegance, whether in logo designs that capture a brand's essence
            or breathtaking illustrations that transport you to distant realms.
          </p>
        </div>
      </div>
      <div className="flex md:max-w-[220px] justify-evenly items-center mt-8">
        <SocialLink href="*" src="/mail-open.png" altText="mail icon" width={25} height={25} />
        <SocialLink href="*" src="/twitter.png" altText="twitter icon" width={25} height={25} />
        <SocialLink href="*" src="/youtube.png" altText="youtube icon" width={25} height={25} />
      </div>
    </div>
  )
}
