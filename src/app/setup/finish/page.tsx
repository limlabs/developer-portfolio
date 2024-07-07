'use client'

import { Block } from '@/components/ui/block'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities'
import clsx from 'clsx'
import { Globe, Edit2 } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function FinishSetupPage() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  const fadeClasses = cn(
    'opacity-0',
    fadeIn && 'opacity-100',
    fadeIn && 'transition-all',
    fadeIn && 'duration-700',
    fadeIn && 'ease-in-out',
  )

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h1 className={cn('text-4xl font-medium', fadeClasses)}>Setup Complete</h1>
      <p className={cn('text-lg delay-200', fadeClasses)}>
        Your site is now set up and ready to use!
      </p>
      <Block fadeIn className="mx-auto mt-4 w-1/2 gap-6 delay-1000 duration-300 lg:justify-center">
        <Button size="lg" href="/">
          Visit Site
          <span className="ml-2">
            <Globe size={16} />
          </span>
        </Button>
        <Button size="lg" variant="secondary" href="/admin">
          Edit Content
          <span className="ml-2">
            <Edit2 size={16} />
          </span>
        </Button>
      </Block>
    </div>
  )
}
