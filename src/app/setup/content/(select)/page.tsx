import React from 'react'
import { Block } from '@/components/ui/block'
import { Button } from '@/components/ui/button'
import { LayoutTemplate, Wrench } from 'lucide-react'
import { SetupTitle } from '@/components/setup/setupTitle'
import { SetupMessage } from '@/components/setup/setupMessage'

export default function Welcome() {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-6">
      <SetupTitle>Setup Content</SetupTitle>
      <SetupMessage>Choose one of the following options:</SetupMessage>
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
          <p className="mt-6 w-full text-center text-sm font-light text-muted-foreground">
            Start with a blank slate and build your content from the ground up.
          </p>
        </Block>
        <Block fadeIn className="h-60 w-1/5 justify-center delay-500">
          <div className="mx-auto h-full w-px justify-center bg-gradient-to-b from-background to-foreground"></div>
        </Block>
        <Block fadeIn className="h-60 w-2/5 flex-col justify-start pt-20 delay-1000">
          <Button size="lg" href="/setup/content/import" className="flex w-full items-center gap-4">
            <span>Use Portfolio Example</span>
            <LayoutTemplate size={16} />
          </Button>
          <p className="mt-6 w-full text-center text-sm font-light text-muted-foreground">
            Import content from a sample, prebuilt professional portfolio and make it your own.
          </p>
        </Block>
      </div>
    </div>
  )
}
