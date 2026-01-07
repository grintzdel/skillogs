import type { Block } from 'payload'

export const FeaturesSection: Block = {
  slug: 'featuresSection',
  interfaceName: 'FeaturesSectionBlock',
  labels: {
    singular: 'Features Section',
    plural: 'Features Sections',
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
              label: 'Section Title',
            },
            {
              name: 'subtitle',
              type: 'textarea',
              label: 'Section Subtitle',
            },
            {
              name: 'features',
              type: 'array',
              label: 'Features',
              minRows: 1,
              maxRows: 12,
              fields: [
                {
                  name: 'icon',
                  type: 'text',
                  label: 'Icon (emoji or icon name)',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Feature Title',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'Feature Description',
                },
              ],
            },
          ],
        },
        {
          label: 'Style',
          fields: [
            {
              name: 'columns',
              type: 'select',
              label: 'Columns',
              defaultValue: '3',
              options: [
                { label: '2 Columns', value: '2' },
                { label: '3 Columns', value: '3' },
                { label: '4 Columns', value: '4' },
              ],
            },
            {
              name: 'backgroundColor',
              type: 'select',
              defaultValue: 'white',
              label: 'Background Color',
              options: [
                { label: 'White', value: 'white' },
                { label: 'Gray', value: 'gray' },
                { label: 'Primary', value: 'primary' },
                { label: 'Dark', value: 'dark' },
              ],
            },
            {
              name: 'padding',
              type: 'select',
              defaultValue: 'lg',
              options: [
                { label: 'Small', value: 'sm' },
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
