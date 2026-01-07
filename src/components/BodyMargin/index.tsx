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
    maxWidth: '960px',
  },
  medium: {
    padding: {
      mobile: '8px',
      tablet: '10px',
      desktop: '12px',
    },
    maxWidth: '1140px',
  },
  large: {
    padding: {
      mobile: '10px',
      tablet: '14px',
      desktop: '16px',
    },
    maxWidth: '1440px',
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

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          main {
            max-width: ${preset.maxWidth};
            margin-left: auto;
            margin-right: auto;
            padding-left: ${preset.padding.mobile};
            padding-right: ${preset.padding.mobile};
          }
          
          @media (min-width: 768px) {
            main {
              padding-left: ${preset.padding.tablet};
              padding-right: ${preset.padding.tablet};
            }
          }
          
          @media (min-width: 1024px) {
            main {
              padding-left: ${preset.padding.desktop};
              padding-right: ${preset.padding.desktop};
            }
          }
        `,
      }}
    />
  )
}
