import React from 'react'
import type { HeroSectionBlock as HeroSectionType } from '@/payload-types'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  className?: string
} & HeroSectionType

export const HeroSectionBlock: React.FC<Props> = ({
  eyebrow,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  image,
  layout = 'centered',
  backgroundColor = 'transparent',
  padding = 'lg',
  className,
}) => {
  const sectionClasses = cn(
    'w-full',
    {
      'bg-transparent': backgroundColor === 'transparent',
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

  const containerClasses = cn('max-w-7xl mx-auto px-4', {
    'text-center': layout === 'centered',
    'text-left': layout === 'left',
    'text-right': layout === 'right',
  })

  return (
    <section className={sectionClasses}>
      <div className={containerClasses}>
        <div
          className={cn('grid gap-8 items-center', {
            'grid-cols-1': !image || layout === 'centered',
            'grid-cols-1 md:grid-cols-2': image && layout !== 'centered',
          })}
        >
          <div className={cn('flex flex-col gap-8', { 'order-2': layout === 'right' })}>
            {eyebrow && <p className="text-[20px] font-bold">{eyebrow}</p>}
            {title && <h1 className="text-[40px] font-bold text-[#3c3c3c]">{title}</h1>}
            {subtitle && <p className="text-lg md:text-xl text-gray-600">{subtitle}</p>}

            {(primaryButton?.text || secondaryButton?.text) && (
              <div
                className={cn('flex gap-4', {
                  'justify-center': layout === 'centered',
                  'justify-start': layout === 'left',
                  'justify-end': layout === 'right',
                })}
              >
                {primaryButton?.text && primaryButton?.url && (
                  <Link
                    href={primaryButton.url}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#bcff5f] text-black text-[16px] font-bold rounded-[6px] hover:bg-[#a8e54f] transition-colors whitespace-nowrap"
                  >
                    {primaryButton.startIcon && <span>{primaryButton.startIcon}</span>}
                    {primaryButton.text}
                    {primaryButton.endIcon && <span>{primaryButton.endIcon}</span>}
                  </Link>
                )}
                {secondaryButton?.text && secondaryButton?.url && (
                  <Link
                    href={secondaryButton.url}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#5036ff] text-[#5036ff] text-[16px] font-bold rounded-[6px] hover:bg-[#5036ff]/5 transition-colors whitespace-nowrap"
                  >
                    {secondaryButton.startIcon && <span>{secondaryButton.startIcon}</span>}
                    {secondaryButton.text}
                    {secondaryButton.endIcon && <span>{secondaryButton.endIcon}</span>}
                  </Link>
                )}
              </div>
            )}
          </div>

          {image && typeof image === 'object' && image.url && (
            <div className={cn('relative w-full h-96', { 'order-1': layout === 'right' })}>
              <Image
                src={image.url}
                alt={image.alt || 'Hero image'}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
