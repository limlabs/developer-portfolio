import { getPayload } from '@/utilities/api'
import { CreateUserForm } from './form'
import { redirect } from 'next/navigation'

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
      <h1 className="text-3xl font-medium">Create a User</h1>
      <p className="mt-4">First, let's create a user login to protect your backend.</p>
      <CreateUserForm />
    </div>
  )
}
