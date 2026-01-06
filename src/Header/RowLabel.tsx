'use client'
import { Header } from '@/payload-types'
import { RowLabelProps, useRowLabel } from '@payloadcms/ui'

export const RowLabel: React.FC<RowLabelProps> = () => {
  const data = useRowLabel<NonNullable<Header['navItems']>[number]>()

  const rowNumber = data.rowNumber !== undefined ? data.rowNumber + 1 : ''
  const hasSubmenu = data?.data?.hasSubmenu
  const submenuLabel = data?.data?.submenuLabel
  const submenuItems = data?.data?.submenuItems
  const linkLabel = data?.data?.link?.label

  let label = 'Row'

  if (hasSubmenu && submenuLabel) {
    const subLabels = submenuItems
      ?.map((item) => item?.link?.label)
      .filter(Boolean)
      .join(', ')

    label = `Nav Group ${rowNumber}: ${submenuLabel}${subLabels ? ` (${subLabels})` : ''}`
  } else if (linkLabel) {
    label = `Nav item ${rowNumber}: ${linkLabel}`
  }

  return <div>{label}</div>
}
