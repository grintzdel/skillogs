import React from 'react'
import {
  getTypographyStyles,
  getResponsiveFontSize,
} from '@/utilities/typography/getResponsiveStyles'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

type DesignSystemTypography = {
  responsiveStrategy?: 'clamp' | 'breakpoint'
  tabletScaleRatio?: number
  mobileScaleRatio?: number
}

/**
 * Component to inject Design System typography as CSS variables and responsive styles
 * Add this to your root layout
 */
export const TypographyStylesInjector: React.FC = async () => {
  const { fonts, sizes } = await getTypographyStyles()

  // Get strategy for generating responsive CSS
  const payload = await getPayload({ config: configPromise })
  const designSystem = (await payload.findGlobal({
    slug: 'design-system',
  })) as unknown as DesignSystemTypography

  const strategy = designSystem.responsiveStrategy || 'clamp'

  // Generate responsive font sizes for each heading
  const h1Responsive = await getResponsiveFontSize(sizes.h1)
  const h2Responsive = await getResponsiveFontSize(sizes.h2)
  const h3Responsive = await getResponsiveFontSize(sizes.h3)
  const h4Responsive = await getResponsiveFontSize(sizes.h4)
  const h5Responsive = await getResponsiveFontSize(sizes.h5)
  const h6Responsive = await getResponsiveFontSize(sizes.h6)

  // Generate CSS based on strategy
  let headingStyles = ''

  if (strategy === 'clamp') {
    // Fluid typography with clamp()
    headingStyles = `
      h1 {
        font-size: ${h1Responsive};
      }
      h2 {
        font-size: ${h2Responsive};
      }
      h3 {
        font-size: ${h3Responsive};
      }
      h4 {
        font-size: ${h4Responsive};
      }
      h5 {
        font-size: ${h5Responsive};
      }
      h6 {
        font-size: ${h6Responsive};
      }
    `
  } else {
    // Breakpoint-based with media queries
    const h1Obj = h1Responsive as { base: string; tablet?: string; mobile?: string }
    const h2Obj = h2Responsive as { base: string; tablet?: string; mobile?: string }
    const h3Obj = h3Responsive as { base: string; tablet?: string; mobile?: string }
    const h4Obj = h4Responsive as { base: string; tablet?: string; mobile?: string }
    const h5Obj = h5Responsive as { base: string; tablet?: string; mobile?: string }
    const h6Obj = h6Responsive as { base: string; tablet?: string; mobile?: string }

    headingStyles = `
      /* Desktop sizes */
      h1 { font-size: ${h1Obj.base}; }
      h2 { font-size: ${h2Obj.base}; }
      h3 { font-size: ${h3Obj.base}; }
      h4 { font-size: ${h4Obj.base}; }
      h5 { font-size: ${h5Obj.base}; }
      h6 { font-size: ${h6Obj.base}; }

      /* Tablet sizes */
      @media (max-width: 1024px) {
        h1 { font-size: ${h1Obj.tablet}; }
        h2 { font-size: ${h2Obj.tablet}; }
        h3 { font-size: ${h3Obj.tablet}; }
        h4 { font-size: ${h4Obj.tablet}; }
        h5 { font-size: ${h5Obj.tablet}; }
        h6 { font-size: ${h6Obj.tablet}; }
      }

      /* Mobile sizes */
      @media (max-width: 640px) {
        h1 { font-size: ${h1Obj.mobile}; }
        h2 { font-size: ${h2Obj.mobile}; }
        h3 { font-size: ${h3Obj.mobile}; }
        h4 { font-size: ${h4Obj.mobile}; }
        h5 { font-size: ${h5Obj.mobile}; }
        h6 { font-size: ${h6Obj.mobile}; }
      }
    `
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          :root {
            --ds-font-body: ${fonts.bodyFont};
            --ds-font-heading: ${fonts.headingFont};
            --ds-h1-size: ${sizes.h1};
            --ds-h2-size: ${sizes.h2};
            --ds-h3-size: ${sizes.h3};
            --ds-h4-size: ${sizes.h4};
            --ds-h5-size: ${sizes.h5};
            --ds-h6-size: ${sizes.h6};
          }

          /* Apply font families to common elements */
          body {
            font-family: var(--ds-font-body);
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: var(--ds-font-heading);
          }

          /* Force spans inside headings to inherit heading size (override Lexical inline styles) */
          h1 span, h2 span, h3 span, h4 span, h5 span, h6 span {
            font-size: inherit !important;
          }

          /* Apply responsive sizes to headings */
          ${headingStyles}

          /* Apply to Lexical rich text content */
          .payload-richtext {
            font-family: var(--ds-font-body);
          }

          .payload-richtext h1,
          .payload-richtext h2,
          .payload-richtext h3,
          .payload-richtext h4,
          .payload-richtext h5,
          .payload-richtext h6 {
            font-family: var(--ds-font-heading);
          }

          /* Force spans inside Lexical headings to inherit heading size */
          .payload-richtext h1 span,
          .payload-richtext h2 span,
          .payload-richtext h3 span,
          .payload-richtext h4 span,
          .payload-richtext h5 span,
          .payload-richtext h6 span {
            font-size: inherit !important;
          }

          ${
            strategy === 'clamp'
              ? `
          .payload-richtext h1 { font-size: ${h1Responsive}; }
          .payload-richtext h2 { font-size: ${h2Responsive}; }
          .payload-richtext h3 { font-size: ${h3Responsive}; }
          .payload-richtext h4 { font-size: ${h4Responsive}; }
          .payload-richtext h5 { font-size: ${h5Responsive}; }
          .payload-richtext h6 { font-size: ${h6Responsive}; }
          `
              : `
          .payload-richtext h1 { font-size: ${(h1Responsive as any).base}; }
          .payload-richtext h2 { font-size: ${(h2Responsive as any).base}; }
          .payload-richtext h3 { font-size: ${(h3Responsive as any).base}; }
          .payload-richtext h4 { font-size: ${(h4Responsive as any).base}; }
          .payload-richtext h5 { font-size: ${(h5Responsive as any).base}; }
          .payload-richtext h6 { font-size: ${(h6Responsive as any).base}; }

          @media (max-width: 1024px) {
            .payload-richtext h1 { font-size: ${(h1Responsive as any).tablet}; }
            .payload-richtext h2 { font-size: ${(h2Responsive as any).tablet}; }
            .payload-richtext h3 { font-size: ${(h3Responsive as any).tablet}; }
            .payload-richtext h4 { font-size: ${(h4Responsive as any).tablet}; }
            .payload-richtext h5 { font-size: ${(h5Responsive as any).tablet}; }
            .payload-richtext h6 { font-size: ${(h6Responsive as any).tablet}; }
          }

          @media (max-width: 640px) {
            .payload-richtext h1 { font-size: ${(h1Responsive as any).mobile}; }
            .payload-richtext h2 { font-size: ${(h2Responsive as any).mobile}; }
            .payload-richtext h3 { font-size: ${(h3Responsive as any).mobile}; }
            .payload-richtext h4 { font-size: ${(h4Responsive as any).mobile}; }
            .payload-richtext h5 { font-size: ${(h5Responsive as any).mobile}; }
            .payload-richtext h6 { font-size: ${(h6Responsive as any).mobile}; }
          }
          `
          }
        `,
      }}
    />
  )
}
