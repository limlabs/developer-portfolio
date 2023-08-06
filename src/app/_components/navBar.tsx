import Image from 'next/image'
import Link from 'next/link'

import { fetchProfile } from '../_utils/api'

export const NavBar = async () => {
  const profile = await fetchProfile()
  return (
    <div className="bg-background text-foreground w-full h-[66px] flex justify-evenly lg:justify-between items-center py-4 px-8 cursor-pointer">
      <div className="hidden lg:flex">
        <Image
          src="/headshot.png"
          className="rounded-full mt-2"
          alt="headshot of developer"
          width={50}
          height={50}
          priority
        />
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
  )
}
