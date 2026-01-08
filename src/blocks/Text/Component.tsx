import React from 'react'
import type { TextBlock as TextBlockType } from '@/payload-types'
import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'

type Props = {
  className?: string
} & TextBlockType

export const TextBlock: React.FC<Props> = ({
  richText,
  maxWidth = 'prose',
  padding = 'md',
  className,
}) => {
  const maxWidthClasses = {
    none: '',
    sm: 'max-w-sm',
    md: 'max-w-md',
    prose: 'max-w-prose',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full',
  }

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  }

  return (
    <div className={cn(paddingClasses[padding!], className)}>
      <div className={cn('w-full mx-auto', maxWidthClasses[maxWidth!])}>
        <RichText data={richText} enableGutter={false} />
      </div>
    </div>
  )
}
