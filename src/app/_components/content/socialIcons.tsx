import { FC, Suspense } from 'react'
import { EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { TwitterIcon } from 'lucide-react'

import { Profile } from '../../../payload-types'
import { cn } from '../../../utilities'
import { fetchProfile } from '../../_utils/api'
import { SocialLink } from '../ui/socialLink'

interface SocialIconsContentProps {
  className?: string
  profile: Profile
}

const SocialIconsContent = async ({ className = '' }) => {
  const profile = await fetchProfile()
  return (
    <div className={cn('flex md:max-w-[300px] gap-8 items-center', className)}>
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

export const SocialIcons: FC<SocialIconsContentProps> = props => (
  <Suspense>
    {/* @ts-ignore */}
    <SocialIconsContent {...props} />
  </Suspense>
)
