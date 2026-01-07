import { cache } from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { ButtonStyle } from './getButtonStyles'
import { getButtonStyles } from './getButtonStyles'

const getCachedButtonStyles = cache(async () => {
  const payload = await getPayload({ config })
  return getButtonStyles(payload)
})

export function generateButtonStyle(
  buttonStyle: ButtonStyle,
  uniqueId?: string,
): { style: React.CSSProperties; className?: string; hoverStyles?: string } {
  const style: React.CSSProperties = {
    transition: 'all 0.2s',
  }

  if (buttonStyle.hasBackground && buttonStyle.backgroundColor) {
    style.backgroundColor = buttonStyle.backgroundColor
  } else {
    style.backgroundColor = 'transparent'
  }

  if (buttonStyle.hasBorder && buttonStyle.borderColor) {
    style.border = `2px solid ${buttonStyle.borderColor}`
  } else {
    style.border = '2px solid transparent'
  }

  style.color = buttonStyle.textColor

  style.borderRadius = `${buttonStyle.borderRadius}px`

  if (buttonStyle.fontBold) {
    style.fontWeight = 'bold'
  } else {
    style.fontWeight = 'normal'
  }

  if (buttonStyle.fontItalic) {
    style.fontStyle = 'italic'
  }

  if (buttonStyle.textUnderline) {
    style.textDecoration = 'underline'
  }

  // Générer les styles hover si présents ET activés
  if (
    uniqueId &&
    buttonStyle.enableHover &&
    (buttonStyle.hoverBackgroundColor ||
      buttonStyle.hoverBorderColor ||
      buttonStyle.hoverTextColor ||
      buttonStyle.hoverOpacity !== 1)
  ) {
    const className = `btn-hover-${uniqueId}`
    let hoverStyles = `.${className}:hover {`

    if (buttonStyle.hoverBackgroundColor) {
      hoverStyles += `background-color: ${buttonStyle.hoverBackgroundColor} !important;`
    }
    if (buttonStyle.hoverBorderColor) {
      hoverStyles += `border-color: ${buttonStyle.hoverBorderColor} !important;`
    }
    if (buttonStyle.hoverTextColor) {
      hoverStyles += `color: ${buttonStyle.hoverTextColor} !important;`
    }
    if (buttonStyle.hoverOpacity !== undefined && buttonStyle.hoverOpacity !== 1) {
      hoverStyles += `opacity: ${buttonStyle.hoverOpacity} !important;`
    }

    hoverStyles += '}'

    return { style, className, hoverStyles }
  }

  return { style }
}

export async function getButtonStylesForComponent() {
  return getCachedButtonStyles()
}

export function getBaseButtonClasses(): string {
  return 'inline-flex items-center justify-center font-bold transition-colors px-4 py-2 text-[16px] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
}

export function getHoverStyles(buttonStyle: ButtonStyle): string {
  //TODO: return hover style
  return 'hover:opacity-90'
}
