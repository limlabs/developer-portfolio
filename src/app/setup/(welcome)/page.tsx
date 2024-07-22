import React from "react"

import { ArrowRight } from "lucide-react"

import { SetupMessage } from "@/components/setup/setupMessage"
import { SetupTitle } from "@/components/setup/setupTitle"
import { Block } from "@/components/ui/block"
import { Button } from "@/components/ui/button"

export default function Welcome() {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-6">
      <SetupTitle>Welcome to your new site!</SetupTitle>
      <SetupMessage>This setup will help you through the remaining steps to go live.</SetupMessage>
      <Block fadeIn className="mx-auto mt-2 flex items-center gap-4 text-4xl font-bold delay-700">
        <Button size={"lg"} variant="default" href="/setup/user">
          Get Started
          <span className="ml-2">
            <ArrowRight size={16} />
          </span>
        </Button>
      </Block>
    </div>
  )
}
