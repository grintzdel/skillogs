'use client'

import React from 'react'
import { useField } from '@payloadcms/ui'

export const ColorPickerField: React.FC<any> = ({ path, label, required }) => {
  const { value, setValue } = useField<string>({ path })

  const currentValue = (value as string) || '#5036ff'

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className="field-type color-picker">
      <label className="field-label" style={{ display: 'block', marginBottom: '8px' }}>
        {label}
        {required && <span style={{ color: '#ef4444' }}>*</span>}
      </label>

      <input
        type="text"
        value={currentValue}
        onChange={handleHexChange}
        placeholder="#5036ff"
        maxLength={7}
        style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #d1d5db',
          borderRadius: '4px',
          fontSize: '14px',
          fontFamily: 'monospace',
        }}
      />
    </div>
  )
}
