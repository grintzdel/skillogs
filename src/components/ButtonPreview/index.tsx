'use client'

import React from 'react'
import { UIFieldClientComponent } from 'payload'
import { useFormFields } from '@payloadcms/ui'

/**
 * Composant UI pour prévisualiser les styles de boutons du Design System
 * Affiche les 3 styles de boutons (primary, secondary, outline) avec preview en temps réel
 */
const ButtonPreview: UIFieldClientComponent = () => {
  // Primary Button
  const primaryHasBackground = useFormFields(
    ([fields]) => fields?.primaryButtonHasBackground?.value as boolean,
  )
  const primaryBackgroundColor = useFormFields(
    ([fields]) => fields?.primaryButtonBackgroundColor?.value as string,
  )
  const primaryHasBorder = useFormFields(
    ([fields]) => fields?.primaryButtonHasBorder?.value as boolean,
  )
  const primaryBorderColor = useFormFields(
    ([fields]) => fields?.primaryButtonBorderColor?.value as string,
  )
  const primaryTextColor = useFormFields(
    ([fields]) => fields?.primaryButtonTextColor?.value as string,
  )
  const primaryBorderRadius = useFormFields(
    ([fields]) => fields?.primaryButtonBorderRadius?.value as number,
  )

  // Secondary Button
  const secondaryHasBackground = useFormFields(
    ([fields]) => fields?.secondaryButtonHasBackground?.value as boolean,
  )
  const secondaryBackgroundColor = useFormFields(
    ([fields]) => fields?.secondaryButtonBackgroundColor?.value as string,
  )
  const secondaryHasBorder = useFormFields(
    ([fields]) => fields?.secondaryButtonHasBorder?.value as boolean,
  )
  const secondaryBorderColor = useFormFields(
    ([fields]) => fields?.secondaryButtonBorderColor?.value as string,
  )
  const secondaryTextColor = useFormFields(
    ([fields]) => fields?.secondaryButtonTextColor?.value as string,
  )
  const secondaryBorderRadius = useFormFields(
    ([fields]) => fields?.secondaryButtonBorderRadius?.value as number,
  )

  // Outline Button
  const outlineHasBackground = useFormFields(
    ([fields]) => fields?.outlineButtonHasBackground?.value as boolean,
  )
  const outlineBackgroundColor = useFormFields(
    ([fields]) => fields?.outlineButtonBackgroundColor?.value as string,
  )
  const outlineHasBorder = useFormFields(
    ([fields]) => fields?.outlineButtonHasBorder?.value as boolean,
  )
  const outlineBorderColor = useFormFields(
    ([fields]) => fields?.outlineButtonBorderColor?.value as string,
  )
  const outlineTextColor = useFormFields(
    ([fields]) => fields?.outlineButtonTextColor?.value as string,
  )
  const outlineBorderRadius = useFormFields(
    ([fields]) => fields?.outlineButtonBorderRadius?.value as number,
  )

  const getButtonStyle = (
    hasBackground: boolean,
    backgroundColor: string,
    hasBorder: boolean,
    borderColor: string,
    textColor: string,
    borderRadius: number,
  ) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 16px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    backgroundColor: hasBackground ? backgroundColor || 'transparent' : 'transparent',
    border: hasBorder ? `2px solid ${borderColor || '#000000'}` : '2px solid transparent',
    color: textColor || '#000000',
    borderRadius: `${borderRadius || 0}px`,
  })

  return (
    <div
      style={{
        padding: '1.5rem',
        backgroundColor: 'var(--theme-elevation-50)',
        borderRadius: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        {/* Primary Button Preview */}
        <div>
          <div
            style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
              color: 'var(--theme-elevation-800)',
            }}
          >
            Primary Button
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              backgroundColor: 'var(--theme-elevation-100)',
              borderRadius: '6px',
            }}
          >
            <button
              type="button"
              style={getButtonStyle(
                primaryHasBackground,
                primaryBackgroundColor,
                primaryHasBorder,
                primaryBorderColor,
                primaryTextColor,
                primaryBorderRadius,
              )}
            >
              Click me
            </button>
            <div style={{ fontSize: '0.75rem', color: 'var(--theme-elevation-600)' }}>
              {primaryHasBackground && `BG: ${primaryBackgroundColor || 'transparent'}`}
              {primaryHasBackground && primaryHasBorder && ' • '}
              {primaryHasBorder && `Border: ${primaryBorderColor || '#000000'}`}
              {(primaryHasBackground || primaryHasBorder) && ' • '}
              Text: {primaryTextColor || '#000000'}
            </div>
          </div>
        </div>

        {/* Secondary Button Preview */}
        <div>
          <div
            style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
              color: 'var(--theme-elevation-800)',
            }}
          >
            Secondary Button
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              backgroundColor: 'var(--theme-elevation-100)',
              borderRadius: '6px',
            }}
          >
            <button
              type="button"
              style={getButtonStyle(
                secondaryHasBackground,
                secondaryBackgroundColor,
                secondaryHasBorder,
                secondaryBorderColor,
                secondaryTextColor,
                secondaryBorderRadius,
              )}
            >
              Click me
            </button>
            <div style={{ fontSize: '0.75rem', color: 'var(--theme-elevation-600)' }}>
              {secondaryHasBackground && `BG: ${secondaryBackgroundColor || 'transparent'}`}
              {secondaryHasBackground && secondaryHasBorder && ' • '}
              {secondaryHasBorder && `Border: ${secondaryBorderColor || '#000000'}`}
              {(secondaryHasBackground || secondaryHasBorder) && ' • '}
              Text: {secondaryTextColor || '#000000'}
            </div>
          </div>
        </div>

        {/* Outline Button Preview */}
        <div>
          <div
            style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
              color: 'var(--theme-elevation-800)',
            }}
          >
            Outline Button
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              backgroundColor: 'var(--theme-elevation-100)',
              borderRadius: '6px',
            }}
          >
            <button
              type="button"
              style={getButtonStyle(
                outlineHasBackground,
                outlineBackgroundColor,
                outlineHasBorder,
                outlineBorderColor,
                outlineTextColor,
                outlineBorderRadius,
              )}
            >
              Click me
            </button>
            <div style={{ fontSize: '0.75rem', color: 'var(--theme-elevation-600)' }}>
              {outlineHasBackground && `BG: ${outlineBackgroundColor || 'transparent'}`}
              {outlineHasBackground && outlineHasBorder && ' • '}
              {outlineHasBorder && `Border: ${outlineBorderColor || '#000000'}`}
              {(outlineHasBackground || outlineHasBorder) && ' • '}
              Text: {outlineTextColor || '#000000'}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: '1.5rem',
          padding: '1rem',
          backgroundColor: 'var(--theme-elevation-100)',
          borderRadius: '6px',
          fontSize: '0.875rem',
          color: 'var(--theme-elevation-700)',
        }}
      >
        <strong>💡 Tip:</strong> These button styles will be applied throughout your application.
        Make sure the colors provide good contrast for accessibility.
      </div>
    </div>
  )
}

export default ButtonPreview
