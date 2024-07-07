import { getPayload } from '@/utilities/api'
import { CreateUserForm, LoginForm } from './form'
import { redirect } from 'next/navigation'
import { SetupTitle } from '@/components/setup/setupTitle'
import { SetupMessage } from '@/components/setup/setupMessage'
import { Block } from '@/components/ui/block'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function SetupUserPage() {
  const payload = await getPayload()
  const users = await payload.find({
    collection: 'users',
  })

  if (users.totalDocs < 1) {
    return (
      <div className="mx-auto flex w-2/3 max-w-screen-md flex-col gap-4">
        <SetupTitle>Create a User</SetupTitle>
        <SetupMessage>First, let's create a user login to protect your backend.</SetupMessage>
        <Block fadeIn className="mt-0 delay-1000">
          <CreateUserForm />
        </Block>
      </div>
    )
  }

  const token = cookies().get('payloadToken')
  const authResult = await payload.auth({
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  })

  if (authResult.permissions.canAccessAdmin) {
    redirect('/setup/content')
  }

  return (
    <div className="mx-auto flex w-2/3 max-w-screen-md flex-col gap-4">
      <SetupTitle>Existing User Found</SetupTitle>
      <SetupMessage>
        It looks like you already have a user in the database.
        <br />
        Please login to continue.
      </SetupMessage>
      <Block fadeIn className="mt-0 delay-1000">
        <LoginForm />
      </Block>
    </div>
  )
}
