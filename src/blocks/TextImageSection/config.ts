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

export const TextImageSection: Block = {
  slug: 'textImageSection',
  interfaceName: 'TextImageSectionBlock',
  labels: {
    singular: 'Text Button and Image Section',
    plural: 'Text Button and Image Sections',
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
                    createIconPickerField({ name: 'startIcon', label: 'Icône bouton' }),
                    {
                      name: 'label',
                      type: 'text',
                      required: true,
                      admin: {
                        width: '50%',
                      },
                    },
                    createIconPickerField({ name: 'endIcon', label: 'Icône bouton' }),
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
          label: 'Layout',
          fields: [
            {
              name: 'layout',
              type: 'select',
              defaultValue: 'centered',
              options: [
                { label: 'Centered', value: 'centered' },
                { label: 'Left Aligned', value: 'left' },
                { label: 'Split (Text/Image)', value: 'split' },
              ],
            },
            {
              name: 'columns',
              type: 'select',
              defaultValue: 'one',
              options: [
                { label: '1 Column', value: 'one' },
                { label: '2 Columns', value: 'two' },
              ],
              admin: {
                condition: (_, siblingData) => siblingData?.layout !== 'split',
              },
            },
          ],
        },
        {
          label: 'Media',
          fields: [
            {
              name: 'mediaType',
              type: 'radio',
              defaultValue: 'image',
              options: [
                { label: 'Image/Video', value: 'image' },
                { label: 'YouTube Video', value: 'youtube' },
              ],
              admin: {
                layout: 'horizontal',
              },
            },
            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
              label: 'Image/Video',
              admin: {
                condition: (_, siblingData) => siblingData?.mediaType !== 'youtube',
              },
            },
            {
              name: 'youtubeUrl',
              type: 'text',
              label: 'YouTube URL',
              admin: {
                condition: (_, siblingData) => siblingData?.mediaType === 'youtube',
                description: 'Paste the YouTube video URL or embed iframe code',
              },
            },
            {
              name: 'mediaPosition',
              type: 'radio',
              defaultValue: 'right',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' },
              ],
              admin: {
                condition: (_, siblingData) => siblingData?.layout === 'split',
                layout: 'horizontal',
              },
            },
            {
              name: 'showMediaShadow',
              type: 'checkbox',
              defaultValue: false,
              label: 'Add Shadow to Media',
              admin: {
                description: 'Add a drop shadow effect to the image/video',
              },
            },
          ],
        },
        {
          label: 'Divider',
          fields: [
            {
              name: 'showDivider',
              type: 'checkbox',
              defaultValue: false,
              label: 'Show Horizontal Divider',
              admin: {
                description: 'Show a divider line after the title',
              },
            },
            {
              name: 'dividerWidth',
              type: 'number',
              defaultValue: 100,
              label: 'Divider Width',
              min: 10,
              max: 100,
              admin: {
                condition: (_, siblingData) => siblingData?.showDivider === true,
                step: 10,
                description: 'Width of the divider in percentage (10% to 100%)',
                components: {
                  Field: '@/fields/rangeSlider#RangeSliderField',
                },
              },
            },
            {
              name: 'dividerThickness',
              type: 'select',
              defaultValue: '1',
              label: 'Divider Thickness',
              options: [
                { label: '1px', value: '1' },
                { label: '2px', value: '2' },
                { label: '4px', value: '4' },
                { label: '8px', value: '8' },
              ],
              admin: {
                condition: (_, siblingData) => siblingData?.showDivider === true,
              },
            },
            {
              name: 'dividerColor',
              type: 'text',
              defaultValue: '#5036ff',
              label: 'Divider Color',
              admin: {
                condition: (_, siblingData) => siblingData?.showDivider === true,
                description: 'Choose a color for the divider',
                components: {
                  Field: '@/fields/colorPicker#ColorPickerField',
                },
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
                { label: 'Gradient', value: 'gradient' },
                { label: 'Image', value: 'image' },
              ],
            },
            {
              name: 'backgroundColor',
              type: 'select',
              defaultValue: 'white',
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
              name: 'gradientType',
              type: 'select',
              defaultValue: 'linear',
              options: [
                { label: 'Linear', value: 'linear' },
                { label: 'Radial', value: 'radial' },
              ],
              admin: {
                condition: (_, siblingData) => siblingData?.backgroundType === 'gradient',
              },
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
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
              defaultValue: 'sm',
              options: [
                { label: 'Small', value: 'sm' },
                { label: 'Medium', value: 'md' },
                { label: 'Large', value: 'lg' },
                { label: 'XLarge', value: 'xl' },
              ],
            },
            {
              name: 'fullHeight',
              type: 'checkbox',
              defaultValue: false,
              label: 'Full Screen Height',
            },
          ],
        },
      ],
    },
  ],
}
