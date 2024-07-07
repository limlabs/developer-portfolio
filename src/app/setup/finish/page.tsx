import { Button } from '@/components/ui/button'

export default function FinishSetupPage() {
  return (
    <div>
      <h1>Setup Complete</h1>
      <p>Your site is now set up and ready to use!</p>
      <div>
        <Button href="/">Visit Site</Button>
        <Button href="/admin">Edit Content</Button>
      </div>
    </div>
  )
}
