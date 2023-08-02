import Image from 'next/image'
import Link from 'next/link'
import { SocialLink } from './sodialLink'

export const Hero = () => {
  return (
    <div className=" bg-black h-auto flex flex-col lg:flex-row justify-center items-center px-4 py-12 mt-28">
      <Image
        src="/headshot.png"
        alt="headshot of developer"
        width={220}
        height={220}
        className="rounded-full lg:relative absolute z-20 mb-[475px] lg:mb-0"
      />
      <div className=" text-white rounded-xl pt-28 pb-8 px-8">
        <h1 className="font-extrabold leading-[30-px] text-2xl">Samantha Smith</h1>
        <p className="leading-7 text-base">Portland, OR</p>
        <h4 className="font-semibold leading-tight text-base">UI/UX Designer</h4>
        <p className="text-sm">
          Samantha Smith is a visionary artist with a passion for pushing boundaries. She crafts
          captivating visual stories that leave a lasting impact. Her work reflects a perfect blend
          of innovation and elegance, whether in logo designs that capture a brand's essence or
          breathtaking illustrations that transport you to distant realms.{' '}
        </p>
        <div className="w-full flex justify-evenly items-center mt-8">
          <SocialLink href="*" src="/mail-open.png" altText="mail icon" width={25} height={25} />
          <SocialLink href="*" src="/twitter.png" altText="twitter icon" width={25} height={25} />
          <SocialLink href="*" src="/youtube.png" altText="youtube icon" width={25} height={25} />
        </div>
      </div>
    </div>
  )
}
