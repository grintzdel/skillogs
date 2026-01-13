'use client'

import React from 'react'
import { UIFieldClientComponent } from 'payload'
import { useFormFields } from '@payloadcms/ui'

/**
 * Composant UI pour prévisualiser la palette de couleurs du Design System
 * Affiche toutes les couleurs définies avec leur label et valeur HEX
 */
const ColorPalettePreview: UIFieldClientComponent = () => {
  const primaryColor = useFormFields(([fields]) => fields?.primaryColor?.value as string)
  const secondaryColor = useFormFields(([fields]) => fields?.secondaryColor?.value as string)
  const accentColor = useFormFields(([fields]) => fields?.accentColor?.value as string)
  const successColor = useFormFields(([fields]) => fields?.successColor?.value as string)
  const warningColor = useFormFields(([fields]) => fields?.warningColor?.value as string)
  const errorColor = useFormFields(([fields]) => fields?.errorColor?.value as string)
  const customColors = useFormFields(([fields]) => fields?.customColors?.value as any[])

  const colors = [
    { label: 'Primary', value: primaryColor },
    { label: 'Secondary', value: secondaryColor },
    { label: 'Accent', value: accentColor },
    { label: 'Success', value: successColor },
    { label: 'Warning', value: warningColor },
    { label: 'Error', value: errorColor },
  ]

  // Ajouter les couleurs custom s'il y en a
  if (customColors && Array.isArray(customColors)) {
    customColors.forEach((color) => {
      if (color?.label && color?.value) {
        colors.push({ label: color.label, value: color.value })
      }
    })
  }

  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: 'var(--theme-elevation-50)',
        borderRadius: '8px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
          gap: '1rem',
        }}
      >
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '80px',
                backgroundColor: color.value || '#cccccc',
                borderRadius: '6px',
                border: '2px solid var(--theme-elevation-200)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            />
            <div
              style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: 'var(--theme-elevation-800)',
              }}
            >
              {color.label}
            </div>
            <div
              style={{
                fontSize: '0.75rem',
                fontFamily: 'monospace',
                color: 'var(--theme-elevation-600)',
              }}
            >
              {color.value || 'Not set'}
            </div>
          </div>
        ))}
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
        <strong>💡 Tip:</strong> These colors will be available as presets in all color pickers
        throughout the CMS. Users can also use the custom color picker to select any color they
        want.
      </div>
    </div>
  )
}

export default ColorPalettePreview
