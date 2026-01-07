import React from 'react'
import type { SectionBlock as SectionBlockType } from '@/payload-types'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { cn } from '@/utilities/ui'

type Props = {
  className?: string
} & SectionBlockType

export const SectionBlock: React.FC<Props> = ({
  blocks,
  backgroundColor = 'transparent',
  padding = 'md',
  containerWidth = 'container',
  className,
}) => {
  const sectionClasses = cn(
    'w-full',
    {
      'bg-transparent': backgroundColor === 'transparent',
      'bg-white': backgroundColor === 'white',
      'bg-gray-50': backgroundColor === 'gray-light',
      'bg-gray-100': backgroundColor === 'gray',
      'bg-blue-600 text-white': backgroundColor === 'primary',
      'bg-purple-600 text-white': backgroundColor === 'secondary',
      'bg-gray-900 text-white': backgroundColor === 'dark',

      'py-0': padding === 'none',
      'py-8': padding === 'sm',
      'py-12 md:py-16': padding === 'md',
      'py-16 md:py-24': padding === 'lg',
      'py-20 md:py-32': padding === 'xl',
    },
    className,
  )

  const containerClasses = cn('mx-auto px-4', {
    'max-w-full': containerWidth === 'full',
    'max-w-7xl': containerWidth === 'container',
    'max-w-4xl': containerWidth === 'narrow',
  })

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        {blocks && <RenderBlocks blocks={blocks} />}
      </div>
    </section>
  )
}
