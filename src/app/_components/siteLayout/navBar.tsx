import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Media, Profile } from '../../../payload-types'
import { fetchHeader } from '../../_utils/api'
import { PayloadLink } from '../content/link'
import { SkipToMainContentLink } from './skipToMainContent'
import { ThemeToggle } from './themeToggle'

const HeaderLinks = async () => {
  const header = await fetchHeader()
  return (
    <>
      {header.navItems?.map(({ id, link }) => (
        <PayloadLink link={link} key={id} />
      ))}
    </>
  )
}

export const NavBar = ({ profile }: { profile: Profile }) => {
  return (
    <div className="w-full max-w-7xl h-full flex justify-evenly lg:justify-between lg:px-8 xl:px-0 py-2 lg:py-0">
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
        <Suspense>
          {/* @ts-ignore */}
          <HeaderLinks />
        </Suspense>
      </div>
    </div>
  )
}
