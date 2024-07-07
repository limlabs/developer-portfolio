import { SetupTitle } from '@/components/setup/setupTitle'
import { SetupMessage } from '@/components/setup/setupMessage'
import { Block } from '@/components/ui/block'
import { Button } from '@/components/ui/button'
import { Globe, Edit2 } from 'lucide-react'

export default function FinishSetupPage() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <SetupTitle>Setup Complete</SetupTitle>
      <SetupMessage>Your site is now set up and ready to use!</SetupMessage>
      <Block fadeIn className="mx-auto mt-4 w-1/2 gap-6 delay-1000 duration-300 lg:justify-center">
        <Button size="lg" variant="outline" href="/admin">
          Edit Content
          <span className="ml-2">
            <Edit2 size={16} />
          </span>
        </Button>
        <Button size="lg" href="/">
          Visit Site
          <span className="ml-2">
            <Globe size={16} />
          </span>
        </Button>
      </Block>
    </div>
  )
}
