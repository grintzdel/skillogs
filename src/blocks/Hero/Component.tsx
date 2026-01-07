import React from 'react'
import type { HeroBlock as HeroBlockType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

type Props = {
  className?: string
} & HeroBlockType

export const HeroBlock: React.FC<Props> = ({
  eyebrow,
  title,
  subtitle,
  description,
  buttons,
  layout = 'centered',
  columns = 'one',
  media,
  mediaPosition = 'right',
  backgroundType = 'color',
  backgroundColor = 'white',
  gradientType,
  backgroundImage,
  backgroundOverlay,
  padding = 'lg',
  fullHeight,
  className,
}) => {
  const containerClasses = cn(
    'relative w-full',
    {
      'py-8': padding === 'sm',
      'py-12': padding === 'md',
      'py-16 md:py-24': padding === 'lg',
      'py-20 md:py-32': padding === 'xl',

      'min-h-screen flex items-center': fullHeight,
    },
    className,
  )

  const backgroundClasses = cn('absolute inset-0 -z-10', {
    'bg-white': backgroundType === 'color' && backgroundColor === 'white',
    'bg-gray-50': backgroundType === 'color' && backgroundColor === 'gray-light',
    'bg-gray-100': backgroundType === 'color' && backgroundColor === 'gray',
    'bg-gray-800': backgroundType === 'color' && backgroundColor === 'gray-dark',
    'bg-blue-600': backgroundType === 'color' && backgroundColor === 'primary',
    'bg-purple-600': backgroundType === 'color' && backgroundColor === 'secondary',
    'bg-gray-900': backgroundType === 'color' && backgroundColor === 'dark',

    'bg-gradient-to-r from-blue-500 to-purple-600':
      backgroundType === 'gradient' && gradientType === 'linear',
    'bg-gradient-radial from-blue-500 to-purple-600':
      backgroundType === 'gradient' && gradientType === 'radial',
  })

  const contentClasses = cn('container mx-auto px-4', {
    'text-center': layout === 'centered',
    'text-left': layout === 'left',
    'grid md:grid-cols-2 gap-8 items-center': layout === 'split',

    'max-w-2xl mx-auto': columns === 'one' && layout !== 'split',
    'max-w-4xl mx-auto': columns === 'two' && layout !== 'split',
  })

  const textColor =
    ['dark', 'primary', 'secondary', 'gray-dark'].includes(backgroundColor || '') ||
    backgroundType === 'gradient' ||
    (backgroundType === 'image' && backgroundOverlay)
      ? 'text-white'
      : 'text-gray-900'

  return (
    <section className={containerClasses}>
      <div className={backgroundClasses}>
        {backgroundType === 'image' && backgroundImage && typeof backgroundImage !== 'string' && (
          <>
            <Media
              resource={backgroundImage}
              className="w-full h-full object-cover"
              imgClassName="w-full h-full object-cover"
            />
            {backgroundOverlay && <div className="absolute inset-0 bg-black/50" />}
          </>
        )}
      </div>

      <div className={contentClasses}>
        <div
          className={cn('flex flex-col gap-8', {
            'order-2': layout === 'split' && mediaPosition === 'left',
          })}
        >
          {eyebrow && <p className={cn('text-[20px] font-bold', textColor)}>{eyebrow}</p>}

          {title && <h1 className={cn('text-[40px] font-bold', textColor)}>{title}</h1>}

          {subtitle && (
            <p className={cn('text-xl md:text-2xl', textColor, 'opacity-90')}>{subtitle}</p>
          )}

          {description && (
            <div className={cn('prose max-w-none', textColor)}>
              <RichText data={description} enableGutter={false} />
            </div>
          )}

          {buttons && buttons.length > 0 && (
            <div
              className={cn('flex flex-wrap gap-4', {
                'justify-center': layout === 'centered',
                'justify-start': layout !== 'centered',
              })}
            >
              {buttons.map((button, index) => {
                if (!button.link) return null

                const buttonClasses = cn(
                  'inline-flex items-center gap-2 justify-center font-bold transition-colors px-4 py-2 text-[16px] rounded-[6px] whitespace-nowrap',
                  {
                    'bg-[#bcff5f] text-black hover:bg-[#a8e54f]': button.style === 'primary',
                    'bg-gray-600 text-white hover:bg-gray-700': button.style === 'secondary',
                    'bg-transparent border border-[#5036ff] text-[#5036ff] hover:bg-[#5036ff]/5 font-normal':
                      button.style === 'outline',
                    'text-white hover:bg-white/10': button.style === 'ghost',
                  },
                )

                return (
                  <CMSLink key={index} {...button.link} appearance="link" className={buttonClasses}>
                    {button.startIcon && <span>{button.startIcon}</span>}
                    {button.label}
                    {button.endIcon && <span>{button.endIcon}</span>}
                  </CMSLink>
                )
              })}
            </div>
          )}
        </div>

        {layout === 'split' && media && typeof media !== 'string' && (
          <div
            className={cn('relative', {
              'order-1': mediaPosition === 'left',
            })}
          >
            <Media resource={media} className="rounded-lg overflow-hidden shadow-2xl" />
          </div>
        )}
      </div>
    </section>
  )
}
