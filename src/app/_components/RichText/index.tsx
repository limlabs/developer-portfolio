'use client'

import React from 'react'

import { CustomRenderers, Serialize as SerializeContent } from './serialize'

export const RichText: React.FC<{
  content: any
  customRenderers?: CustomRenderers
}> = ({ content, customRenderers }) => {
  if (!content) {
    return null
  }

  return <SerializeContent content={content} customRenderers={customRenderers} />
}
