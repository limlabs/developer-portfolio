import { FC, Suspense } from "react"

import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"

import { SocialLink } from "@/components/ui/socialLink"
import { Profile } from "@/payload-types"
import { cn } from "@/utilities"
import { fetchProfile } from "@/utilities/api"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"

interface SocialIconsContentProps {
  className?: string
  profile?: Profile
}

const SocialIconsContent = async ({ className = "" }) => {
  const profile = await fetchProfile()
  return (
    <div className={cn("flex items-center gap-8 lg:max-w-[300px]", className)}>
      {profile.socialLinks?.github && (
        <SocialLink
          href={profile.socialLinks.github}
          icon={<GithubIcon width={24} height={24} aria-label="Github profile link" />}
          target="_blank"
        />
      )}
      {profile.socialLinks?.linkedin && (
        <SocialLink
          href={profile.socialLinks.linkedin}
          icon={<LinkedinIcon width={24} height={24} aria-label="LinkedIn profile link" />}
          target="_blank"
        />
      )}
      {profile.socialLinks?.email && (
        <SocialLink
          href={`mailto:${profile.socialLinks.email}`}
          icon={<EnvelopeOpenIcon width={24} height={24} aria-label="Email link" />}
        />
      )}
      {profile.socialLinks?.twitter && (
        <SocialLink
          href={profile.socialLinks.twitter}
          icon={<TwitterIcon width={24} height={24} aria-label="Twitter link" />}
          target="_blank"
        />
      )}
    </div>
  )
}

export const SocialIcons: FC<SocialIconsContentProps> = props => (
  <Suspense fallback={<div className={cn("h-[25px] w-full lg:max-w-[300px]", props.className)} />}>
    {/* @ts-ignore */}
    <SocialIconsContent {...props} />
  </Suspense>
)
