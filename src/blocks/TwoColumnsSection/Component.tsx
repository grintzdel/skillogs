import React from 'react'
import type { TwoColumnsSectionBlock as TwoColumnsSectionType } from '@/payload-types'
import { cn } from '@/utilities/ui'
import Image from 'next/image'

type Props = {
  className?: string
} & TwoColumnsSectionType

export const TwoColumnsSectionBlock: React.FC<Props> = ({
  leftColumn,
  rightColumn,
  columnRatio = '50-50',
  verticalAlignment = 'center',
  backgroundColor = 'white',
  padding = 'lg',
  className,
}) => {
  const sectionClasses = cn(
    'w-full',
    {
      'bg-white': backgroundColor === 'white',
      'bg-gray-50': backgroundColor === 'gray',
      'bg-gray-900 text-white': backgroundColor === 'dark',

      'py-8': padding === 'sm',
      'py-12 md:py-16': padding === 'md',
      'py-16 md:py-24': padding === 'lg',
      'py-20 md:py-32': padding === 'xl',
    },
    className,
  )

  const gridClasses = cn('grid grid-cols-1 md:grid-cols-12 gap-8', {
    'items-start': verticalAlignment === 'start',
    'items-center': verticalAlignment === 'center',
    'items-end': verticalAlignment === 'end',
  })

  const leftColClasses = cn({
    'md:col-span-6': columnRatio === '50-50',
    'md:col-span-7': columnRatio === '60-40',
    'md:col-span-5': columnRatio === '40-60',
    'md:col-span-8': columnRatio === '70-30',
    'md:col-span-4': columnRatio === '30-70',
  })

  const rightColClasses = cn({
    'md:col-span-6': columnRatio === '50-50',
    'md:col-span-5': columnRatio === '60-40',
    'md:col-span-7': columnRatio === '40-60',
    'md:col-span-4': columnRatio === '70-30',
    'md:col-span-8': columnRatio === '30-70',
  })

  const renderColumn = (column: any) => {
    if (!column) return null

    return (
      <div>
        {column.title && <h3 className="text-2xl font-bold mb-4">{column.title}</h3>}
        {column.content && (
          <div className="prose max-w-none mb-4" dangerouslySetInnerHTML={{ __html: column.content }} />
        )}
        {column.image && typeof column.image === 'object' && column.image.url && (
          <div className="relative w-full h-64">
            <Image
              src={column.image.url}
              alt={column.image.alt || ''}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    )
  }

  return (
    <section className={sectionClasses}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={gridClasses}>
          <div className={leftColClasses}>{renderColumn(leftColumn)}</div>
          <div className={rightColClasses}>{renderColumn(rightColumn)}</div>
        </div>
      </div>
    </section>
  )
}
