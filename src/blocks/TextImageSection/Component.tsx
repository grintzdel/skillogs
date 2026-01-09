import React from 'react'
import type { TextImageSectionBlock as TextImageSectionBlockType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'
import {
  getButtonStylesForComponent,
  generateButtonStyle,
  getBaseButtonClasses,
} from '@/utilities/applyButtonStyles'
import { Icon } from '@/components/Icon'

type Props = {
  className?: string
} & TextImageSectionBlockType

// Function to extract YouTube video ID from various URL formats
const extractYouTubeId = (url: string): string | null => {
  if (!url) return null

  // Check if it's an iframe
  const iframeMatch = url.match(/src=["']([^"']+)["']/)
  if (iframeMatch) {
    url = iframeMatch[1]
  }

  // Match various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/, // Direct video ID
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}

export const TextImageSectionBlock: React.FC<Props> = async ({
  eyebrow,
  title,
  subtitle,
  description,
  buttons,
  layout = 'centered',
  columns = 'one',
  mediaType = 'image',
  media,
  youtubeUrl,
  mediaPosition = 'right',
  showMediaShadow = false,
  showDivider = false,
  dividerWidth = 100,
  dividerThickness = '1',
  dividerColor = '#5036ff',
  backgroundType = 'color',
  backgroundColor = 'white',
  gradientType,
  backgroundImage,
  backgroundOverlay,
  padding = 'sm',
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

  const contentClasses = cn({
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

  // Get button styles from Design System
  const buttonStyles = await getButtonStylesForComponent()

  // Extract YouTube video ID if applicable
  const youtubeVideoId = mediaType === 'youtube' && youtubeUrl ? extractYouTubeId(youtubeUrl) : null

  // Render divider
  const renderDivider = () => {
    if (!showDivider) return null

    return (
      <div className="w-full flex">
        <div
          className="rounded-full"
          style={{
            width: `${dividerWidth}%`,
            height: `${dividerThickness}px`,
            backgroundColor: dividerColor || '#5036ff',
          }}
        />
      </div>
    )
  }

  // Render media (image or YouTube)
  const renderMedia = () => {
    if (mediaType === 'youtube' && youtubeVideoId) {
      return (
        <div
          className={cn('relative w-full aspect-video rounded-lg overflow-hidden', {
            'shadow-2xl': showMediaShadow,
          })}
        >
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      )
    }

    if (mediaType === 'image' && media && typeof media !== 'string') {
      return (
        <Media
          resource={media}
          className={cn('rounded-lg overflow-hidden', {
            'shadow-2xl': showMediaShadow,
          })}
        />
      )
    }

    return null
  }

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
          className={cn('flex flex-col gap-4', {
            'order-2': layout === 'split' && mediaPosition === 'left',
          })}
        >
          {eyebrow && (
            <div className={cn(textColor)}>
              <RichText data={eyebrow} enableGutter={false} enableProse={false} />
            </div>
          )}

          {title && (
            <div className={cn(textColor)}>
              <RichText data={title} enableGutter={false} enableProse={false} />
            </div>
          )}

          {/* Divider after title */}
          {renderDivider()}

          {subtitle && (
            <div className={cn(textColor, 'opacity-90')}>
              <RichText data={subtitle} enableGutter={false} enableProse={false} />
            </div>
          )}

          {description && (
            <div className={cn('prose max-w-none [&_h1]:mt-4 [&_h2]:mt-4 [&_h3]:mt-4 [&_h4]:mt-4 [&_h1]:mb-2 [&_h2]:mb-2 [&_h3]:mb-2 [&_h4]:mb-2', textColor)}>
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

                // Select appropriate style from Design System
                let inlineStyle: React.CSSProperties = {}
                let hoverClassName = ''
                let hoverStylesCSS = ''

                if (button.style === 'primary' && buttonStyles.primary) {
                  const result = generateButtonStyle(
                    buttonStyles.primary,
                    `text-image-primary-${index}`,
                  )
                  inlineStyle = result.style
                  hoverClassName = result.className || ''
                  hoverStylesCSS = result.hoverStyles || ''
                } else if (button.style === 'secondary' && buttonStyles.secondary) {
                  const result = generateButtonStyle(
                    buttonStyles.secondary,
                    `text-image-secondary-${index}`,
                  )
                  inlineStyle = result.style
                  hoverClassName = result.className || ''
                  hoverStylesCSS = result.hoverStyles || ''
                } else if (button.style === 'outline' && buttonStyles.outline) {
                  const result = generateButtonStyle(
                    buttonStyles.outline,
                    `text-image-outline-${index}`,
                  )
                  inlineStyle = result.style
                  hoverClassName = result.className || ''
                  hoverStylesCSS = result.hoverStyles || ''
                } else if (button.style === 'ghost') {
                  inlineStyle = {
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                  }
                  hoverClassName = 'hover:bg-white/10'
                }

                const buttonClasses = cn(getBaseButtonClasses(), 'gap-2', hoverClassName)

                return (
                  <React.Fragment key={index}>
                    {hoverStylesCSS && (
                      <style dangerouslySetInnerHTML={{ __html: hoverStylesCSS }} />
                    )}
                    <CMSLink
                      {...button.link}
                      appearance="link"
                      className={buttonClasses}
                      style={inlineStyle}
                    >
                      {button.startIcon && <Icon icon={button.startIcon} aria-hidden />}
                      {button.label}
                      {button.endIcon && <Icon icon={button.endIcon} aria-hidden />}
                    </CMSLink>
                  </React.Fragment>
                )
              })}
            </div>
          )}
        </div>

        {layout === 'split' && (mediaType === 'image' || mediaType === 'youtube') && (
          <div
            className={cn('relative', {
              'order-1': mediaPosition === 'left',
            })}
          >
            {renderMedia()}
          </div>
        )}
      </div>
    </section>
  )
}
