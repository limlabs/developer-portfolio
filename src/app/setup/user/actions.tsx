'use server'

import { getPayload } from '@/utilities/api'

export const createUser = async (formData: FormData) => {
  const email = formData.get('email')
  const password = formData.get('password')

  if (typeof email !== 'string') {
    throw new Error('Email is required.')
  }

  if (typeof password !== 'string') {
    throw new Error('Password is required.')
  }

  const payload = await getPayload()

  const result = await payload.find({
    collection: 'users',
  })

  if (result.totalDocs > 0) {
    throw new Error('Cannot create first user. At least one user already exists.')
  }

  await payload.create({
    collection: 'users',
    data: {
      email,
      password,
    },
  })
}
