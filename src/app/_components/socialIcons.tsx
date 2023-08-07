import { Suspense } from 'react'
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { TwitterIcon } from 'lucide-react'

import { fetchProfile } from '../_utils/api'
import { SocialLink } from './socialLink'

const SocialIconsContent = async () => {
  const profile = await fetchProfile()
  return (
    <div className="flex md:max-w-[300px] justify-evenly items-center mt-8">
      {profile.socialLinks?.github && (
        <SocialLink
          href={profile.socialLinks.github}
          icon={<GitHubLogoIcon width={25} height={25} aria-label="Github profile link" />}
        />
      )}
      {profile.socialLinks?.linkedin && (
        <SocialLink
          href={profile.socialLinks.linkedin}
          icon={<LinkedInLogoIcon width={25} height={25} aria-label="LinkedIn profile link" />}
        />
      )}
      {profile.socialLinks?.email && (
        <SocialLink
          href={`mailto:${profile.socialLinks.email}`}
          icon={<EnvelopeClosedIcon width={25} height={25} aria-label="Email link" />}
        />
      )}
      {profile.socialLinks?.twitter && (
        <SocialLink
          href={profile.socialLinks.twitter}
          icon={<TwitterIcon width={25} height={25} aria-label="Email link" />}
        />
      )}
    </div>
  )
}

export const SocialIcons = () => (
  <Suspense>
    {/* @ts-ignore */}
    <SocialIconsContent />
  </Suspense>
)
