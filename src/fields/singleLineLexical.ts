import type { TextFieldSingleValidation } from 'payload'
import {
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  lexicalEditor,
  type LinkFields,
} from '@payloadcms/richtext-lexical'
import {
  TextColorFeature,
  TextSizeFeature,
  TextLetterSpacingFeature,
  TextLineHeightFeature,
  TextFontFamilyFeature,
} from 'payload-lexical-typography'
import { sizes, letterSpacings, lineHeights, fontFamilies, baseColors } from './typographyConfig'

export const singleLineLexical = lexicalEditor({
  features: [
    UnderlineFeature(),
    BoldFeature(),
    ItalicFeature(),
    TextColorFeature({
      colors: baseColors,
      colorPicker: true,
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

export const createSingleLineField = (name: string, label: string, required = false) => ({
  name,
  type: 'richText' as const,
  label,
  required,
  editor: singleLineLexical,
  admin: {
    className: 'single-line-editor',
  },
})
