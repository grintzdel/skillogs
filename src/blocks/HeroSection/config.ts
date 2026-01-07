import type { Block } from 'payload'

export const HeroSection: Block = {
  slug: 'heroSection',
  interfaceName: 'HeroSectionBlock',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'eyebrow',
              type: 'text',
              label: 'Eyebrow Text',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true,
            },
            {
              name: 'subtitle',
              type: 'textarea',
              label: 'Subtitle',
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
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Button URL',
                },
                {
                  name: 'startIcon',
                  type: 'text',
                  label: 'Start Icon (emoji ou texte)',
                },
                {
                  name: 'endIcon',
                  type: 'text',
                  label: 'End Icon (emoji ou texte)',
                },
              ],
            },
            {
              name: 'secondaryButton',
              type: 'group',
              label: 'Secondary Button (Outline)',
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
                {
                  name: 'startIcon',
                  type: 'text',
                  label: 'Start Icon (emoji ou texte)',
                },
                {
                  name: 'endIcon',
                  type: 'text',
                  label: 'End Icon (emoji ou texte)',
                },
              ],
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Hero Image',
            },
          ],
        },
        {
          label: 'Style',
          fields: [
            {
              name: 'layout',
              type: 'select',
              label: 'Layout',
              defaultValue: 'centered',
              options: [
                { label: 'Centered', value: 'centered' },
                { label: 'Left Aligned', value: 'left' },
                { label: 'Right Aligned', value: 'right' },
              ],
            },
            {
              name: 'backgroundColor',
              type: 'select',
              defaultValue: 'transparent',
              label: 'Background Color',
              options: [
                { label: 'Transparent', value: 'transparent' },
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
