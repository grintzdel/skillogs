'use client'

import React from 'react'
import { useFormFields } from '@payloadcms/ui'

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

export const FontFamilyPreview: React.FC = () => {
  const bodyFontFamily = useFormFields(([fields]) => fields?.bodyFontFamily?.value) as string
  const headingFontFamily = useFormFields(([fields]) => fields?.headingFontFamily?.value) as string
  const bodyCustom = useFormFields(([fields]) => fields?.bodyFontFamilyCustom?.value) as string
  const headingCustom = useFormFields(
    ([fields]) => fields?.headingFontFamilyCustom?.value,
  ) as string

  const bodyFont =
    bodyFontFamily === 'custom'
      ? bodyCustom || fontMap['geist-sans']
      : fontMap[bodyFontFamily as string] || fontMap['geist-sans']

  const headingFont =
    headingFontFamily === 'inherit'
      ? bodyFont
      : headingFontFamily === 'custom'
        ? headingCustom || fontMap['geist-sans']
        : fontMap[headingFontFamily as string] || fontMap['geist-sans']

  return (
    <div
      style={{
        padding: '20px',
        background: 'var(--theme-elevation-50)',
        borderRadius: '8px',
        border: '1px solid var(--theme-elevation-100)',
      }}
    >
      <div
        style={{
          fontFamily: headingFont,
          fontSize: '28px',
          fontWeight: '700',
          marginBottom: '16px',
          color: 'var(--theme-text)',
        }}
      >
        Heading Preview (H1)
      </div>
      <div
        style={{
          fontFamily: bodyFont,
          fontSize: '16px',
          lineHeight: '1.6',
          color: 'var(--theme-text)',
        }}
      >
        This is how body text will look with your selected font. The quick brown fox jumps over the
        lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div
        style={{
          marginTop: '16px',
          fontSize: '12px',
          color: 'var(--theme-elevation-400)',
          fontFamily: 'var(--font-geist-mono), monospace',
        }}
      >
        <div>
          <strong>Body:</strong> {bodyFont}
        </div>
        <div>
          <strong>Heading:</strong> {headingFont}
        </div>
      </div>
    </div>
  )
}
