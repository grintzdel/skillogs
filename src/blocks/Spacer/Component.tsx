import React from 'react'
import type { SpacerBlock as SpacerBlockType } from '@/payload-types'
import { cn } from '@/utilities/ui'

type Props = {
  className?: string
} & SpacerBlockType

export const SpacerBlock: React.FC<Props> = ({ height = 'md', className }) => {
  const spacerClasses = cn(
    'w-full',
    {
      'h-4': height === 'xs',
      'h-8': height === 'sm',
      'h-16': height === 'md',
      'h-24': height === 'lg',
      'h-32': height === 'xl',
      'h-40': height === '2xl',
    },
    className,
  )

  return <div className={spacerClasses} aria-hidden="true" />
}
