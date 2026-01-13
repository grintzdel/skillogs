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
]

export const MediaGridSection: Block = {
  slug: 'mediaGridSection',
  interfaceName: 'MediaGridSectionBlock',
  labels: {
    singular: 'Media Grid Section',
    plural: 'Media Grid Sections',
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
              type: 'richText',
              label: 'Section Title',
              editor: lexicalEditor({
                features: typographyFeatures,
              }),
            },
            {
              name: 'subtitle',
              type: 'richText',
              label: 'Section Subtitle',
              editor: lexicalEditor({
                features: typographyFeatures,
              }),
            },
            {
              name: 'description',
              type: 'richText',
              label: 'Section Description',
              editor: lexicalEditor({
                features: typographyFeatures,
              }),
            },
            {
              name: 'medias',
              type: 'array',
              label: 'Media Items',
              fields: [
                {
                  name: 'media',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Media',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'richText',
                  label: 'Media Description',
                  editor: lexicalEditor({
                    features: typographyFeatures,
                  }),
                },
                {
                  name: 'mediaPosition',
                  type: 'select',
                  label: 'Media Position',
                  defaultValue: 'top',
                  options: [
                    { label: 'Above Description', value: 'top' },
                    { label: 'Below Description', value: 'bottom' },
                  ],
                  admin: {
                    description: 'Position du média par rapport à la description',
                  },
                },
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
              defaultValue: 'white',
              label: 'Background Color',
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
              name: 'mediaSize',
              type: 'select',
              defaultValue: 'medium',
              label: 'Media Max Width',
              options: [
                { label: 'Small (max 100px)', value: 'small' },
                { label: 'Medium (max 150px)', value: 'medium' },
                { label: 'Large (max 220px)', value: 'large' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
