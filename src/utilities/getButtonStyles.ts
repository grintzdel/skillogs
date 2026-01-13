import type { Payload } from 'payload'

export type ButtonStyle = {
  hasBackground: boolean
  backgroundColor?: string
  hasBorder: boolean
  borderColor?: string
  textColor: string
  borderRadius: number
  fontBold?: boolean
  fontItalic?: boolean
  textUnderline?: boolean
  enableHover?: boolean
  hoverBackgroundColor?: string
  hoverBorderColor?: string
  hoverTextColor?: string
  hoverOpacity?: number
}

export type ButtonStyles = {
  primary: ButtonStyle
  secondary: ButtonStyle
  outline: ButtonStyle
}

type DesignSystemGlobal = {
  primaryButtonHasBackground?: boolean
  primaryButtonBackgroundColor?: string
  primaryButtonHasBorder?: boolean
  primaryButtonBorderColor?: string
  primaryButtonTextColor?: string
  primaryButtonBorderRadius?: number
  primaryButtonFontBold?: boolean
  primaryButtonFontItalic?: boolean
  primaryButtonTextUnderline?: boolean
  primaryButtonEnableHover?: boolean
  primaryButtonHoverBackgroundColor?: string
  primaryButtonHoverBorderColor?: string
  primaryButtonHoverTextColor?: string
  primaryButtonHoverOpacity?: number
  secondaryButtonHasBackground?: boolean
  secondaryButtonBackgroundColor?: string
  secondaryButtonHasBorder?: boolean
  secondaryButtonBorderColor?: string
  secondaryButtonTextColor?: string
  secondaryButtonBorderRadius?: number
  secondaryButtonFontBold?: boolean
  secondaryButtonFontItalic?: boolean
  secondaryButtonTextUnderline?: boolean
  secondaryButtonEnableHover?: boolean
  secondaryButtonHoverBackgroundColor?: string
  secondaryButtonHoverBorderColor?: string
  secondaryButtonHoverTextColor?: string
  secondaryButtonHoverOpacity?: number
  outlineButtonHasBackground?: boolean
  outlineButtonBackgroundColor?: string
  outlineButtonHasBorder?: boolean
  outlineButtonBorderColor?: string
  outlineButtonTextColor?: string
  outlineButtonBorderRadius?: number
  outlineButtonFontBold?: boolean
  outlineButtonFontItalic?: boolean
  outlineButtonTextUnderline?: boolean
  outlineButtonEnableHover?: boolean
  outlineButtonHoverBackgroundColor?: string
  outlineButtonHoverBorderColor?: string
  outlineButtonHoverTextColor?: string
  outlineButtonHoverOpacity?: number
  [key: string]: any
}

const defaultButtonStyles: ButtonStyles = {
  primary: {
    hasBackground: true,
    backgroundColor: '#bcff5f',
    hasBorder: false,
    borderColor: '#bcff5f',
    textColor: '#000000',
    borderRadius: 6,
  },
  secondary: {
    hasBackground: true,
    backgroundColor: '#4b5563',
    hasBorder: false,
    borderColor: '#4b5563',
    textColor: '#ffffff',
    borderRadius: 6,
  },
  outline: {
    hasBackground: false,
    backgroundColor: 'transparent',
    hasBorder: true,
    borderColor: '#5036ff',
    textColor: '#5036ff',
    borderRadius: 6,
  },
}

