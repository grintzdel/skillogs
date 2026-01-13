import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'

const spacingPresets = {
  small: {
    padding: {
      mobile: '6px',
      tablet: '8px',
      desktop: '8px',
    },
    maxWidth: {
      xl: '960px', // >= 1200px
      lg: '900px', // >= 992px
      md: '720px', // >= 768px
      sm: '100%', // < 768px
    },
  },
  medium: {
    padding: {
      mobile: '8px',
      tablet: '10px',
      desktop: '12px',
    },
    maxWidth: {
      xxl: '1320px', // >= 1400px
      xl: '1140px', // >= 1200px
      lg: '960px', // >= 992px
      md: '720px', // >= 768px
      sm: '100%', // < 768px
    },
  },
  large: {
    padding: {
      mobile: '10px',
      tablet: '14px',
      desktop: '16px',
    },
    maxWidth: {
      xxl: '1440px', // >= 1400px
      xl: '1320px', // >= 1200px
      lg: '1140px', // >= 992px
      md: '960px', // >= 768px
      sm: '100%', // < 768px
    },
  },
}

export async function BodyMargin() {
  const payload = await getPayload({ config })

  const designSystem = await payload.findGlobal({
    slug: 'design-system',
    depth: 0,
  })

  const { mainSpacingPreset = 'medium' } = designSystem
  const preset = spacingPresets[mainSpacingPreset as keyof typeof spacingPresets]
  const maxWidth = preset.maxWidth as any // Type assertion pour éviter l'erreur TypeScript

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          main {
            max-width: ${maxWidth.sm};
            margin-left: auto;
            margin-right: auto;
            padding-left: ${preset.padding.mobile};
            padding-right: ${preset.padding.mobile};
          }

          @media (min-width: 768px) {
            main {
              max-width: ${maxWidth.md};
              padding-left: ${preset.padding.tablet};
              padding-right: ${preset.padding.tablet};
            }
          }

          @media (min-width: 992px) {
            main {
              max-width: ${maxWidth.lg};
            }
          }

          @media (min-width: 1024px) {
            main {
              padding-left: ${preset.padding.desktop};
              padding-right: ${preset.padding.desktop};
            }
          }

          @media (min-width: 1200px) {
            main {
              max-width: ${maxWidth.xl};
            }
          }

          ${
            maxWidth.xxl
              ? `
          @media (min-width: 1400px) {
            main {
              max-width: ${maxWidth.xxl};
            }
          }
          `
              : ''
          }
        `,
      }}
    />
  )
}
