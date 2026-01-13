import type { GlobalAfterChangeHook } from 'payload'

export const revalidateHeader: GlobalAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating header`)

    // Dynamic import to avoid bundling revalidateTag in client bundles
    if (typeof window === 'undefined') {
      import('next/cache').then(({ revalidateTag }) => {
        revalidateTag('global_header')
      })
    }
  }

  return doc
}
