import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const BackButton = () => {
  return (
    <Link href="/">
      <Button>Back to Profile</Button>
    </Link>
  )
}
