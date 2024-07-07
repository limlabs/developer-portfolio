'use client'
import { createUser } from './actions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const FormSchema = z
  .object({
    email: z.string().min(1, 'Please specify an email').email('Please specify a valid email'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    passwordConfirmation: z.string(),
  })
  .refine(data => data.passwordConfirmation === data.password, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  })

export function CreateUserForm() {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
    },
  })

  async function process(data: z.infer<typeof FormSchema>) {
    const formData = new FormData()
    formData.append('email', data.email)
    formData.append('password', data.password)

    try {
      await createUser(formData)
      router.push('/setup/content')
    } catch (error) {
      setError((error as Error)?.message ?? error)
    } finally {
      setSubmitting(false)
    }
  }

  const buttonText = submitting ? 'Creating User...' : 'Create User'
  const buttonDisabled = submitting

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(process)} className="mt-4 w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={buttonDisabled}>
          {buttonText}
        </Button>
      </form>
      {error && <FormMessage className="mt-4 text-destructive">{error}</FormMessage>}
    </Form>
  )
}
