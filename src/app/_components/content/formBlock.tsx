'use client'
import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Data } from 'payload/dist/admin/components/forms/Form/types'

import { Form as FormTypes } from '../../../payload-types'
import { Block } from '../ui/block'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { RichText } from '../ui/richText'
import { Textarea } from '../ui/textarea'

type ErrorType = {
  status: string
  message: string
}

export type FormBlockProps = {
  form: FormTypes
  intro?: unknown
}

export const FormBlock: FC<FormBlockProps> = props => {
  const {
    form: formFromProps,
    form: { id: formID, submitButtonLabel },
    intro,
  } = props

  const formMethods = useForm()
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = formMethods

  const [error, setError] = useState<ErrorType | undefined>()
  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean | undefined>()

  const onSubmit = async (data: Data) => {
    setIsLoading(true) // Set loading state when submitting

    const dataToSend = Object.entries(data).map(([name, value]) => ({
      field: name,
      value,
    }))

    try {
      const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Correct typo: "Content-Types" to "Content-Type"
        },
        body: JSON.stringify({
          form: formID,
          submissionData: dataToSend,
        }),
      })

      const res = await req.json()

      if (req.status >= 400) {
        setError({
          status: res.status,
          message: res.errors?.[0] || 'Internal Server Error', // Use optional chaining
        })
      }

      setIsLoading(false) // Clear loading state
      setHasSubmitted(true)
    } catch (error) {
      setError({
        status: 'Error',
        message: 'An error occurred while submitting the form.',
      })
      setIsLoading(false) // Clear loading state
    }
  }

  return (
    <Block className="w-full flex flex-col">
      {intro && <RichText content={intro} />}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full max-w-lg">
        {error && <div>{error.message}</div>}
        {formFromProps.fields.map((field, index) => {
          switch (field.blockType) {
            case 'text':
              return (
                <Input
                  key={index}
                  type="text"
                  placeholder={field.label}
                  {...register(field.name, { required: field.required })}
                />
              )
            case 'email':
              return (
                <Input
                  key={index}
                  type="email"
                  placeholder={field.label}
                  {...register(field.name, { required: field.required })}
                />
              )
            case 'textarea':
              return (
                <Textarea
                  key={index}
                  placeholder={field.label}
                  {...register(field.name, { required: field.required })}
                />
              )
            default:
              return null
          }
        })}
        <Button type="submit" disabled={isLoading || !isValid}>
          {submitButtonLabel}
        </Button>
      </form>
    </Block>
  )
}
