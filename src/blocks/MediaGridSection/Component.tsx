import React from 'react'
import type { MediaGridSectionBlock as MediaGridSectionBlockType } from '@/payload-types'
import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'
import { Media } from '@/components/Media'

type Props = {
  className?: string
} & MediaGridSectionBlockType

export const MediaGridSectionBlock: React.FC<Props> = ({
  title,
  subtitle,
  description,
  medias,
  backgroundType = 'color',
  backgroundColor = 'white',
  backgroundImage,
  backgroundOverlay = false,
  padding = 'lg',
  mediaSize = 'medium',
  className,
}) => {
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  }

  const mediaSizeClasses = {
    small: 'max-w-[100px]',
    medium: 'max-w-[150px]',
    large: 'max-w-[220px]',
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
          .mediagrid-fullwidth {
            margin-left: calc(-50vw + 50%);
            margin-right: calc(-50vw + 50%);
            padding-left: calc(50vw - 50%);
            padding-right: calc(50vw - 50%);
          }
        `,
        }}
      />

      <div className={cn('mediagrid-fullwidth relative', className)} style={sectionStyle}>
        {backgroundImageUrl && backgroundOverlay && (
          <div className="absolute inset-0 bg-black/50 -z-10" />
        )}

        {backgroundType === 'color' && (
          <div className={cn('absolute inset-0 -z-10', backgroundClasses[backgroundColor!])} />
        )}

        <div className={cn('relative', paddingClasses[padding!])}>
          <div>
            {title && (
              <div className="mb-4 text-center">
                <RichText data={title} enableGutter={false} enableProse={false} />
              </div>
            )}

            {subtitle && (
              <div className="mb-4 text-center">
                <RichText data={subtitle} enableGutter={false} enableProse={false} />
              </div>
            )}

            {description && (
              <div className="mb-12 text-center">
                <RichText data={description} enableGutter={false} enableProse={false} />
              </div>
            )}

            {medias && medias.length > 0 && (
              <div className="flex flex-wrap gap-4">
                {medias.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {item.media &&
                      typeof item.media === 'object' &&
                      item.media !== null &&
                      item.mediaPosition !== 'bottom' && (
                        <Media
                          resource={item.media}
                          className={cn(
                            'object-contain',
                            mediaSizeClasses[mediaSize!],
                            item.description ? 'mb-4' : '',
                          )}
                        />
                      )}

                    {item.description && (
                      <RichText
                        data={item.description}
                        enableGutter={false}
                        enableProse={false}
                        className={item.mediaPosition === 'bottom' ? 'mb-4' : ''}
                      />
                    )}

                    {item.media &&
                      typeof item.media === 'object' &&
                      item.media !== null &&
                      item.mediaPosition === 'bottom' && (
                        <Media
                          resource={item.media}
                          className={cn('object-contain', mediaSizeClasses[mediaSize!])}
                        />
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
