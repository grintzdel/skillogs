import React from 'react'
import type { CTASectionBlock as CTASectionType } from '@/payload-types'
import { cn } from '@/utilities/ui'
import Link from 'next/link'
import { getButtonStylesForComponent, getBaseButtonClasses } from '@/utilities/applyButtonStyles'

type Props = {
  className?: string
} & CTASectionType

export const CTASectionBlock: React.FC<Props> = async ({
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

  // Récupérer les styles de boutons du Design System
  const buttonStyles = await getButtonStylesForComponent()
  // Pour CTA on utilise un style inversé (blanc sur fond coloré)
  const primaryButtonStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    color: '#000000',
    border: 'none',
    borderRadius: `${buttonStyles.primary.borderRadius}px`,
    transition: 'all 0.2s',
  }
  const secondaryButtonStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '2px solid #ffffff',
    borderRadius: `${buttonStyles.outline.borderRadius}px`,
    transition: 'all 0.2s',
  }

  // Styles hover pour CTA
  const ctaPrimaryHover = `.cta-primary-btn:hover { opacity: 0.9 !important; }`
  const ctaSecondaryHover = `.cta-secondary-btn:hover { background-color: rgba(255, 255, 255, 0.1) !important; }`

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ctaPrimaryHover + ctaSecondaryHover }} />
      <section className={sectionClasses}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
          {description && <p className="text-lg md:text-xl mb-8 opacity-90">{description}</p>}

          {primaryButton?.text && primaryButton?.url && (
            <div className="flex gap-4 justify-center">
              <Link
                href={primaryButton.url}
                className={cn(getBaseButtonClasses(), 'cta-primary-btn')}
                style={primaryButtonStyle}
              >
                {primaryButton.text}
              </Link>
              {secondaryButton?.text && secondaryButton?.url && (
                <Link
                  href={secondaryButton.url}
                  className={cn(getBaseButtonClasses(), 'cta-secondary-btn')}
                  style={secondaryButtonStyle}
                >
                  {secondaryButton.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
