import React from 'react'
import { Block } from '@/components/ui/block'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LayoutTemplate, Wrench } from 'lucide-react'

export default function Welcome() {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-6">
      <Block fadeIn>
        <h1 className="text-center text-4xl font-medium">Welcome to your new site!</h1>
      </Block>
      <Block fadeIn className="text-center text-lg delay-500">
        To continue setup, choose one of the following options:
      </Block>
      <div className="mx-auto mt-2 flex items-center gap-4 text-4xl font-bold">
        <Block fadeIn className="delay-700">
          <Link href="/setup/finish">
            <Button size={'lg'} variant="outline">
              <span className="flex w-full items-center gap-4">
                <span>Start from scratch</span>
                <Wrench size={16} />
              </span>
            </Button>
          </Link>
        </Block>
        <Block fadeIn className="delay-1000">
          <Link href="/setup/content">
            <Button asChild size={'lg'}>
              <span className="flex w-full items-center gap-4">
                <span>Use an example</span>
                <LayoutTemplate size={16} />
              </span>
            </Button>
          </Link>
        </Block>
      </div>
    </div>
  )
}
