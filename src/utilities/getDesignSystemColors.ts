import type { Payload } from 'payload'
import { baseColors } from '@/fields/typographyConfig'

/**
 * Type pour la global Design System (jusqu'à régénération des types)
 */
type DesignSystemGlobal = {
  primaryColor?: string
  secondaryColor?: string
  accentColor?: string
  successColor?: string
  warningColor?: string
  errorColor?: string
  customColors?: Array<{ label: string; value: string }>
  [key: string]: any
}

export async function getDesignSystemColors(
  payload: Payload,
): Promise<Array<{ label: string; value: string }>> {
  try {
    const designSystem = (await payload.findGlobal({
      slug: 'design-system',
      depth: 0,
    })) as DesignSystemGlobal

    if (!designSystem) {
      return baseColors
    }

    const colors: Array<{ label: string; value: string }> = []

    if (designSystem.primaryColor) {
      colors.push({ label: 'Primary', value: designSystem.primaryColor })
    }
    if (designSystem.secondaryColor) {
      colors.push({ label: 'Secondary', value: designSystem.secondaryColor })
    }
    if (designSystem.accentColor) {
      colors.push({ label: 'Accent', value: designSystem.accentColor })
    }

    if (designSystem.successColor) {
      colors.push({ label: 'Success', value: designSystem.successColor })
    }
    if (designSystem.warningColor) {
      colors.push({ label: 'Warning', value: designSystem.warningColor })
    }
    if (designSystem.errorColor) {
      colors.push({ label: 'Error', value: designSystem.errorColor })
    }

    if (Array.isArray(designSystem.customColors)) {
      designSystem.customColors.forEach((color) => {
        if (color.label && color.value) {
          colors.push({ label: color.label, value: color.value })
        }
      })
    }

    return [...colors, ...baseColors]
  } catch (error) {
    console.error('Error fetching design system colors:', error)
    return baseColors
  }
}

export function getStaticColors(): Array<{ label: string; value: string }> {
  return baseColors
}
