import Image from 'next/image'
import Link from 'next/link'

import { Media, Profile } from '../../../payload-types'
import { SkipToMainContentLink } from './skipToMainContent'
import { ThemeToggle } from './themeToggle'

export const NavBar = ({ profile }: { profile: Profile }) => {
  return (
    <div className="w-full max-w-7xl h-full flex justify-evenly lg:justify-between">
      <SkipToMainContentLink />
      {profile.profileImage && (
        <Link href="/" className="hidden lg:flex items-center w-[50px] h-[66px]">
          <Image
            src={(profile.profileImage as Media).url}
            className="rounded-full"
            alt={(profile.profileImage as Media).alt}
            width={50}
            height={50}
            priority
          />
        </Link>
      )}
      <div className="flex lg:gap-8 w-full lg:w-auto justify-evenly text-base items-center">
        <ThemeToggle />

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
  )
}
