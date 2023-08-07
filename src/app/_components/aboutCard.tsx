import { cva } from 'class-variance-authority'
import Image from 'next/image'

import { Media, Profile } from '../../payload-types'
import { cn } from '../../utilities'
import { FadeInContent } from './fadeInContent'
import { SocialIcons } from './socialIcons'
import { RichText } from './RichText'

interface AboutCardContentsProps {
  profile: Profile
  variant: 'compact' | 'full'
}

const containerVariants = cva('bg-muted rounded-lg max-w-[1080px]', {
  variants: {
    variant: {
      compact: 'px-5 md:px-13 py-4 md:py-8 flex flex-col md:flex-row justify-between items-center',
      full: 'px-4 md:px-28 py-12 mt-48 md:mt-42 mx-8',
    },
  },
})

const imageContainerVariants = cva('flex-shrink-0', {
  variants: {
    variant: {
      compact: 'w-[80px] h-[80px] md:w-[75px] md:h-[75px] relative items-center justify-center',
      full: 'w-[230px] h-[230px] md:w-[300px] md:h-[300px] absolute md:relative z-20 -top-52 md:-top-0',
    },
  },
})

const topContentVariants = cva('flex', {
  variants: {
    variant: {
      compact: 'justify-evenly items-center',
      full: 'flex-col md:flex-row items-center md:justify-evenly relative',
    },
  },
})

const imageProps = {
  compact: {
    sizes: '(max-width: 768px) 20vw, 5vw',
  },
  full: {
    sizes: '(max-width: 768px) 59vw, 21vw',
  },
}

const textContainerVariants = cva('text-muted-foreground rounded-xl ', {
  variants: {
    variant: {
      compact: 'ml-3 md:ml-8',
      full: 'pt-12 md:pt-0 px-8 md:px-0 md:pl-24 max-w-2xl md:col-span-3',
    },
  },
})

const titleVariants = cva('text-base leading-tight md:mt-2', {
  variants: {
    variant: {
      compact: '',
      full: 'font-semibold md:text-xl',
    },
  },
})

export const AboutCard = ({ variant, profile }: AboutCardContentsProps) => {
  return (
    <FadeInContent>
      <div className={containerVariants({ variant })}>
        <div className={topContentVariants({ variant })}>
          {profile.profileImage && (
            <div className={imageContainerVariants({ variant })}>
              <Image
                priority
                className="rounded-full"
                fill
                {...imageProps[variant]}
                alt={(profile.profileImage as Media).alt}
                src={(profile.profileImage as Media).url}
              />
            </div>
          )}
          <div className={textContainerVariants({ variant })}>
            <h1
              className={cn({
                'text-2xl md:text-5xl font-extrabold leading-[30px]': variant === 'full',
                'text-[24px] md:text-[20px] font-semibold leading-[28px]': variant === 'compact',
              })}
            >
              {profile.name}
            </h1>
            {profile.location && variant === 'full' && (
              <h2 className="leading-7 text-base md:mt-2">{profile.location}</h2>
            )}
            {profile.title && <h3 className={titleVariants({ variant })}>{profile.title}</h3>}
            {profile.aboutMe && variant === 'full' && (
              <div className="mt-8">
                <RichText content={profile.aboutMe} />
              </div>
            )}
          </div>
        </div>
        <SocialIcons
          className={cn({
            'mt-8 justify-center': variant === 'full',
            'mt-8 md:mt-0 gap-9': variant === 'compact',
          })}
        />
      </div>
    </FadeInContent>
  )
}
