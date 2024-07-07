import React from 'react'
import { Block } from '@/components/ui/block'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LayoutTemplate, Wrench } from 'lucide-react'

export default function Welcome() {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-6">
      <Block fadeIn>
        <h1 className="text-center text-4xl font-medium">Setup Content</h1>
      </Block>
      <Block fadeIn className="text-center text-lg delay-500">
        Choose one of the following options:
      </Block>
      <div className="mx-auto mt-2 flex items-center gap-4 text-4xl font-bold">
        <Block fadeIn className="h-60 w-2/5 flex-col justify-start pt-20 delay-700">
          <Button
            size="lg"
            variant="outline"
            href="/setup/finish"
            className="flex w-full items-center gap-4"
          >
            <span>Create from scratch</span>
            <Wrench size={16} />
          </Button>
          <p className="mt-4 w-full text-center text-sm font-light text-muted-foreground">
            Start with a blank slate and build your content from the ground up.
          </p>
        </Block>
        <Block fadeIn className="h-60 w-1/5 justify-center delay-500">
          <div className="mx-auto h-full w-px justify-center bg-gradient-to-b from-background to-foreground"></div>
        </Block>
        <Block fadeIn className="h-60 w-2/5 flex-col justify-start pt-20 delay-1000">
          <Button size="lg" href="/setup/content/seed" className="flex w-full items-center gap-4">
            <span>Use an example</span>
            <LayoutTemplate size={16} />
          </Button>
          <p className="mt-4 w-full text-center text-sm font-light text-muted-foreground">
            Start with example content for inspiration.
          </p>
        </Block>
      </div>
    </div>
  )
}
