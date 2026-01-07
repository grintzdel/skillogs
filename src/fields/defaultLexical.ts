import type { TextFieldSingleValidation } from 'payload'
import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  ParagraphFeature,
  lexicalEditor,
  UnderlineFeature,
  type LinkFields,
} from '@payloadcms/richtext-lexical'
import {
  TextColorFeature,
  TextSizeFeature,
  TextLetterSpacingFeature,
  TextLineHeightFeature,
  TextFontFamilyFeature,
} from 'payload-lexical-typography'
import { baseColors, sizes, letterSpacings, lineHeights, fontFamilies } from './typographyConfig'

export const defaultLexical = lexicalEditor({
  features: [
    ParagraphFeature(),
    UnderlineFeature(),
    BoldFeature(),
    ItalicFeature(),
    LinkFeature({
      enabledCollections: ['pages', 'posts'],
      fields: ({ defaultFields }) => {
        const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
          if ('name' in field && field.name === 'url') return false
          return true
        })

        return [
          ...defaultFieldsWithoutUrl,
          {
            name: 'url',
            type: 'text',
            admin: {
              condition: (_data, siblingData) => siblingData?.linkType !== 'internal',
            },
            label: ({ t }) => t('fields:enterURL'),
            required: true,
            validate: ((value, options) => {
              if ((options?.siblingData as LinkFields)?.linkType === 'internal') {
                return true // no validation needed, as no url should exist for internal links
              }
              return value ? true : 'URL is required'
            }) as TextFieldSingleValidation,
          },
        ]
      },
    }),
    // Typography features
    TextColorFeature({
      colors: baseColors, // Couleurs de base + Design System chargées dynamiquement
      colorPicker: true, // Color picker toujours activé pour surcharge personnalisée
    }),
    TextSizeFeature({
      sizes,
      customSize: true,
      scroll: true,
      method: 'combine',
    }),
    TextLetterSpacingFeature({
      spacings: letterSpacings,
      scroll: false,
    }),
    TextLineHeightFeature({
      lineHeights,
      scroll: false,
    }),
    TextFontFamilyFeature({
      fontFamilies,
      scroll: false,
    }),
  ],
})
