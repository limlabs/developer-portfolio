import Link from 'next/link'

import { Button } from '../../../_components/ui/button'

export const BackButton = () => {
  return (
    <div className="px-6 lg:px-0">
      <Link href="/">
        <Button>Back to Profile</Button>
      </Link>
    </div>
  )
}
