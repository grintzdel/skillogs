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
