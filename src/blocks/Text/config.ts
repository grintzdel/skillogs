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

export const Text: Block = {
  slug: 'text',
  interfaceName: 'TextBlock',
  labels: {
    singular: 'Text',
    plural: 'Text Blocks',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'richText',
              type: 'richText',
              label: 'Text Content',
              required: true,
              editor: lexicalEditor({
                features: ({ defaultFeatures }) => [
                  ...defaultFeatures,
                  // Typography features from payload-lexical-typography
                  InlineToolbarFeature(),
                  TextColorFeature({
                    colors: baseColors,
                    colorPicker: true, // Enable color picker for custom colors
                    listView: false, // Grid view for better UX
                  }),
                  TextSizeFeature({
                    sizes,
                    customSize: true, // Allow custom font sizes
                    scroll: true,
                    method: 'combine', // Combine default and custom sizes
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
          ],
        },
        {
          label: 'Settings',
          fields: [
            {
              name: 'maxWidth',
              type: 'select',
              label: 'Max Width',
              defaultValue: 'prose',
              options: [
                { label: 'None', value: 'none' },
                { label: 'Small (640px)', value: 'sm' },
                { label: 'Medium (768px)', value: 'md' },
                { label: 'Prose (65ch)', value: 'prose' },
                { label: 'Large (1024px)', value: 'lg' },
                { label: 'Extra Large (1280px)', value: 'xl' },
                { label: 'Full', value: 'full' },
              ],
              admin: {
                description: 'Set the maximum width of the text container',
              },
            },
            {
              name: 'padding',
              type: 'select',
              label: 'Padding',
              defaultValue: 'md',
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
