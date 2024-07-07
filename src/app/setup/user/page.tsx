import { CreateUserForm } from './form'

export default function SetupUserPage() {
  return (
    <div className="mx-auto w-2/3 max-w-screen-md">
      <h1 className="text-3xl font-medium">Create a User</h1>
      <p className="mt-4">First, let's create a user login to protect your backend.</p>
      <CreateUserForm />
    </div>
  )
}
