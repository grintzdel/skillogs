import React from 'react'
import type { CardGridSectionBlock as CardGridSectionBlockType } from '@/payload-types'
import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'

type Props = {
  className?: string
} & CardGridSectionBlockType

export const CardGridSectionBlock: React.FC<Props> = ({
  title,
  subtitle,
  cards,
  enableCard = true,
  cardBackgroundColor,
  cardBorderColor,
  cardBorderRadius = 'md',
  backgroundType = 'color',
  backgroundColor = 'white',
  backgroundImage,
  backgroundOverlay = false,
  padding = 'lg',
  className,
}) => {
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  }

  const backgroundClasses = {
    white: 'bg-white',
    'gray-light': 'bg-gray-100',
    gray: 'bg-gray-200',
    'gray-dark': 'bg-gray-800 text-white',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    dark: 'bg-gray-900 text-white',
  }

  const cardsCount = cards?.length || 0
  let columnClasses = 'grid-cols-1'

  if (cardsCount === 2) {
    columnClasses = 'grid-cols-1 md:grid-cols-2'
  } else if (cardsCount === 3) {
    columnClasses = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  } else if (cardsCount >= 4) {
    columnClasses = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  const borderRadiusClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  }

  const cardStyle = enableCard
    ? {
        backgroundColor: cardBackgroundColor || undefined,
        borderColor: cardBorderColor || undefined,
        borderWidth: cardBorderColor ? '1px' : undefined,
        borderStyle: cardBorderColor ? 'solid' : undefined,
      }
    : {}

  const backgroundImageUrl =
    backgroundType === 'image' &&
    backgroundImage &&
    typeof backgroundImage === 'object' &&
    backgroundImage !== null
      ? backgroundImage.url
      : null

  const sectionStyle: React.CSSProperties = {
    ...(backgroundImageUrl && {
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }),
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .cardgrid-fullwidth {
            margin-left: calc(-50vw + 50%);
            margin-right: calc(-50vw + 50%);
            padding-left: calc(50vw - 50%);
            padding-right: calc(50vw - 50%);
          }
        `,
        }}
      />

      <div className={cn('cardgrid-fullwidth relative', className)} style={sectionStyle}>
        {backgroundImageUrl && backgroundOverlay && (
          <div className="absolute inset-0 bg-black/50 -z-10" />
        )}

        {backgroundType === 'color' && (
          <div className={cn('absolute inset-0 -z-10', backgroundClasses[backgroundColor!])} />
        )}

        <div className={cn('relative', paddingClasses[padding!])}>
          <div>
            {/* Section Title */}
            {title && (
              <div className="mb-4 text-center">
                <RichText data={title} enableGutter={false} enableProse={false} />
              </div>
            )}

            {subtitle && (
              <div className="mb-12 text-center">
                <RichText data={subtitle} enableGutter={false} enableProse={false} />
              </div>
            )}

            {cards && cards.length > 0 && (
              <div className={cn('grid gap-4', columnClasses)}>
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex flex-col',
                      enableCard && 'p-4',
                      enableCard && borderRadiusClasses[cardBorderRadius!],
                    )}
                    style={cardStyle}
                  >
                    {/* Card Number/Step */}
                    {card.number && (
                      <div className="mb-2">
                        <RichText data={card.number} enableGutter={false} enableProse={false} />
                      </div>
                    )}

                    {/* Card Media - Position Top (avant le titre) */}
                    {card.media &&
                      typeof card.media === 'object' &&
                      card.media !== null &&
                      card.mediaPosition !== 'bottom' && (
                        <div className="mb-4">
                          <Media resource={card.media} className="h-auto w-full" />
                        </div>
                      )}

                    {/* Card Title */}
                    {card.title && (
                      <div className="mb-2">
                        <RichText data={card.title} enableGutter={false} enableProse={false} />
                      </div>
                    )}

                    {/* Card Description */}
                    {card.description && (
                      <div className={cn(card.mediaPosition === 'bottom' ? 'mb-4' : '')}>
                        <RichText
                          data={card.description}
                          enableGutter={false}
                          enableProse={false}
                        />
                      </div>
                    )}

                    {/* Card Media - Position Bottom (après la description) */}
                    {card.media &&
                      typeof card.media === 'object' &&
                      card.media !== null &&
                      card.mediaPosition === 'bottom' && (
                        <div>
                          <Media resource={card.media} className="h-auto w-full" />
                        </div>
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
