'use client'

import React from 'react'
import { useFormFields } from '@payloadcms/ui'

export const TypographyScalePreview: React.FC = () => {
  const strategy = useFormFields(([fields]) => fields?.responsiveStrategy?.value) as string
  const mobileRatio = useFormFields(([fields]) => fields?.mobileScaleRatio?.value) as number
  const tabletRatio = useFormFields(([fields]) => fields?.tabletScaleRatio?.value) as number
  const fluidRatio = useFormFields(([fields]) => fields?.fluidScaleRatio?.value) as number

  const h1Size = useFormFields(([fields]) => fields?.h1Size?.value) as string

  // Convert rem to px for display (assuming 1rem = 16px)
  const desktopPx = parseFloat(h1Size || '3') * 16

  const calculatedTablet =
    strategy === 'breakpoint' ? desktopPx * (tabletRatio || 0.85) : desktopPx * 0.85
  const calculatedMobile = desktopPx * ((strategy === 'clamp' ? fluidRatio : mobileRatio) || 0.65)

  return (
    <div
      style={{
        padding: '20px',
        background: 'var(--theme-elevation-50)',
        borderRadius: '8px',
        border: '1px solid var(--theme-elevation-100)',
      }}
    >
      <div style={{ marginBottom: '16px', color: 'var(--theme-text)' }}>
        <strong>Example: H1 ({Math.round(desktopPx)}px on desktop)</strong>
      </div>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '150px' }}>
          <div
            style={{
              fontSize: '12px',
              color: 'var(--theme-elevation-400)',
              marginBottom: '8px',
            }}
          >
            Desktop (1440px+)
          </div>
          <div
            style={{
              fontSize: `${desktopPx}px`,
              fontWeight: '700',
              lineHeight: '1.2',
              color: 'var(--theme-text)',
            }}
          >
            {Math.round(desktopPx)}px
          </div>
        </div>
        <div style={{ flex: '1', minWidth: '150px' }}>
          <div
            style={{
              fontSize: '12px',
              color: 'var(--theme-elevation-400)',
              marginBottom: '8px',
            }}
          >
            Tablet (768px)
          </div>
          <div
            style={{
              fontSize: `${calculatedTablet}px`,
              fontWeight: '700',
              lineHeight: '1.2',
              color: 'var(--theme-text)',
            }}
          >
            {Math.round(calculatedTablet)}px
          </div>
        </div>
        <div style={{ flex: '1', minWidth: '150px' }}>
          <div
            style={{
              fontSize: '12px',
              color: 'var(--theme-elevation-400)',
              marginBottom: '8px',
            }}
          >
            Mobile (320px)
          </div>
          <div
            style={{
              fontSize: `${calculatedMobile}px`,
              fontWeight: '700',
              lineHeight: '1.2',
              color: 'var(--theme-text)',
            }}
          >
            {Math.round(calculatedMobile)}px
          </div>
        </div>
      </div>
      {strategy === 'clamp' && (
        <div
          style={{
            marginTop: '16px',
            fontSize: '14px',
            color: 'var(--theme-elevation-500)',
            padding: '12px',
            background: 'var(--theme-elevation-100)',
            borderRadius: '4px',
          }}
        >
          ℹ️ With fluid scaling, sizes transition smoothly between these values as the viewport
          changes
        </div>
      )}
      {strategy === 'breakpoint' && (
        <div
          style={{
            marginTop: '16px',
            fontSize: '14px',
            color: 'var(--theme-elevation-500)',
            padding: '12px',
            background: 'var(--theme-elevation-100)',
            borderRadius: '4px',
          }}
        >
          ℹ️ With breakpoint scaling, sizes change at specific viewport widths (768px for tablet,
          640px for mobile)
        </div>
      )}
    </div>
  )
}
