import type { Block } from 'payload'

export const CTASection: Block = {
  slug: 'ctaSection',
  interfaceName: 'CTASectionBlock',
  labels: {
    singular: 'CTA Section',
    plural: 'CTA Sections',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'primaryButton',
              type: 'group',
              label: 'Primary Button',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  label: 'Button Text',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Button URL',
                  required: true,
                },
              ],
            },
            {
              name: 'secondaryButton',
              type: 'group',
              label: 'Secondary Button (Optional)',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                  label: 'Button Text',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Button URL',
                },
              ],
            },
          ],
        },
        {
          label: 'Style',
          fields: [
            {
              name: 'backgroundColor',
              type: 'select',
              defaultValue: 'primary',
              label: 'Background Color',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Gray', value: 'gray' },
                { label: 'Dark', value: 'dark' },
              ],
            },
            {
              name: 'padding',
              type: 'select',
              defaultValue: 'lg',
              options: [
                { label: 'Medium', value: 'md' },
                { label: 'Large', value: 'lg' },
                { label: 'XLarge', value: 'xl' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
