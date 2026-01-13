import React from 'react'
import type { HeadingBlock as HeadingBlockType } from '@/payload-types'
import { cn } from '@/utilities/ui'

type Props = {
  className?: string
} & HeadingBlockType

export const HeadingBlock: React.FC<Props> = ({
  text,
  level = 'h2',
  alignment = 'left',
  color = 'default',
  className,
}) => {
  const Tag = level as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  const headingClasses = cn(
    'font-bold',
    {
      'text-4xl md:text-5xl lg:text-6xl': level === 'h1',
      'text-3xl md:text-4xl lg:text-5xl': level === 'h2',
      'text-2xl md:text-3xl lg:text-4xl': level === 'h3',
      'text-xl md:text-2xl lg:text-3xl': level === 'h4',
      'text-lg md:text-xl lg:text-2xl': level === 'h5',
      'text-base md:text-lg lg:text-xl': level === 'h6',

      'text-left': alignment === 'left',
      'text-center': alignment === 'center',
      'text-right': alignment === 'right',

      'text-gray-900': color === 'default',
      'text-blue-600': color === 'primary',
      'text-purple-600': color === 'secondary',
      'text-gray-600': color === 'gray',
      'text-white': color === 'white',
    },
    className,
  )

  return <Tag className={headingClasses}>{text}</Tag>
}
