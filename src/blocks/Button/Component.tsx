import React from 'react'
import type { ButtonBlock as ButtonBlockType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/ui'

type Props = {
  className?: string
} & ButtonBlockType

export const ButtonBlock: React.FC<Props> = ({ label, style, size, fullWidth, link }) => {
  const buttonClasses = cn(
    'inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2',
    {
      'bg-blue-600 text-white hover:bg-blue-700': style === 'primary',
      'bg-gray-600 text-white hover:bg-gray-700': style === 'secondary',
      'border-2 border-blue-600 font-normal text-blue-600 hover:bg-blue-50': style === 'outline',
      'text-blue-600 hover:bg-blue-50': style === 'ghost',
      'bg-red-600 text-white hover:bg-red-700': style === 'danger',

      'text-sm rounded': size === 'sm',
      'text-base rounded-md': size === 'md',
      'text-lg rounded-lg': size === 'lg',

      'w-full': fullWidth,
    },
  )

  if (!link) return null

  return (
    <CMSLink {...link} className={buttonClasses}>
      {label}
    </CMSLink>
  )
}
