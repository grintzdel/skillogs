import React from 'react'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { cn } from '@/utilities/ui'

type Props = {
  direction?: 'column' | 'row'
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  flexWrap?: 'nowrap' | 'wrap'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  blocks?: any[]
  className?: string
}

export const ContainerBlock: React.FC<Props> = ({
  direction = 'column',
  justifyContent = 'start',
  alignItems = 'start',
  gap = 'md',
  flexWrap = 'nowrap',
  padding = 'none',
  blocks,
  className,
}) => {
  const containerClasses = cn(
    'flex w-full',
    {
      'flex-col': direction === 'column',
      'flex-row': direction === 'row',

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
      'items-baseline': alignItems === 'baseline',

      'gap-0': gap === 'none',
      'gap-1': gap === 'xs',
      'gap-2': gap === 'sm',
      'gap-4': gap === 'md',
      'gap-6': gap === 'lg',
      'gap-8': gap === 'xl',

      'flex-nowrap': flexWrap === 'nowrap',
      'flex-wrap': flexWrap === 'wrap',

      'p-0': padding === 'none',
      'p-4': padding === 'sm',
      'p-6': padding === 'md',
      'p-8': padding === 'lg',
    },
    className,
  )

  return <div className={containerClasses}>{blocks && <RenderBlocks blocks={blocks} />}</div>
}
