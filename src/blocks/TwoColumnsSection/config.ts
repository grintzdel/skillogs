import type { Block } from 'payload'

export const TwoColumnsSection: Block = {
  slug: 'twoColumnsSection',
  interfaceName: 'TwoColumnsSectionBlock',
  labels: {
    singular: 'Two Columns Section',
    plural: 'Two Columns Sections',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'leftColumn',
              type: 'group',
              label: 'Left Column',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                },
                {
                  name: 'content',
                  type: 'richText',
                  label: 'Content',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Image',
                },
              ],
            },
            {
              name: 'rightColumn',
              type: 'group',
              label: 'Right Column',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Title',
                },
                {
                  name: 'content',
                  type: 'richText',
                  label: 'Content',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Image',
                },
              ],
            },
          ],
        },
        {
          label: 'Style',
          fields: [
            {
              name: 'columnRatio',
              type: 'select',
              label: 'Column Ratio',
              defaultValue: '50-50',
              options: [
                { label: '50/50 Equal', value: '50-50' },
                { label: '60/40', value: '60-40' },
                { label: '40/60', value: '40-60' },
                { label: '70/30', value: '70-30' },
                { label: '30/70', value: '30-70' },
              ],
            },
            {
              name: 'verticalAlignment',
              type: 'select',
              label: 'Vertical Alignment',
              defaultValue: 'center',
              options: [
                { label: 'Top', value: 'start' },
                { label: 'Center', value: 'center' },
                { label: 'Bottom', value: 'end' },
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
