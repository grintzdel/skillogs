import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { createIconPickerField } from '@/fields/iconPicker'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'backgroundColor',
      type: 'text',
      label: 'Couleur de fond',
      defaultValue: '#000000',
      admin: {
        description: 'Couleur de fond du footer',
        components: {
          Field: '@/fields/colorPicker#ColorPickerField',
        },
      },
    },
    {
      name: 'textColor',
      type: 'text',
      label: 'Couleur des textes',
      defaultValue: '#ffffff',
      admin: {
        description: 'Couleur des liens et textes du footer',
        components: {
          Field: '@/fields/colorPicker#ColorPickerField',
        },
      },
    },
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigation Links',
      fields: [
        link({
          appearances: false,
        }),
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
        description: 'Les liens seront organisés en colonnes de 3 maximum',
      },
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Réseaux Sociaux',
      fields: [
        createIconPickerField({ name: 'icon', label: 'Icône', required: true }),
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
          admin: {
            placeholder: 'https://...',
          },
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label (accessibilité)',
          required: true,
          admin: {
            description: 'Ex: Facebook, Twitter, LinkedIn',
          },
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright',
      defaultValue: '© 2026 Skillogs',
      admin: {
        placeholder: '© 2026 Skillogs',
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