export async function getButtonStyles(payload: Payload): Promise<ButtonStyles> {
  try {
    const designSystem = (await payload.findGlobal({
      slug: 'design-system',
      depth: 0,
    })) as DesignSystemGlobal

    if (!designSystem) {
      return defaultButtonStyles
    }

    return {
      primary: {
        hasBackground: designSystem.primaryButtonHasBackground ?? true,
        backgroundColor: designSystem.primaryButtonBackgroundColor || '#bcff5f',
        hasBorder: designSystem.primaryButtonHasBorder ?? false,
        borderColor: designSystem.primaryButtonBorderColor || '#bcff5f',
        textColor: designSystem.primaryButtonTextColor || '#000000',
        borderRadius: designSystem.primaryButtonBorderRadius ?? 6,
        fontBold: designSystem.primaryButtonFontBold ?? true,
        fontItalic: designSystem.primaryButtonFontItalic ?? false,
        textUnderline: designSystem.primaryButtonTextUnderline ?? false,
        enableHover: designSystem.primaryButtonEnableHover ?? false,
        hoverBackgroundColor: designSystem.primaryButtonHoverBackgroundColor,
        hoverBorderColor: designSystem.primaryButtonHoverBorderColor,
        hoverTextColor: designSystem.primaryButtonHoverTextColor,
        hoverOpacity: designSystem.primaryButtonHoverOpacity ?? 1,
      },
      secondary: {
        hasBackground: designSystem.secondaryButtonHasBackground ?? true,
        backgroundColor: designSystem.secondaryButtonBackgroundColor || '#4b5563',
        hasBorder: designSystem.secondaryButtonHasBorder ?? false,
        borderColor: designSystem.secondaryButtonBorderColor || '#4b5563',
        textColor: designSystem.secondaryButtonTextColor || '#ffffff',
        borderRadius: designSystem.secondaryButtonBorderRadius ?? 6,
        fontBold: designSystem.secondaryButtonFontBold ?? true,
        fontItalic: designSystem.secondaryButtonFontItalic ?? false,
        textUnderline: designSystem.secondaryButtonTextUnderline ?? false,
        enableHover: designSystem.secondaryButtonEnableHover ?? false,
        hoverBackgroundColor: designSystem.secondaryButtonHoverBackgroundColor,
        hoverBorderColor: designSystem.secondaryButtonHoverBorderColor,
        hoverTextColor: designSystem.secondaryButtonHoverTextColor,
        hoverOpacity: designSystem.secondaryButtonHoverOpacity ?? 1,
      },
      outline: {
        hasBackground: designSystem.outlineButtonHasBackground ?? false,
        backgroundColor: designSystem.outlineButtonBackgroundColor || 'transparent',
        hasBorder: designSystem.outlineButtonHasBorder ?? true,
        borderColor: designSystem.outlineButtonBorderColor || '#5036ff',
        textColor: designSystem.outlineButtonTextColor || '#5036ff',
        borderRadius: designSystem.outlineButtonBorderRadius ?? 6,
        fontBold: designSystem.outlineButtonFontBold ?? false,
        fontItalic: designSystem.outlineButtonFontItalic ?? false,
        textUnderline: designSystem.outlineButtonTextUnderline ?? false,
        enableHover: designSystem.outlineButtonEnableHover ?? false,
        hoverBackgroundColor: designSystem.outlineButtonHoverBackgroundColor,
        hoverBorderColor: designSystem.outlineButtonHoverBorderColor,
        hoverTextColor: designSystem.outlineButtonHoverTextColor,
        hoverOpacity: designSystem.outlineButtonHoverOpacity ?? 1,
      },
    }
  } catch (error) {
    console.error('Error fetching button styles:', error)
    return defaultButtonStyles
  }
}

export function getStaticButtonStyles(): ButtonStyles {
  return defaultButtonStyles
}

export function getButtonClasses(style: ButtonStyle): string {
  const classes: string[] = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-bold',
    'transition-colors',
    'px-4',
    'py-2',
    'text-[16px]',
    'whitespace-nowrap',
  ]

  if (style.borderRadius === 0) {
    classes.push('rounded-none')
  } else {
    classes.push(`rounded-[${style.borderRadius}px]`)
  }

  if (style.hasBackground && style.backgroundColor) {
  }

  if (style.hasBorder && style.borderColor) {
    classes.push('border')
  }

  return classes.join(' ')
}
