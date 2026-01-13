import type { CollectionAfterChangeHook } from 'payload'

export const revalidateRedirects: CollectionAfterChangeHook = ({ doc, req: { payload } }) => {
  payload.logger.info(`Revalidating redirects`)

  // Dynamic import to avoid bundling revalidateTag in client bundles
  if (typeof window === 'undefined') {
    import('next/cache').then(({ revalidateTag }) => {
      revalidateTag('redirects')
    })
  }

  return doc
}
