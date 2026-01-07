'use client'

import React from 'react'
import { TextFieldClientComponent } from 'payload'
import { useField } from '@payloadcms/ui'

const ColorPickerField: TextFieldClientComponent = (props) => {
  const { path, field } = props
  const { label, required, admin } = field

  const { value, setValue } = useField<string>({ path })

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className="field-type text">
      <label className="field-label" htmlFor={path}>
        {String(label || '')}
        {required && <span className="required">*</span>}
      </label>

      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        {/* Color picker HTML5 natif */}
        <input
          type="color"
          id={`${path}-picker`}
          value={value || '#000000'}
          onChange={handleColorChange}
          style={{
            width: '60px',
            height: '40px',
            border: '1px solid var(--theme-elevation-200)',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        />

        {/* Input texte pour saisir directement le HEX */}
        <input
          type="text"
          id={path}
          value={value || ''}
          onChange={handleTextChange}
          placeholder="#000000"
          pattern="^#[0-9A-Fa-f]{6}$"
          style={{
            flex: 1,
            padding: '0.5rem',
            border: '1px solid var(--theme-elevation-200)',
            borderRadius: '4px',
            fontFamily: 'monospace',
          }}
        />

        {/* Preview de la couleur */}
        <div
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: value || '#000000',
            border: '1px solid var(--theme-elevation-200)',
            borderRadius: '4px',
          }}
          title={value || 'No color selected'}
        />
      </div>

      {admin?.description && <div className="field-description">{String(admin.description)}</div>}
    </div>
  )
}

export default ColorPickerField
