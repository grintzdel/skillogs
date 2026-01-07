import React from 'react'
import type { FeaturesSectionBlock as FeaturesSectionType } from '@/payload-types'
import { cn } from '@/utilities/ui'
import { Icon } from '@/components/Icon'

type Props = {
  className?: string
} & FeaturesSectionType

export const FeaturesSectionBlock: React.FC<Props> = ({
  title,
  subtitle,
  features,
  columns = '3',
  backgroundColor = 'white',
  padding = 'lg',
  className,
}) => {
  const sectionClasses = cn(
    'w-full',
    {
      'bg-white': backgroundColor === 'white',
      'bg-gray-50': backgroundColor === 'gray',
      'bg-blue-600 text-white': backgroundColor === 'primary',
      'bg-gray-900 text-white': backgroundColor === 'dark',

      'py-8': padding === 'sm',
      'py-12 md:py-16': padding === 'md',
      'py-16 md:py-24': padding === 'lg',
      'py-20 md:py-32': padding === 'xl',
    },
    className,
  )

  const gridClasses = cn('grid gap-8', {
    'grid-cols-1 md:grid-cols-2': columns === '2',
    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': columns === '3',
    'grid-cols-1 md:grid-cols-2 lg:grid-cols-4': columns === '4',
  })

  return (
    <section className={sectionClasses}>
      <div className="max-w-7xl mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
          </div>
        )}

        {features && features.length > 0 && (
          <div className={gridClasses}>
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                {feature.icon && (
                  <div className="text-4xl mb-4">
                    <Icon icon={feature.icon} className="inline-block" aria-hidden />
                  </div>
                )}
                {feature.title && <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>}
                {feature.description && <p className="text-gray-600">{feature.description}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
