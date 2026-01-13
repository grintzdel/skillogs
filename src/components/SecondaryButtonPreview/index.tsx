'use client'

import React from 'react'
import { UIFieldClientComponent } from 'payload'
import { useFormFields } from '@payloadcms/ui'

const SecondaryButtonPreview: UIFieldClientComponent = () => {
  const hasBackground = useFormFields(([fields]) => fields?.secondaryButtonHasBackground?.value as boolean)
  const backgroundColor = useFormFields(([fields]) => fields?.secondaryButtonBackgroundColor?.value as string)
  const hasBorder = useFormFields(([fields]) => fields?.secondaryButtonHasBorder?.value as boolean)
  const borderColor = useFormFields(([fields]) => fields?.secondaryButtonBorderColor?.value as string)
  const textColor = useFormFields(([fields]) => fields?.secondaryButtonTextColor?.value as string)
  const borderRadius = useFormFields(([fields]) => fields?.secondaryButtonBorderRadius?.value as number)
  const fontBold = useFormFields(([fields]) => fields?.secondaryButtonFontBold?.value as boolean)
  const fontItalic = useFormFields(([fields]) => fields?.secondaryButtonFontItalic?.value as boolean)
  const textUnderline = useFormFields(([fields]) => fields?.secondaryButtonTextUnderline?.value as boolean)
  const enableHover = useFormFields(([fields]) => fields?.secondaryButtonEnableHover?.value as boolean)
  const hoverBackgroundColor = useFormFields(([fields]) => fields?.secondaryButtonHoverBackgroundColor?.value as string)
  const hoverBorderColor = useFormFields(([fields]) => fields?.secondaryButtonHoverBorderColor?.value as string)
  const hoverTextColor = useFormFields(([fields]) => fields?.secondaryButtonHoverTextColor?.value as string)
  const hoverOpacity = useFormFields(([fields]) => fields?.secondaryButtonHoverOpacity?.value as number)

  const [isHovered, setIsHovered] = React.useState(false)

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered && enableHover && hoverBackgroundColor ? hoverBackgroundColor : (hasBackground ? (backgroundColor || '#4b5563') : 'transparent'),
    border: isHovered && enableHover && hoverBorderColor ? `2px solid ${hoverBorderColor}` : (hasBorder ? `2px solid ${borderColor || '#4b5563'}` : '2px solid transparent'),
    color: isHovered && enableHover && hoverTextColor ? hoverTextColor : (textColor || '#ffffff'),
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

export default SecondaryButtonPreview
