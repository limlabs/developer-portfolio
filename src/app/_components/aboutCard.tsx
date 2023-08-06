import Image from 'next/image'

import { fetchProfile } from '../_utils/api'
import { FadeInContent } from './fadeInContent'
import { RichText } from './RichText'
import { SocialLink } from './socialLink'

export const AboutCard = async () => {
  const profile = await fetchProfile()

  return (
    <FadeInContent>
      <div className="bg-muted px-4 md:px-28 py-12  mt-48 md:mt-42 mx-8 rounded-lg max-w-[1080px]">
        <div className="flex flex-col md:flex-row items-center md:justify-evenly relative">
          <Image
            src="/headshot.png"
            className="rounded-full absolute md:relative z-20 -top-48 md:-top-0 flex-shrink-0"
            alt="profile picture"
            width={220}
            height={220}
            priority
          />
          <div className="text-muted-foreground rounded-xl pt-12 md:pt-0 px-8 md:px-0 md:pl-24 max-w-2xl md:col-span-3">
            <h1 className="font-extrabold leading-[30-px] text-2xl md:text-5xl">{profile.name}</h1>
            {profile.location && <p className="leading-7 text-base md:mt-2">{profile.location}</p>}
            {profile.title && (
              <h4 className="font-semibold leading-tight text-base md:text-xl md:mt-2">
                {profile.title}
              </h4>
            )}
            <div className="text-sm md:text-base md:leading-relaxed mt-4 md:mt-6">
              <RichText content={profile.aboutMe} />
            </div>
          </div>
        </div>
        <div className="flex md:max-w-[220px] justify-evenly items-center mt-8">
          <SocialLink href="*" src="/mail-open.png" altText="mail icon" width={25} height={25} />
          <SocialLink href="*" src="/twitter.png" altText="twitter icon" width={25} height={25} />
          <SocialLink href="*" src="/youtube.png" altText="youtube icon" width={25} height={25} />
        </div>
      </div>
    </FadeInContent>
  )
}
