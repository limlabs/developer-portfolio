import type { AfterChangeHook } from 'payload/dist/collections/config/types'

export const formatAppURL = ({ doc }): string => {
  const { pathname } = new URL(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/project/${doc.slug}`)
  return pathname
}

// Revalidate the project in the background, so the user doesn't have to wait
// Notice that the hook itself is not async and we are not awaiting `revalidate`
// Only revalidate existing docs that are published
export const revalidateProject: AfterChangeHook = ({ doc, req, operation }) => {
  if (operation === 'update' && doc._status === 'published') {
    const url = formatAppURL({ doc })

    const revalidate = async (): Promise<void> => {
      try {
        const res = await fetch(
          `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/revalidate?secret=${process.env.REVALIDATION_KEY}&tag=projects/${doc.slug}`,
        )

        if (res.ok) {
          req.payload.logger.info(`Revalidated path ${url}`)
        } else {
          req.payload.logger.error(`Error revalidating path ${url}: ${await res.text()}`)
        }
      } catch (err: unknown) {
        req.payload.logger.error(`Error hitting revalidate route for ${url}`)
      }
    }

    revalidate()
  }

  return doc
}
