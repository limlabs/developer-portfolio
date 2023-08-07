import { Suspense } from 'react'
import Image from 'next/image'

import { Media } from '../../payload-types'
import { fetchProfile } from '../_utils/api'
import { FadeInContent } from './fadeInContent'
import { RichText } from './richText'
import { SocialIcons } from './socialIcons'

const AboutCardContents = async () => {
  const profile = await fetchProfile()
  return (
    <FadeInContent>
      <div className="bg-muted px-4 md:px-28 py-12  mt-48 md:mt-42 mx-8 rounded-lg max-w-[1080px]">
        <div className="flex flex-col md:flex-row items-center md:justify-evenly relative">
          {profile.profileImage && (
            <div className="w-[230px] h-[230px] md:w-[300px] md:h-[300px] absolute md:relative z-20 -top-52  md:-top-0 flex-shrink-0">
              <Image
                priority
                className="rounded-full"
                fill
                sizes="(max-width: 768px) 230px, 300px"
                alt={(profile.profileImage as Media).alt}
                src={(profile.profileImage as Media).url}
              />
            </div>
          )}
          <div className="text-muted-foreground rounded-xl pt-12 md:pt-0 px-8 md:px-0 md:pl-24 max-w-2xl md:col-span-3">
            <h1 className="font-extrabold leading-[30-px] text-2xl md:text-5xl">{profile.name}</h1>
            {profile.location && (
              <h2 className="leading-7 text-base md:mt-2">{profile.location}</h2>
            )}
            {profile.title && (
              <h3 className="font-semibold leading-tight text-base md:text-xl md:mt-2">
                {profile.title}
              </h3>
            )}
            <div className="text-sm md:text-base md:leading-relaxed mt-4 md:mt-6">
              <RichText content={profile.aboutMe} />
            </div>
          </div>
        </div>
        <SocialIcons />
      </div>
    </FadeInContent>
  )
}

export const AboutCard = () => {
  return (
    <Suspense>
      {/* @ts-ignore */}
      <AboutCardContents />
    </Suspense>
  )
}
