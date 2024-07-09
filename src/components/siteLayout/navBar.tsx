import Image from "next/image"
import Link from "next/link"

import { PayloadLink } from "@/components/content/link"
import { Header, Media, Profile } from "@/payload-types"
import { getMediaUrl } from "@/utilities/mediaConfig"

import { SkipToMainContentLink } from "./skipToMainContent"

const HeaderLinks = ({ header }: { header: Header }) => {
  return <>{header.navItems?.map(({ id, link }) => <PayloadLink link={link} key={id} />)}</>
}

export const NavBar = ({ profile, header }: { profile: Profile; header: Header }) => {
  return (
    <>
      <div className="fixed z-50 flex w-full justify-center bg-background/50 backdrop-blur-[20px]">
        <SkipToMainContentLink />
        <div className="content-box flex h-16 w-full max-w-[1300px] items-center justify-center md:justify-between md:px-8">
          {profile.profileImage && (
            <Link
              href="/"
              className="my-4 hidden h-10 w-10 items-center sm:block"
              style={{ position: "relative" }}
            >
              <Image
                src={getMediaUrl((profile.profileImage as Media)?.url as string)}
                className="rounded-full"
                alt={(profile.profileImage as Media)?.alt as string}
                priority
                fill
                sizes="(min-width: 640px) 10vw, (min-width: 1024px) 5vw"
                style={{ objectFit: "cover" }}
              />
            </Link>
          )}
          <nav className="flex w-full max-w-[378px] items-center justify-center gap-6 text-base text-primary md:justify-end lg:w-auto lg:gap-8">
            <HeaderLinks header={header} />
          </nav>
        </div>
      </div>
      <div className="pb-16" />
    </>
  )
}
