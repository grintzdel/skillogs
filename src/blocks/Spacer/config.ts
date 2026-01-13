import type { Block } from 'payload'

export const Spacer: Block = {
  slug: 'spacer',
  interfaceName: 'SpacerBlock',
  labels: {
    singular: 'Spacer',
    plural: 'Spacers',
  },
  fields: [
    {
      name: 'height',
      type: 'select',
      defaultValue: 'md',
      required: true,
      options: [
        { label: 'Extra Small (16px)', value: 'xs' },
        { label: 'Small (32px)', value: 'sm' },
        { label: 'Medium (64px)', value: 'md' },
        { label: 'Large (96px)', value: 'lg' },
        { label: 'Extra Large (128px)', value: 'xl' },
        { label: 'XXL (160px)', value: '2xl' },
      ],
    },
  ],
}
