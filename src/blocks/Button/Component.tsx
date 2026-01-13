import React from 'react'
import type { ButtonBlock as ButtonBlockType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'
import {
  getButtonStylesForComponent,
  generateButtonStyle,
  getBaseButtonClasses,
} from '@/utilities/applyButtonStyles'

type Props = {
  className?: string
} & ButtonBlockType

export const ButtonBlock: React.FC<Props> = async ({
  label,
  style,
  size,
  fullWidth,
  link,
  className,
}) => {
  if (!link) return null

  const buttonStyles = await getButtonStylesForComponent()

  let inlineStyle: React.CSSProperties = {}
  let hoverClassName = ''
  let hoverStylesCSS = ''

  if (style === 'primary' && buttonStyles.primary) {
    const result = generateButtonStyle(buttonStyles.primary, 'primary')
    inlineStyle = result.style
    hoverClassName = result.className || ''
    hoverStylesCSS = result.hoverStyles || ''
  } else if (style === 'secondary' && buttonStyles.secondary) {
    const result = generateButtonStyle(buttonStyles.secondary, 'secondary')
    inlineStyle = result.style
    hoverClassName = result.className || ''
    hoverStylesCSS = result.hoverStyles || ''
  } else if (style === 'outline' && buttonStyles.outline) {
    const result = generateButtonStyle(buttonStyles.outline, 'outline')
    inlineStyle = result.style
    hoverClassName = result.className || ''
    hoverStylesCSS = result.hoverStyles || ''
  } else if (style === 'ghost') {
    inlineStyle = {
      backgroundColor: 'transparent',
      color: '#3b82f6',
    }
    hoverClassName = 'hover:bg-blue-50'
  } else if (style === 'danger') {
    inlineStyle = {
      backgroundColor: '#ef4444',
      color: '#ffffff',
    }
    hoverClassName = 'hover:bg-red-700'
  }

  const buttonClasses = cn(
    getBaseButtonClasses(),
    hoverClassName,
    {
      'text-sm': size === 'sm',
      'text-base': size === 'md',
      'text-lg': size === 'lg',
      'w-full': fullWidth,
    },
    className,
  )

  return (
    <>
      {hoverStylesCSS && <style dangerouslySetInnerHTML={{ __html: hoverStylesCSS }} />}
      <CMSLink {...link} className={buttonClasses} style={inlineStyle}>
        {label}
      </CMSLink>
    </>
  )
}
