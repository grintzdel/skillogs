import configPromise from '@payload-config'
import { getPayload } from 'payload'

type DesignSystemTypography = {
  bodyFontFamily?: string
  bodyFontFamilyCustom?: string
  headingFontFamily?: string
  headingFontFamilyCustom?: string
  responsiveStrategy?: 'clamp' | 'breakpoint'
  fluidScaleBase?: number
  fluidScaleMax?: number
  fluidScaleRatio?: number
  tabletScaleRatio?: number
  mobileScaleRatio?: number
  h1Size?: string
  h2Size?: string
  h3Size?: string
  h4Size?: string
  h5Size?: string
  h6Size?: string
}

const fontMap: Record<string, string> = {
  'geist-sans': 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
  'geist-mono': 'var(--font-geist-mono), ui-monospace, monospace',
  inter: '"Inter", ui-sans-serif, system-ui, sans-serif',
  roboto: '"Roboto", ui-sans-serif, system-ui, sans-serif',
  'open-sans': '"Open Sans", ui-sans-serif, system-ui, sans-serif',
  lato: '"Lato", ui-sans-serif, system-ui, sans-serif',
  montserrat: '"Montserrat", ui-sans-serif, system-ui, sans-serif',
  'system-sans':
    'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  'system-serif': 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  'system-mono': 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
}

/**
 * Récupère les font-families depuis le Design System
 */
export async function getTypographyFonts() {
  try {
    const payload = await getPayload({ config: configPromise })
    const designSystem = (await payload.findGlobal({
      slug: 'design-system',
    })) as unknown as DesignSystemTypography

    const bodyFont =
      designSystem.bodyFontFamily === 'custom'
        ? designSystem.bodyFontFamilyCustom || fontMap['geist-sans']
        : fontMap[designSystem.bodyFontFamily || 'geist-sans']

    const headingFont =
      designSystem.headingFontFamily === 'inherit'
        ? bodyFont
        : designSystem.headingFontFamily === 'custom'
          ? designSystem.headingFontFamilyCustom || fontMap['geist-sans']
          : fontMap[designSystem.headingFontFamily || 'geist-sans']

    return { bodyFont, headingFont }
  } catch (error) {
    console.warn('Failed to load Design System fonts, using defaults:', error)
    return {
      bodyFont: fontMap['geist-sans'],
      headingFont: fontMap['geist-sans'],
    }
  }
}

/**
 * Génère le clamp() CSS pour une taille donnée
 */
function generateClamp(desktopSize: string, config: DesignSystemTypography): string {
  const baseVw = config.fluidScaleBase || 320
  const maxVw = config.fluidScaleMax || 1440
  const ratio = config.fluidScaleRatio || 0.65

  // Convertir rem en px (assumption: 1rem = 16px)
  const desktopPx = parseFloat(desktopSize) * 16
  const minPx = desktopPx * ratio

  const minRem = minPx / 16
  const maxRem = desktopPx / 16

  // Calcul du facteur vw pour la partie fluide
  // Formula: preferred = min + (max - min) * ((100vw - baseVw) / (maxVw - baseVw))
  const vwFactor = ((desktopPx - minPx) / (maxVw - baseVw)) * 100

  return `clamp(${minRem.toFixed(4)}rem, ${minRem.toFixed(4)}rem + ${vwFactor.toFixed(4)}vw, ${maxRem.toFixed(4)}rem)`
}

/**
 * Génère les styles responsive pour une taille donnée
 */
export async function getResponsiveFontSize(
  size: string,
): Promise<string | { base: string; tablet?: string; mobile?: string }> {
  try {
    const payload = await getPayload({ config: configPromise })
    const designSystem = (await payload.findGlobal({
      slug: 'design-system',
    })) as unknown as DesignSystemTypography

    const strategy = designSystem.responsiveStrategy || 'clamp'

    if (strategy === 'clamp') {
      return generateClamp(size, designSystem)
    } else {
      // Breakpoint strategy
      const tabletRatio = designSystem.tabletScaleRatio || 0.85
      const mobileRatio = designSystem.mobileScaleRatio || 0.65

      const basePx = parseFloat(size) * 16
      const tabletPx = basePx * tabletRatio
      const mobilePx = basePx * mobileRatio

      return {
        base: size,
        tablet: `${(tabletPx / 16).toFixed(4)}rem`,
        mobile: `${(mobilePx / 16).toFixed(4)}rem`,
      }
    }
  } catch (error) {
    console.warn('Failed to load responsive font size, using base size:', error)
    return size
  }
}

/**
 * Récupère les tailles de headings depuis le Design System
 */
export async function getHeadingSizes() {
  try {
    const payload = await getPayload({ config: configPromise })
    const designSystem = (await payload.findGlobal({
      slug: 'design-system',
    })) as unknown as DesignSystemTypography

    return {
      h1: designSystem.h1Size || '3rem', // 48px
      h2: designSystem.h2Size || '2.25rem', // 36px
      h3: designSystem.h3Size || '1.875rem', // 30px
      h4: designSystem.h4Size || '1.5rem', // 24px
      h5: designSystem.h5Size || '1.25rem', // 20px
      h6: designSystem.h6Size || '1rem', // 16px
    }
  } catch (error) {
    console.warn('Failed to load heading sizes, using defaults:', error)
    return {
      h1: '3rem',
      h2: '2.25rem',
      h3: '1.875rem',
      h4: '1.5rem',
      h5: '1.25rem',
      h6: '1rem',
    }
  }
}

/**
 * Génère toutes les CSS variables pour la typographie
 */
export async function getTypographyStyles() {
  const fonts = await getTypographyFonts()
  const sizes = await getHeadingSizes()

  return {
    fonts,
    sizes,
  }
}
