'use client'

import React from 'react'
import { useField } from '@payloadcms/ui'

export const RangeSliderField: React.FC<any> = ({ path, label, required }) => {
  const { value, setValue } = useField<number>({ path })

  const currentValue = (value as number) || 100

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
  }

  return (
    <div className="field-type range-slider" style={{ marginBottom: '20px' }}>
      <label
        className="field-label"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px',
          fontSize: '14px',
          fontWeight: '600',
        }}
      >
        <span>
          {label}
          {required && <span style={{ color: '#ef4444' }}>*</span>}
        </span>
        <span
          style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#3b82f6',
            minWidth: '50px',
            textAlign: 'right',
          }}
        >
          {currentValue}%
        </span>
      </label>

      <input
        type="range"
        id={path}
        min="10"
        max="100"
        step="10"
        value={currentValue}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '6px',
          borderRadius: '3px',
          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${currentValue}%, #e5e7eb ${currentValue}%, #e5e7eb 100%)`,
          outline: 'none',
          appearance: 'none',
          cursor: 'pointer',
        }}
      />

      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        input[type='range']::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        input[type='range']::-webkit-slider-thumb:hover {
          background: #2563eb;
          transform: scale(1.1);
        }

        input[type='range']::-moz-range-thumb:hover {
          background: #2563eb;
          transform: scale(1.1);
        }
      `}</style>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '8px',
          fontSize: '12px',
          color: '#6b7280',
        }}
      >
        <span>10%</span>
        <span>100%</span>
      </div>
    </div>
  )
}
