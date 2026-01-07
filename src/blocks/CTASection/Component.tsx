import React from 'react'
import type { CTASectionBlock as CTASectionType } from '@/payload-types'
import { cn } from '@/utilities/ui'
import Link from 'next/link'

type Props = {
  className?: string
} & CTASectionType

export const CTASectionBlock: React.FC<Props> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  backgroundColor = 'primary',
  padding = 'lg',
  className,
}) => {
  const sectionClasses = cn(
    'w-full',
    {
      'bg-blue-600 text-white': backgroundColor === 'primary',
      'bg-purple-600 text-white': backgroundColor === 'secondary',
      'bg-gray-100 text-gray-900': backgroundColor === 'gray',
      'bg-gray-900 text-white': backgroundColor === 'dark',

      'py-12 md:py-16': padding === 'md',
      'py-16 md:py-24': padding === 'lg',
      'py-20 md:py-32': padding === 'xl',
    },
    className,
  )

  return (
    <section className={sectionClasses}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
        {description && <p className="text-lg md:text-xl mb-8 opacity-90">{description}</p>}

        {primaryButton?.text && primaryButton?.url && (
          <div className="flex gap-4 justify-center">
            <Link
              href={primaryButton.url}
              className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              {primaryButton.text}
            </Link>
            {secondaryButton?.text && secondaryButton?.url && (
              <Link
                href={secondaryButton.url}
                className="px-8 py-3 border-2 border-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors font-semibold"
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
