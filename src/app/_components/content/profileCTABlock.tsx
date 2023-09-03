import { cva } from 'class-variance-authority'
import Image from 'next/image'

import { Media, Profile } from '../../../payload-types'
import { cn } from '../../../utilities'
import { Block } from '../ui/block'
import { RichText } from './richText'
import { SocialIcons } from './socialIcons'

const containerVariants = cva('w-full bg-muted rounded-lg max-w-[1080px]', {
  variants: {
    variant: {
      compact: 'lg:px-13 py-4 lg:py-8 flex flex-col lg:flex-row justify-between items-center',
      full: 'lg:px-28 py-12 mt-48 lg:mt-40',
    },
  },
})

const imageContainerVariants = cva('flex-shrink-0', {
  variants: {
    variant: {
      compact: 'w-[80px] h-[80px] lg:w-[75px] lg:h-[75px] relative items-center justify-center',
      full: 'w-[230px] h-[230px] lg:w-[300px] lg:h-[300px] absolute lg:relative z-20 -top-52 lg:-top-0',
    },
  },
})

const topContentVariants = cva('flex', {
  variants: {
    variant: {
      compact: 'justify-evenly items-center',
      full: 'flex-col lg:flex-row items-center lg:justify-evenly relative',
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

const textContainerVariants = cva('text-muted-foreground text-sm leading-6 rounded-xl ', {
  variants: {
    variant: {
      compact: 'ml-3 lg:ml-8',
      full: 'pt-12 lg:pt-0 px-12 lg:px-0 lg:pl-24 w-full lg:col-span-3',
    },
  },
})

const titleVariants = cva('text-base leading-tight lg:mt-2', {
  variants: {
    variant: {
      compact: '',
      full: 'font-semibold lg:text-xl',
    },
  },
})

export const ProfileCTABlock = ({
  profile,
  variant = 'full',
}: {
  profile: Profile
  variant?: 'compact' | 'full'
}) => {
  return (
    <Block size="full" className="w-full">
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
                'text-2xl lg:text-5xl font-extrabold leading-[30px] w-full': variant === 'full',
                'text-[24px] lg:text-[20px] font-semibold leading-[28px] w-full':
                  variant === 'compact',
              })}
            >
              {profile.name}
            </h1>
            {profile.location && variant === 'full' && (
              <h2 className="leading-6 text-base lg:mt-2">{profile.location}</h2>
            )}
            {profile.title && <h3 className={titleVariants({ variant })}>{profile.title}</h3>}
            {profile.aboutMe && variant === 'full' && (
              <RichText content={profile.aboutMe} className="mt-6 w-full lg:w-[417px]" />
            )}
          </div>
        </div>
        <SocialIcons
          className={cn({
            'mt-8 justify-center': variant === 'full',
            'mt-8 lg:mt-0 gap-9': variant === 'compact',
          })}
          profile={profile}
        />
      </div>
    </Block>
  )
}
