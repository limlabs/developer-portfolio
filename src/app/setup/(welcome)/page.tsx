import React from 'react'
import { Block } from '@/components/ui/block'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Wrench } from 'lucide-react'

export default function Welcome() {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-6">
      <Block fadeIn>
        <h1 className="text-center text-4xl font-medium">Welcome to your new site!</h1>
      </Block>
      <Block fadeIn className="text-center text-lg delay-500">
        This setup will help you through the remaining steps to go live.
      </Block>
      <div className="mx-auto mt-2 flex items-center gap-4 text-4xl font-bold">
        <Block fadeIn className="delay-700">
          <Button size={'lg'} variant="default" href="/setup/user">
            Get Started
          </Button>
        </Block>
      </div>
    </div>
  )
}
