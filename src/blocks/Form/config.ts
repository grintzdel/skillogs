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

export const FormBlock: Block = {
  slug: 'formBlock',
  interfaceName: 'FormBlock',
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'enableIntro',
      type: 'checkbox',
      label: 'Enable Intro Content',
    },
    {
      name: 'introContent',
      type: 'richText',
      admin: {
        condition: (_, { enableIntro }) => Boolean(enableIntro),
      },
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
      label: 'Intro Content',
    },
  ],
  graphQL: {
    singularName: 'FormBlock',
  },
  labels: {
    plural: 'Form Blocks',
    singular: 'Form Block',
  },
}
