import type { Block } from 'payload'
import { createIconPickerField } from '@/fields/iconPicker'

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
                  type: 'row',
                  fields: [
                    createIconPickerField({ name: 'startIcon', label: 'Start Icon' }),
                    {
                      name: 'text',
                      type: 'text',
                      label: 'Button Text',
                      admin: {
                        width: '50%',
                      },
                    },
                    createIconPickerField({ name: 'endIcon', label: 'End Icon' }),
                  ],
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Button URL',
                },
              ],
            },
            {
              name: 'secondaryButton',
              type: 'group',
              label: 'Secondary Button (Outline)',
              fields: [
                {
                  type: 'row',
                  fields: [
                    createIconPickerField({ name: 'startIcon', label: 'Icône au début' }),
                    {
                      name: 'text',
                      type: 'text',
                      label: 'Button Text',
                      admin: {
                        width: '50%',
                      },
                    },
                    createIconPickerField({ name: 'endIcon', label: 'Icône à la fin' }),
                  ],
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Button URL',
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
