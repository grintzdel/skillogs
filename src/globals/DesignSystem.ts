import type { GlobalConfig } from 'payload'

export const DesignSystem: GlobalConfig = {
  slug: 'design-system',
  label: 'Design System',
  access: {
    read: () => true,
    update: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Colors',
          fields: [
            {
              type: 'collapsible',
              label: 'Brand Colors',
              fields: [
                {
                  name: 'primaryColor',
                  type: 'text',
                  label: 'Primary Color',
                  defaultValue: '#5036ff',
                  admin: {
                    description: 'Main brand color (HEX format: #RRGGBB)',
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                  required: true,
                },
                {
                  name: 'secondaryColor',
                  type: 'text',
                  label: 'Secondary Color',
                  defaultValue: '#8b5cf6',
                  admin: {
                    description: 'Secondary brand color (HEX format: #RRGGBB)',
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                  required: true,
                },
                {
                  name: 'accentColor',
                  type: 'text',
                  label: 'Accent Color',
                  defaultValue: '#bcff5f',
                  admin: {
                    description: 'Accent/highlight color (HEX format: #RRGGBB)',
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                  required: true,
                },
              ],
            },
            {
              type: 'collapsible',
              label: 'Semantic Colors',
              fields: [
                {
                  name: 'successColor',
                  type: 'text',
                  label: 'Success Color',
                  defaultValue: '#22c55e',
                  admin: {
                    description: 'Success state color (HEX format: #RRGGBB)',
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                  required: true,
                },
                {
                  name: 'warningColor',
                  type: 'text',
                  label: 'Warning Color',
                  defaultValue: '#f59e0b',
                  admin: {
                    description: 'Warning state color (HEX format: #RRGGBB)',
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                  required: true,
                },
                {
                  name: 'errorColor',
                  type: 'text',
                  label: 'Error Color',
                  defaultValue: '#ef4444',
                  admin: {
                    description: 'Error state color (HEX format: #RRGGBB)',
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                  required: true,
                },
              ],
            },
            {
              type: 'collapsible',
              label: 'Custom Colors',
              fields: [
                {
                  name: 'customColors',
                  type: 'array',
                  label: 'Additional Colors',
                  admin: {
                    description: 'Add up to 2 additional custom colors',
                  },
                  maxRows: 2,
                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                      label: 'Color Label',
                      required: true,
                      admin: {
                        description: 'e.g., "Tertiary", "Custom Blue"',
                      },
                    },
                    {
                      name: 'value',
                      type: 'text',
                      label: 'Color Value',
                      required: true,
                      admin: {
                        description: 'HEX color value (format: #RRGGBB)',
                        components: {
                          Field: '@/components/ColorPickerField',
                        },
                      },
                    },
                  ],
                },
              ],
            },
            {
              type: 'collapsible',
              label: 'Preview',
              admin: {
                description: 'Preview of your color palette',
              },
              fields: [
                {
                  name: 'colorPreview',
                  type: 'ui',
                  admin: {
                    components: {
                      Field: '@/components/ColorPalettePreview',
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Buttons',
          fields: [
            {
              type: 'collapsible',
              label: 'Primary Button',
              fields: [
                {
                  name: 'primaryButtonHasBackground',
                  type: 'checkbox',
                  label: 'Has Background Color',
                  defaultValue: true,
                },
                {
                  name: 'primaryButtonBackgroundColor',
                  type: 'text',
                  label: 'Background Color',
                  defaultValue: '#bcff5f',
                  admin: {
                    description: 'Background color (HEX format: #RRGGBB)',
                    condition: (_data, siblingData) => siblingData?.primaryButtonHasBackground,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'primaryButtonHasBorder',
                  type: 'checkbox',
                  label: 'Has Border',
                  defaultValue: false,
                },
                {
                  name: 'primaryButtonBorderColor',
                  type: 'text',
                  label: 'Border Color',
                  defaultValue: '#bcff5f',
                  admin: {
                    description: 'Border color (HEX format: #RRGGBB)',
                    condition: (_data, siblingData) => siblingData?.primaryButtonHasBorder,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'primaryButtonTextColor',
                  type: 'text',
                  label: 'Text Color',
                  defaultValue: '#000000',
                  required: true,
                  admin: {
                    description: 'Text color (HEX format: #RRGGBB)',
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'primaryButtonBorderRadius',
                  type: 'number',
                  label: 'Border Radius (px)',
                  defaultValue: 6,
                  min: 0,
                  max: 50,
                  admin: {
                    description: 'Border radius in pixels (0-50)',
                  },
                },
                {
                  name: 'primaryButtonFontBold',
                  type: 'checkbox',
                  label: 'Bold Text',
                  defaultValue: true,
                },
                {
                  name: 'primaryButtonFontItalic',
                  type: 'checkbox',
                  label: 'Italic Text',
                  defaultValue: false,
                },
                {
                  name: 'primaryButtonTextUnderline',
                  type: 'checkbox',
                  label: 'Underline Text',
                  defaultValue: false,
                },
                {
                  name: 'primaryButtonEnableHover',
                  type: 'checkbox',
                  label: 'Enable Hover Effects',
                  defaultValue: false,
                  admin: {
                    description: 'Enable custom hover effects for this button',
                  },
                },
                {
                  name: 'primaryButtonHoverBackgroundColor',
                  type: 'text',
                  label: 'Hover Background Color',
                  admin: {
                    description: 'Background color on hover (HEX format: #RRGGBB)',
                    condition: (_data, siblingData) => siblingData?.primaryButtonEnableHover,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'primaryButtonHoverBorderColor',
                  type: 'text',
                  label: 'Hover Border Color',
                  admin: {
                    description: 'Border color on hover (HEX format: #RRGGBB)',
                    condition: (_data, siblingData) => siblingData?.primaryButtonEnableHover,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'primaryButtonHoverTextColor',
                  type: 'text',
                  label: 'Hover Text Color',
                  admin: {
                    description: 'Text color on hover (HEX format: #RRGGBB)',
                    condition: (_data, siblingData) => siblingData?.primaryButtonEnableHover,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'primaryButtonHoverOpacity',
                  type: 'number',
                  label: 'Hover Opacity',
                  defaultValue: 1,
                  min: 0,
                  max: 1,
                  admin: {
                    step: 0.1,
                    description: 'Opacity on hover (0-1, default: 1)',
                    condition: (_data, siblingData) => siblingData?.primaryButtonEnableHover,
                  },
                },
                {
                  name: 'primaryButtonPreview',
                  type: 'ui',
                  admin: {
                    components: {
                      Field: '@/components/PrimaryButtonPreview',
                    },
                  },
                },
              ],
            },
            {
              type: 'collapsible',
              label: 'Secondary Button',
              fields: [
                {
                  name: 'secondaryButtonHasBackground',
                  type: 'checkbox',
                  label: 'Has Background Color',
                  defaultValue: true,
                },
                {
                  name: 'secondaryButtonBackgroundColor',
                  type: 'text',
                  label: 'Background Color',
                  defaultValue: '#4b5563',
                  admin: {
                    description: 'Background color (HEX format: #RRGGBB)',
                    condition: (_data, siblingData) => siblingData?.secondaryButtonHasBackground,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'secondaryButtonHasBorder',
                  type: 'checkbox',
                  label: 'Has Border',
                  defaultValue: false,
                },
                {
                  name: 'secondaryButtonBorderColor',
                  type: 'text',
                  label: 'Border Color',
                  defaultValue: '#4b5563',
                  admin: {
                    description: 'Border color (HEX format: #RRGGBB)',
                    condition: (_data, siblingData) => siblingData?.secondaryButtonHasBorder,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'secondaryButtonTextColor',
                  type: 'text',
                  label: 'Text Color',
                  defaultValue: '#ffffff',
                  required: true,
                  admin: {
                    description: 'Text color (HEX format: #RRGGBB)',
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'secondaryButtonBorderRadius',
                  type: 'number',
                  label: 'Border Radius (px)',
                  defaultValue: 6,
                  min: 0,
                  max: 50,
                  admin: {
                    description: 'Border radius in pixels (0-50)',
                  },
                },
                {
                  name: 'secondaryButtonFontBold',
                  type: 'checkbox',
                  label: 'Bold Text',
                  defaultValue: true,
                },
                {
                  name: 'secondaryButtonFontItalic',
                  type: 'checkbox',
                  label: 'Italic Text',
                  defaultValue: false,
                },
                {
                  name: 'secondaryButtonTextUnderline',
                  type: 'checkbox',
                  label: 'Underline Text',
                  defaultValue: false,
                },
                {
                  name: 'secondaryButtonEnableHover',
                  type: 'checkbox',
                  label: 'Enable Hover Effects',
                  defaultValue: false,
                  admin: {
                    description: 'Enable custom hover effects for this button',
                  },
                },
                {
                  name: 'secondaryButtonHoverBackgroundColor',
                  type: 'text',
                  label: 'Hover Background Color',
                  admin: {
                    description: 'Background color on hover (HEX format: #RRGGBB)',
                    condition: (_data, siblingData) => siblingData?.secondaryButtonEnableHover,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'secondaryButtonHoverBorderColor',
                  type: 'text',
                  label: 'Hover Border Color',
                  admin: {
                    description: 'Border color on hover (HEX format: #RRGGBB)',
                    condition: (_data, siblingData) => siblingData?.secondaryButtonEnableHover,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'secondaryButtonHoverTextColor',
                  type: 'text',
                  label: 'Hover Text Color',
                  admin: {
                    description: 'Text color on hover (HEX format: #RRGGBB)',
                    condition: (_data, siblingData) => siblingData?.secondaryButtonEnableHover,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'secondaryButtonHoverOpacity',
                  type: 'number',
                  label: 'Hover Opacity',
                  defaultValue: 1,
                  min: 0,
                  max: 1,
                  admin: {
                    step: 0.1,
                    description: 'Opacity on hover (0-1, default: 1)',
                    condition: (_data, siblingData) => siblingData?.secondaryButtonEnableHover,
                  },
                },
                {
                  name: 'secondaryButtonPreview',
                  type: 'ui',
                  admin: {
                    components: {
                      Field: '@/components/SecondaryButtonPreview',
                    },
                  },
                },
              ],
            },
            {
              type: 'collapsible',
              label: 'Outline Button',
              fields: [
                {
                  name: 'outlineButtonHasBackground',
                  type: 'checkbox',
                  label: 'Has Background Color',
                  defaultValue: false,
                },
                {
                  name: 'outlineButtonBackgroundColor',
                  type: 'text',
                  label: 'Background Color',
                  defaultValue: 'transparent',
                  admin: {
                    description: 'Background color (HEX format: #RRGGBB or "transparent")',
                    condition: (_data, siblingData) => siblingData?.outlineButtonHasBackground,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'outlineButtonHasBorder',
                  type: 'checkbox',
                  label: 'Has Border',
                  defaultValue: true,
                },
                {
                  name: 'outlineButtonBorderColor',
                  type: 'text',
                  label: 'Border Color',
                  defaultValue: '#5036ff',
                  admin: {
                    description: 'Border color (HEX format: #RRGGBB)',
                    condition: (_data, siblingData) => siblingData?.outlineButtonHasBorder,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'outlineButtonTextColor',
                  type: 'text',
                  label: 'Text Color',
                  defaultValue: '#5036ff',
                  required: true,
                  admin: {
                    description: 'Text color (HEX format: #RRGGBB)',
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'outlineButtonBorderRadius',
                  type: 'number',
                  label: 'Border Radius (px)',
                  defaultValue: 6,
                  min: 0,
                  max: 50,
                  admin: {
                    description: 'Border radius in pixels (0-50)',
                  },
                },
                {
                  name: 'outlineButtonFontBold',
                  type: 'checkbox',
                  label: 'Bold Text',
                  defaultValue: false,
                },
                {
                  name: 'outlineButtonFontItalic',
                  type: 'checkbox',
                  label: 'Italic Text',
                  defaultValue: false,
                },
                {
                  name: 'outlineButtonTextUnderline',
                  type: 'checkbox',
                  label: 'Underline Text',
                  defaultValue: false,
                },
                {
                  name: 'outlineButtonEnableHover',
                  type: 'checkbox',
                  label: 'Enable Hover Effects',
                  defaultValue: false,
                  admin: {
                    description: 'Enable custom hover effects for this button',
                  },
                },
                {
                  name: 'outlineButtonHoverBackgroundColor',
                  type: 'text',
                  label: 'Hover Background Color',
                  admin: {
                    description: 'Background color on hover (HEX format: #RRGGBB)',
                    condition: (_data, siblingData) => siblingData?.outlineButtonEnableHover,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'outlineButtonHoverBorderColor',
                  type: 'text',
                  label: 'Hover Border Color',
                  admin: {
                    description: 'Border color on hover (HEX format: #RRGGBB)',
                    condition: (_data, siblingData) => siblingData?.outlineButtonEnableHover,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'outlineButtonHoverTextColor',
                  type: 'text',
                  label: 'Hover Text Color',
                  admin: {
                    description: 'Text color on hover (HEX format: #RRGGBB)',
                    condition: (_data, siblingData) => siblingData?.outlineButtonEnableHover,
                    components: {
                      Field: '@/components/ColorPickerField',
                    },
                  },
                },
                {
                  name: 'outlineButtonHoverOpacity',
                  type: 'number',
                  label: 'Hover Opacity',
                  defaultValue: 1,
                  min: 0,
                  max: 1,
                  admin: {
                    step: 0.1,
                    description: 'Opacity on hover (0-1, default: 1)',
                    condition: (_data, siblingData) => siblingData?.outlineButtonEnableHover,
                  },
                },
                {
                  name: 'outlineButtonPreview',
                  type: 'ui',
                  admin: {
                    components: {
                      Field: '@/components/OutlineButtonPreview',
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
