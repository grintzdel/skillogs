import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
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

import { linkGroup } from '../../fields/linkGroup'

export const CallToAction: Block = {
  slug: 'cta',
  interfaceName: 'CallToActionBlock',
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
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
    },
    linkGroup({
      appearances: false,
      overrides: {
        maxRows: 2,
      },
    }),
  ],
  labels: {
    plural: 'Calls to Action',
    singular: 'Call to Action',
  },
}
