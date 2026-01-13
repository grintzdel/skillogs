import React from 'react'
import type { BannerBlock as BannerBlockType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { cn } from '@/utilities/ui'
import {
  getButtonStylesForComponent,
  generateButtonStyle,
  getBaseButtonClasses,
} from '@/utilities/applyButtonStyles'
import { Icon } from '@/components/Icon'

type Props = {
  className?: string
} & BannerBlockType

export const BannerBlock: React.FC<Props> = async ({
  eyebrow,
  title,
  subtitle,
  description,
  buttons,
  backgroundType = 'color',
  backgroundColor = 'primary',
  backgroundImage,
  backgroundOverlay = true,
  padding = 'lg',
  className,
}) => {
  // Get button styles from Design System
  const buttonStyles = await getButtonStylesForComponent()

  const paddingClasses: Record<string, string> = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-24',
    xl: 'py-32',
  }

  const backgroundClasses: Record<string, string> = {
    white: 'bg-white',
    'gray-light': 'bg-gray-50',
    gray: 'bg-gray-100',
    'gray-dark': 'bg-gray-800',
    primary: 'bg-blue-600',
    secondary: 'bg-purple-600',
    dark: 'bg-gray-900',
  }

  // Determine text color based on background
  const isDarkBackground = ['dark', 'primary', 'secondary', 'gray-dark'].includes(
    backgroundColor || '',
  )
  const textColor =
    isDarkBackground || (backgroundType === 'image' && backgroundOverlay)
      ? 'text-white'
      : 'text-gray-900'

  const backgroundImageUrl =
    backgroundType === 'image' &&
    backgroundImage &&
    typeof backgroundImage === 'object' &&
    'url' in backgroundImage
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
          .banner-fullwidth {
            margin-left: calc(-50vw + 50%);
            margin-right: calc(-50vw + 50%);
            padding-left: calc(50vw - 50%);
            padding-right: calc(50vw - 50%);
          }
        `,
        }}
      />

      <div className={cn('banner-fullwidth relative', className)} style={sectionStyle}>
        {backgroundImageUrl && backgroundOverlay && (
          <div className="absolute inset-0 bg-black/50 -z-10" />
        )}

        {backgroundType === 'color' && (
          <div className={cn('absolute inset-0 -z-10', backgroundClasses[backgroundColor!])} />
        )}

        <div className={cn('relative', paddingClasses[padding!])}>
          <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
            {eyebrow && (
              <div className={cn(textColor, 'opacity-80')}>
                <RichText data={eyebrow} enableGutter={false} enableProse={false} />
              </div>
            )}

            {title && (
              <div className={cn(textColor)}>
                <RichText data={title} enableGutter={false} enableProse={false} />
              </div>
            )}

            {subtitle && (
              <div className={cn(textColor, 'opacity-90')}>
                <RichText data={subtitle} enableGutter={false} enableProse={false} />
              </div>
            )}

            {description && (
              <div
                className={cn(
                  'prose max-w-none [&_h1]:mt-4 [&_h2]:mt-4 [&_h3]:mt-4 [&_h4]:mt-4 [&_h1]:mb-2 [&_h2]:mb-2 [&_h3]:mb-2 [&_h4]:mb-2 mx-auto',
                  textColor,
                )}
              >
                <RichText data={description} enableGutter={false} />
              </div>
            )}

            {buttons && Array.isArray(buttons) && buttons.length > 0 && (
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                {buttons.map((button: any, index: number) => {
                  if (!button?.link) return null

                  // Select appropriate style from Design System
                  let inlineStyle: React.CSSProperties = {}
                  let hoverClassName = ''
                  let hoverStylesCSS = ''

                  if (button.style === 'primary' && buttonStyles.primary) {
                    const result = generateButtonStyle(
                      buttonStyles.primary,
                      `banner-primary-${index}`,
                    )
                    inlineStyle = result.style
                    hoverClassName = result.className || ''
                    hoverStylesCSS = result.hoverStyles || ''
                  } else if (button.style === 'secondary' && buttonStyles.secondary) {
                    const result = generateButtonStyle(
                      buttonStyles.secondary,
                      `banner-secondary-${index}`,
                    )
                    inlineStyle = result.style
                    hoverClassName = result.className || ''
                    hoverStylesCSS = result.hoverStyles || ''
                  } else if (button.style === 'outline' && buttonStyles.outline) {
                    const result = generateButtonStyle(
                      buttonStyles.outline,
                      `banner-outline-${index}`,
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
        </div>
      </div>
    </>
  )
}
