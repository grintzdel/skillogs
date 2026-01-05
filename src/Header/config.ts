import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description:
          'Logo affiché dans le header (formats recommandés : SVG, PNG avec fond transparent)',
      },
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        {
          name: 'hasSubmenu',
          type: 'checkbox',
          label: 'Afficher un sous-menu',
          defaultValue: false,
          admin: {
            description: 'Cochez cette case pour créer un menu déroulant avec plusieurs sous-items',
          },
        },
        link({
          appearances: false,
          overrides: {
            admin: {
              condition: (data, siblingData) => !siblingData?.hasSubmenu,
            },
          },
        }),
        {
          name: 'submenuLabel',
          type: 'text',
          label: 'Titre du menu parent',
          required: true,
          admin: {
            condition: (data, siblingData) => siblingData?.hasSubmenu,
            description: 'Ex: Ressources',
          },
        },
        {
          name: 'submenuItems',
          type: 'array',
          label: 'Sous-items',
          minRows: 1,
          maxRows: 10,
          fields: [
            link({
              appearances: false,
            }),
          ],
          admin: {
            condition: (data, siblingData) => siblingData?.hasSubmenu,
            initCollapsed: true,
            components: {
              RowLabel: '@/Header/RowLabel#RowLabel',
            },
          },
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
