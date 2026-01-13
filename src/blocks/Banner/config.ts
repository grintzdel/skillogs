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

const typographyFeatures = ({ defaultFeatures }: any) => [
  ...defaultFeatures,
  InlineToolbarFeature(),
  TextColorFeature({
    colors: baseColors,
    colorPicker: true,
    listView: false,
  }),
  TextSizeFeature({
    sizes,
    customSize: false,
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
]

export const Banner: Block = {
  slug: 'banner',
  interfaceName: 'BannerBlock',
  labels: {
    singular: 'Banner Section',
    plural: 'Banner Sections',
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
              type: 'richText',
              label: 'Eyebrow Text',
              editor: lexicalEditor({
                features: typographyFeatures,
              }),
              admin: {
                description: 'Small text above the title',
              },
            },
            {
              name: 'title',
              type: 'richText',
              required: true,
              label: 'Title',
              editor: lexicalEditor({
                features: typographyFeatures,
              }),
            },
            {
              name: 'subtitle',
              type: 'richText',
              label: 'Subtitle',
              editor: lexicalEditor({
                features: typographyFeatures,
              }),
            },
            {
              name: 'description',
              type: 'richText',
              label: 'Description',
              editor: lexicalEditor({
                features: typographyFeatures,
              }),
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
                    createIconPickerField({ name: 'startIcon', label: 'Start Icon' }),
                    {
                      name: 'label',
                      type: 'text',
                      required: true,
                      admin: {
                        width: '50%',
                      },
                    },
                    createIconPickerField({ name: 'endIcon', label: 'End Icon' }),
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
          label: 'Background',
          fields: [
            {
              name: 'backgroundType',
              type: 'select',
              defaultValue: 'color',
              options: [
                { label: 'Color', value: 'color' },
                { label: 'Image', value: 'image' },
              ],
            },
            {
              name: 'backgroundColor',
              type: 'select',
              defaultValue: 'primary',
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
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Background Image',
              admin: {
                condition: (_, siblingData) => siblingData?.backgroundType === 'image',
              },
            },
            {
              name: 'backgroundOverlay',
              type: 'checkbox',
              defaultValue: true,
              label: 'Add Dark Overlay',
              admin: {
                condition: (_, siblingData) => siblingData?.backgroundType === 'image',
                description: 'Makes text more readable over images',
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
          ],
        },
      ],
    },
  ],
}
