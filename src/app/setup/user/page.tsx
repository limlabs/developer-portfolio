import { getPayload } from '@/utilities/api'
import { CreateUserForm } from './form'
import { redirect } from 'next/navigation'
import { SetupTitle } from '@/components/setup/setupTitle'
import { SetupMessage } from '@/components/setup/setupMessage'
import { Block } from '@/components/ui/block'

export default async function SetupUserPage() {
  const payload = await getPayload()
  const result = await payload.find({
    collection: 'users',
  })

  if (result.totalDocs > 0) {
    redirect('/setup/content')
  }

  return (
    <div className="mx-auto w-2/3 max-w-screen-md">
      <SetupTitle>Create a User</SetupTitle>
      <SetupMessage>First, let's create a user login to protect your backend.</SetupMessage>
      <Block fadeIn className="mt-4 delay-1000">
        <CreateUserForm />
      </Block>
    </div>
  )
}
