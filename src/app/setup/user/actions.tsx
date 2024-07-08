'use server'

import { getPayload } from '@/utilities/api'
import { cookies } from 'next/headers'

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

export const loginUser = async (formData: FormData) => {
  const email = formData.get('email')
  const password = formData.get('password')
  console.log('login', email)

  if (typeof email !== 'string') {
    throw new Error('Email is required.')
  }

  if (typeof password !== 'string') {
    throw new Error('Password is required.')
  }

  const payload = await getPayload()
  const result = await payload.login({
    collection: 'users',
    data: {
      email,
      password,
    },
  })

  if (!result.token || result.exp === undefined) {
    throw new Error('An error occurred while logging in. Please try again.')
  }

  cookies().set('payload-token', result.token, {
    sameSite: 'strict',
    secure: true,
    path: '/',
    httpOnly: true,
    expires: result.exp * 1000,
  })
}
