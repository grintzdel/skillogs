import type { Block } from 'payload'
import { Content } from '../Content/config'
import { MediaBlock } from '../MediaBlock/config'
import { CallToAction } from '../CallToAction/config'
import { Archive } from '../ArchiveBlock/config'
import { FormBlock } from '../Form/config'
import { Button } from '../Button/config'
import { Heading } from '../Heading/config'
import { Spacer } from '../Spacer/config'
import { Container } from '../Container/config'

export const Section: Block = {
  slug: 'section',
  interfaceName: 'SectionBlock',
  labels: {
    singular: 'Section',
    plural: 'Sections',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'blocks',
              type: 'blocks',
              label: 'Content',
              blocks: [
                Content,
                MediaBlock,
                CallToAction,
                Archive,
                FormBlock,
                Button,
                Heading,
                Spacer,
                Container,
              ],
            },
          ],
        },
        {
          label: 'Style',
          fields: [
            {
              name: 'backgroundColor',
              type: 'select',
              defaultValue: 'transparent',
              options: [
                { label: 'Transparent', value: 'transparent' },
                { label: 'White', value: 'white' },
                { label: 'Gray Light', value: 'gray-light' },
                { label: 'Gray', value: 'gray' },
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Dark', value: 'dark' },
              ],
            },
            {
              name: 'padding',
              type: 'select',
              defaultValue: 'md',
              options: [
                { label: 'None', value: 'none' },
                { label: 'Small', value: 'sm' },
                { label: 'Medium', value: 'md' },
                { label: 'Large', value: 'lg' },
                { label: 'XLarge', value: 'xl' },
              ],
            },
            {
              name: 'containerWidth',
              type: 'select',
              defaultValue: 'container',
              label: 'Container Width',
              options: [
                { label: 'Full Width', value: 'full' },
                { label: 'Container', value: 'container' },
                { label: 'Narrow', value: 'narrow' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
