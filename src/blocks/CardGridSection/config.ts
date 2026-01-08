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

export const CardGridSection: Block = {
  slug: 'cardGridSection',
  interfaceName: 'CardGridSectionBlock',
  labels: {
    singular: 'Card Grid Section',
    plural: 'Card Grid Sections',
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
              name: 'cards',
              type: 'array',
              label: 'Cards',
              fields: [
                {
                  name: 'number',
                  type: 'richText',
                  label: 'Number/Step',
                  editor: lexicalEditor({
                    features: typographyFeatures,
                  }),
                  admin: {
                    description: 'Numéro ou texte affiché au-dessus du titre',
                  },
                },
                {
                  name: 'title',
                  type: 'richText',
                  label: 'Card Title',
                  editor: lexicalEditor({
                    features: typographyFeatures,
                  }),
                },
                {
                  name: 'description',
                  type: 'richText',
                  label: 'Card Description',
                  editor: lexicalEditor({
                    features: typographyFeatures,
                  }),
                },
                {
                  name: 'media',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Card Media',
                },
                {
                  name: 'mediaPosition',
                  type: 'select',
                  label: 'Media Position',
                  defaultValue: 'top',
                  options: [
                    { label: 'Above Title', value: 'top' },
                    { label: 'Below Description', value: 'bottom' },
                  ],
                  admin: {
                    description: 'Position du média dans la carte',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Card Style',
          fields: [
            {
              name: 'enableCard',
              type: 'checkbox',
              label: 'Enable Card Style',
              defaultValue: true,
              admin: {
                description:
                  'Active un style de carte avec fond et/ou bordure. Si désactivé, seul le contenu est affiché.',
              },
            },
            {
              name: 'cardBackgroundColor',
              type: 'text',
              label: 'Card Background Color',
              admin: {
                description: 'Couleur de fond des cartes (HEX format: #RRGGBB)',
                condition: (_, siblingData) => siblingData?.enableCard,
              },
            },
            {
              name: 'cardBorderColor',
              type: 'text',
              label: 'Card Border Color',
              admin: {
                description: 'Couleur de bordure des cartes (HEX format: #RRGGBB)',
                condition: (_, siblingData) => siblingData?.enableCard,
              },
            },
            {
              name: 'cardBorderRadius',
              type: 'select',
              label: 'Card Border Radius',
              defaultValue: 'md',
              options: [
                { label: 'None', value: 'none' },
                { label: 'Small (4px)', value: 'sm' },
                { label: 'Medium (8px)', value: 'md' },
                { label: 'Large (12px)', value: 'lg' },
                { label: 'XLarge (16px)', value: 'xl' },
                { label: 'Full (9999px)', value: 'full' },
              ],
              admin: {
                condition: (_, siblingData) => siblingData?.enableCard,
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
          ],
        },
      ],
    },
  ],
}
