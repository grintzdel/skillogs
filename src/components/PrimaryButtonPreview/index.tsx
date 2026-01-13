'use client'

import React from 'react'
import { UIFieldClientComponent } from 'payload'
import { useFormFields } from '@payloadcms/ui'

const PrimaryButtonPreview: UIFieldClientComponent = () => {
  const hasBackground = useFormFields(([fields]) => fields?.primaryButtonHasBackground?.value as boolean)
  const backgroundColor = useFormFields(([fields]) => fields?.primaryButtonBackgroundColor?.value as string)
  const hasBorder = useFormFields(([fields]) => fields?.primaryButtonHasBorder?.value as boolean)
  const borderColor = useFormFields(([fields]) => fields?.primaryButtonBorderColor?.value as string)
  const textColor = useFormFields(([fields]) => fields?.primaryButtonTextColor?.value as string)
  const borderRadius = useFormFields(([fields]) => fields?.primaryButtonBorderRadius?.value as number)
  const fontBold = useFormFields(([fields]) => fields?.primaryButtonFontBold?.value as boolean)
  const fontItalic = useFormFields(([fields]) => fields?.primaryButtonFontItalic?.value as boolean)
  const textUnderline = useFormFields(([fields]) => fields?.primaryButtonTextUnderline?.value as boolean)
  const enableHover = useFormFields(([fields]) => fields?.primaryButtonEnableHover?.value as boolean)
  const hoverBackgroundColor = useFormFields(([fields]) => fields?.primaryButtonHoverBackgroundColor?.value as string)
  const hoverBorderColor = useFormFields(([fields]) => fields?.primaryButtonHoverBorderColor?.value as string)
  const hoverTextColor = useFormFields(([fields]) => fields?.primaryButtonHoverTextColor?.value as string)
  const hoverOpacity = useFormFields(([fields]) => fields?.primaryButtonHoverOpacity?.value as number)

  const [isHovered, setIsHovered] = React.useState(false)

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered && enableHover && hoverBackgroundColor ? hoverBackgroundColor : (hasBackground ? (backgroundColor || '#bcff5f') : 'transparent'),
    border: isHovered && enableHover && hoverBorderColor ? `2px solid ${hoverBorderColor}` : (hasBorder ? `2px solid ${borderColor || '#bcff5f'}` : '2px solid transparent'),
    color: isHovered && enableHover && hoverTextColor ? hoverTextColor : (textColor || '#000000'),
    opacity: isHovered && enableHover && hoverOpacity !== undefined ? hoverOpacity : 1,
    borderRadius: `${borderRadius ?? 6}px`,
    padding: '8px 16px',
    fontWeight: fontBold ?? true ? 'bold' : 'normal',
    fontStyle: fontItalic ? 'italic' : 'normal',
    textDecoration: textUnderline ? 'underline' : 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    fontSize: '16px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: 'var(--theme-elevation-50)',
        borderRadius: '8px',
        marginTop: '1rem',
      }}
    >
      <div style={{ marginBottom: '0.75rem', fontWeight: '600', fontSize: '0.875rem' }}>
        {enableHover ? 'Preview (hover to see effect):' : 'Preview:'}
      </div>
      <div
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Click me
      </div>
    </div>
  )
}

export default PrimaryButtonPreview
