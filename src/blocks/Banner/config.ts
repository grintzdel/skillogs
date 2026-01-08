import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
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

export const Banner: Block = {
  slug: 'banner',
  fields: [
    {
      name: 'style',
      type: 'select',
      defaultValue: 'info',
      options: [
        { label: 'Info', value: 'info' },
        { label: 'Warning', value: 'warning' },
        { label: 'Error', value: 'error' },
        { label: 'Success', value: 'success' },
      ],
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
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
        },
      }),
      label: false,
      required: true,
    },
  ],
  interfaceName: 'BannerBlock',
}
