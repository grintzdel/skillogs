import React from 'react'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { cn } from '@/utilities/ui'

type Props = {
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  alignItems?: 'start' | 'center' | 'end' | 'stretch'
  flexWrap?: 'nowrap' | 'wrap'
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  backgroundColor?: 'transparent' | 'white' | 'gray-light' | 'gray' | 'primary' | 'secondary'
  blocks?: any[]
  className?: string
}

export const RowBlock: React.FC<Props> = ({
  justifyContent = 'start',
  alignItems = 'center',
  flexWrap = 'wrap',
  gap = 'md',
  padding = 'none',
  backgroundColor = 'transparent',
  blocks,
  className,
}) => {
  const rowClasses = cn(
    'flex flex-row w-full',
    {
      'justify-start': justifyContent === 'start',
      'justify-center': justifyContent === 'center',
      'justify-end': justifyContent === 'end',
      'justify-between': justifyContent === 'between',
      'justify-around': justifyContent === 'around',
      'justify-evenly': justifyContent === 'evenly',

      'items-start': alignItems === 'start',
      'items-center': alignItems === 'center',
      'items-end': alignItems === 'end',
      'items-stretch': alignItems === 'stretch',

      'flex-nowrap': flexWrap === 'nowrap',
      'flex-wrap': flexWrap === 'wrap',

      'gap-0': gap === 'none',
      'gap-1': gap === 'xs',
      'gap-2': gap === 'sm',
      'gap-4': gap === 'md',
      'gap-6': gap === 'lg',
      'gap-8': gap === 'xl',

      'p-0': padding === 'none',
      'p-4': padding === 'sm',
      'p-6': padding === 'md',
      'p-8': padding === 'lg',

      'bg-transparent': backgroundColor === 'transparent',
      'bg-white': backgroundColor === 'white',
      'bg-gray-50': backgroundColor === 'gray-light',
      'bg-gray-100': backgroundColor === 'gray',
      'bg-blue-600 text-white': backgroundColor === 'primary',
      'bg-purple-600 text-white': backgroundColor === 'secondary',
    },
    className,
  )

  return <div className={rowClasses}>{blocks && <RenderBlocks blocks={blocks} />}</div>
}
