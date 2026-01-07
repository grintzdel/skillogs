import type { Block } from 'payload'
import { link } from '@/fields/link'

export const Button: Block = {
  slug: 'button',
  interfaceName: 'ButtonBlock',
  labels: {
    singular: 'Button',
    plural: 'Buttons',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      label: 'Button Label',
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'primary',
      required: true,
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Outline', value: 'outline' },
        { label: 'Ghost', value: 'ghost' },
        { label: 'Danger', value: 'danger' },
      ],
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
      ],
    },
    {
      name: 'fullWidth',
      type: 'checkbox',
      defaultValue: false,
      label: 'Full Width',
    },
    link({
      appearances: false,
      disableLabel: true,
    }),
  ],
}
