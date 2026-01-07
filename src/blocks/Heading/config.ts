import type { Block } from 'payload'

export const Heading: Block = {
  slug: 'heading',
  interfaceName: 'HeadingBlock',
  labels: {
    singular: 'Heading',
    plural: 'Headings',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
      required: true,
      label: 'Heading Text',
    },
    {
      name: 'level',
      type: 'select',
      defaultValue: 'h2',
      required: true,
      options: [
        { label: 'H1', value: 'h1' },
        { label: 'H2', value: 'h2' },
        { label: 'H3', value: 'h3' },
        { label: 'H4', value: 'h4' },
        { label: 'H5', value: 'h5' },
        { label: 'H6', value: 'h6' },
      ],
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
    {
      name: 'color',
      type: 'select',
      defaultValue: 'default',
      options: [
        { label: 'Default', value: 'default' },
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Gray', value: 'gray' },
        { label: 'White', value: 'white' },
      ],
    },
  ],
}
