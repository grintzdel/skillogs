import type { Block } from 'payload'
import { lexicalEditor, InlineToolbarFeature } from '@payloadcms/richtext-lexical'
import {
  TextColorFeature,
  TextSizeFeature,
  TextLetterSpacingFeature,
  TextLineHeightFeature,
  TextFontFamilyFeature,
} from 'payload-lexical-typography'
import {
  baseColors,
  sizes,
  letterSpacings,
  lineHeights,
  fontFamilies,
} from '@/fields/typographyConfig'
import { link } from '@/fields/link'
import { createIconPickerField } from '@/fields/iconPicker'

export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
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
              admin: {
                description: 'Small text above the title',
              },
            },
            {
              name: 'title',
              type: 'text',
              required: true,
              label: 'Title',
            },
            {
              name: 'subtitle',
              type: 'textarea',
              label: 'Subtitle',
            },
            {
              name: 'description',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  InlineToolbarFeature(),
                  TextColorFeature({
                    colors: baseColors,
                    colorPicker: true,
                    listView: false,
                  }),
                  TextSizeFeature({
                    sizes,
                    customSize: true,
                    scroll: true,
                    method: 'combine',
                  }),
                  TextLetterSpacingFeature({
                    spacings: letterSpacings,
                    customSpacing: true,
                    scroll: false,
                    method: 'combine',
                  }),
                  TextLineHeightFeature({
                    lineHeights,
                    customLineHeight: true,
                    scroll: false,
                    method: 'combine',
                  }),
                  TextFontFamilyFeature({
                    fontFamilies,
                    customFontFamily: true,
                    scroll: false,
                    method: 'combine',
                  }),
                ],
              }),
              label: 'Description',
            },
            {
              name: 'buttons',
              type: 'array',
              label: 'Buttons',
              maxRows: 3,
              fields: [
                {
                  type: 'row',
                  fields: [
                    createIconPickerField({ name: 'startIcon', label: 'Icône bouton' }),
                    {
                      name: 'label',
                      type: 'text',
                      required: true,
                      admin: {
                        width: '50%',
                      },
                    },
                    createIconPickerField({ name: 'endIcon', label: 'Icône bouton' }),
                  ],
                },
                {
                  name: 'style',
                  type: 'select',
                  defaultValue: 'primary',
                  options: [
                    { label: 'Primary', value: 'primary' },
                    { label: 'Secondary', value: 'secondary' },
                    { label: 'Outline', value: 'outline' },
                    { label: 'Ghost', value: 'ghost' },
                  ],
                },
                link({ disableLabel: true, appearances: false }),
              ],
            },
          ],
        },
        {
          label: 'Layout',
          fields: [
            {
              name: 'layout',
              type: 'select',
              defaultValue: 'centered',
              options: [
                { label: 'Centered', value: 'centered' },
                { label: 'Left Aligned', value: 'left' },
                { label: 'Split (Text/Image)', value: 'split' },
              ],
            },
            {
              name: 'columns',
              type: 'select',
              defaultValue: 'one',
              options: [
                { label: '1 Column', value: 'one' },
                { label: '2 Columns', value: 'two' },
              ],
              admin: {
                condition: (_, siblingData) => siblingData?.layout !== 'split',
              },
            },
          ],
        },
        {
          label: 'Media',
          fields: [
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              label: 'Image/Video',
            },
            {
              name: 'mediaPosition',
              type: 'radio',
              defaultValue: 'right',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' },
              ],
              admin: {
                condition: (_, siblingData) => siblingData?.layout === 'split',
                layout: 'horizontal',
              },
            },
          ],
        },
        {
          label: 'Background',
          fields: [
            {
              name: 'backgroundType',
              type: 'select',
              defaultValue: 'color',
              options: [
                { label: 'Color', value: 'color' },
                { label: 'Gradient', value: 'gradient' },
                { label: 'Image', value: 'image' },
              ],
            },
            {
              name: 'backgroundColor',
              type: 'select',
              defaultValue: 'white',
              options: [
                { label: 'White', value: 'white' },
                { label: 'Gray Light', value: 'gray-light' },
                { label: 'Gray', value: 'gray' },
                { label: 'Gray Dark', value: 'gray-dark' },
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Dark', value: 'dark' },
              ],
              admin: {
                condition: (_, siblingData) => siblingData?.backgroundType === 'color',
              },
            },
            {
              name: 'gradientType',
              type: 'select',
              defaultValue: 'linear',
              options: [
                { label: 'Linear', value: 'linear' },
                { label: 'Radial', value: 'radial' },
              ],
              admin: {
                condition: (_, siblingData) => siblingData?.backgroundType === 'gradient',
              },
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                condition: (_, siblingData) => siblingData?.backgroundType === 'image',
              },
            },
            {
              name: 'backgroundOverlay',
              type: 'checkbox',
              defaultValue: false,
              label: 'Add Dark Overlay',
              admin: {
                condition: (_, siblingData) => siblingData?.backgroundType === 'image',
              },
            },
          ],
        },
        {
          label: 'Settings',
          fields: [
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
            {
              name: 'fullHeight',
              type: 'checkbox',
              defaultValue: false,
              label: 'Full Screen Height',
            },
          ],
        },
      ],
    },
  ],
}
