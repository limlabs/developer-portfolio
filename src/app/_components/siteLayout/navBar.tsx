import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Header, Media, Profile } from '../../../payload-types'
import { PayloadLink } from '../content/link'
import { SkipToMainContentLink } from './skipToMainContent'

const HeaderLinks = ({ header }: { header: Header }) => {
  return (
    <>
      {header.navItems?.map(({ id, link }) => (
        <PayloadLink link={link} key={id} />
      ))}
    </>
  )
}

export const NavBar = ({ profile, header }: { profile: Profile; header: Header }) => {
  return (
    <div className="bg-background bg-opacity-50 w-full flex justify-center">
      <div className="w-full max-w-[1300px] h-full flex justify-evenly lg:justify-between lg:px-8 py-2 lg:py-0 content-box">
        <SkipToMainContentLink />
        {profile.profileImage && (
          <Link
            href="/"
            className="hidden sm:block items-center w-[50px] h-[50px] my-2"
            style={{ position: 'relative' }}
          >
            <Image
              src={(profile.profileImage as Media).url}
              className="rounded-full"
              alt={(profile.profileImage as Media).alt}
              priority
              fill
              sizes="(min-width: 640px) 10vw, (min-width: 1024px) 5vw"
              style={{ objectFit: 'cover' }}
            />
          </Link>
        )}
        <nav className="flex gap-6 lg:gap-8 w-full max-w-[378px] lg:w-auto justify-evenly text-base items-center">
          <HeaderLinks header={header} />
        </nav>
      </div>
    </div>
  )
}
