export const baseColors = [
  { label: 'Black', value: '#000000' },
  { label: 'Gray 900', value: '#111827' },
  { label: 'Gray 700', value: '#374151' },
  { label: 'Gray 500', value: '#6b7280' },
  { label: 'Gray 300', value: '#d1d5db' },
  { label: 'Gray 100', value: '#f3f4f6' },
  { label: 'White', value: '#ffffff' },
]

export const getColors = (designSystemColors?: Array<{ label: string; value: string }>) => {
  if (!designSystemColors || designSystemColors.length === 0) {
    return baseColors
  }
  return [...designSystemColors, ...baseColors]
}

export const sizes = [
  { label: 'Extra Small (12px)', value: '0.75rem' },
  { label: 'Small (14px)', value: '0.875rem' },
  { label: 'Base (16px)', value: '1rem' },
  { label: 'Large (18px)', value: '1.125rem' },
  { label: 'XL (20px)', value: '1.25rem' },
  { label: '2XL (24px)', value: '1.5rem' },
  { label: '3XL (30px)', value: '1.875rem' },
  { label: '4XL (36px)', value: '2.25rem' },
  { label: '5XL (48px)', value: '3rem' },
  { label: '6XL (60px)', value: '3.75rem' },
  { label: '7XL (72px)', value: '4.5rem' },
]

export const letterSpacings = [
  { label: 'Tighter', value: '-0.05em' },
  { label: 'Tight', value: '-0.025em' },
  { label: 'Normal', value: '0em' },
  { label: 'Wide', value: '0.025em' },
  { label: 'Wider', value: '0.05em' },
  { label: 'Widest', value: '0.1em' },
]

export const lineHeights = [
  { label: 'None (1)', value: '1' },
  { label: 'Tight (1.25)', value: '1.25' },
  { label: 'Snug (1.375)', value: '1.375' },
  { label: 'Normal (1.5)', value: '1.5' },
  { label: 'Relaxed (1.625)', value: '1.625' },
  { label: 'Loose (2)', value: '2' },
  { label: 'Extra Loose (2.5)', value: '2.5' },
]

export const fontFamilies = [
  {
    label: 'Geist Sans',
    value: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
  },
  {
    label: 'Geist Mono',
    value: 'var(--font-geist-mono), ui-monospace, monospace',
  },
  {
    label: 'Inter',
    value: '"Inter", ui-sans-serif, system-ui, sans-serif',
  },
  {
    label: 'Roboto',
    value: '"Roboto", ui-sans-serif, system-ui, sans-serif',
  },
  {
    label: 'Open Sans',
    value: '"Open Sans", ui-sans-serif, system-ui, sans-serif',
  },
  {
    label: 'Lato',
    value: '"Lato", ui-sans-serif, system-ui, sans-serif',
  },
  {
    label: 'Montserrat',
    value: '"Montserrat", ui-sans-serif, system-ui, sans-serif',
  },
  {
    label: 'System Sans',
    value:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  {
    label: 'System Serif',
    value: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },
  {
    label: 'System Mono',
    value: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
]
