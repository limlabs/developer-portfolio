import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Media } from '../../payload-types'
import { fetchProfile } from '../_utils/api'

const NavBarContents = async () => {
  const profile = await fetchProfile()
  return (
    <div className="bg-background text-foreground w-full flex justify-center">
      <div className="w-full max-w-7xl h-[66px] flex justify-evenly lg:justify-between items-center">
        <div className="hidden lg:flex">
          {profile.profileImage && (
            <Link href="/">
              <Image
                src={(profile.profileImage as Media).url}
                className="rounded-full mt-2"
                alt={(profile.profileImage as Media).alt}
                width={50}
                height={50}
                priority
              />
            </Link>
          )}
        </div>
        <div className="flex lg:gap-8 w-full lg:w-auto justify-evenly text-base">
          {profile.socialLinks?.github && (
            <Link href={profile.socialLinks.github} target="_github">
              Github
            </Link>
          )}
          {profile.socialLinks?.linkedin && (
            <Link href={profile.socialLinks.linkedin} target="_linkedIn">
              LinkedIn
            </Link>
          )}
          {profile.socialLinks?.email && (
            <Link href={`mailto:${profile.socialLinks.email}`}>Email</Link>
          )}
          {profile.socialLinks?.twitter && (
            <Link href={profile.socialLinks.twitter} target="_twitter">
              Twitter
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export const NavBar = () => (
  <Suspense>
    {/* @ts-ignore */}
    <NavBarContents />
  </Suspense>
)
