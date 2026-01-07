import type { Block } from 'payload'
import { Content } from '../Content/config'
import { MediaBlock } from '../MediaBlock/config'
import { CallToAction } from '../CallToAction/config'
import { Archive } from '../ArchiveBlock/config'
import { FormBlock } from '../Form/config'
import { Button } from '../Button/config'
import { Heading } from '../Heading/config'
import { Spacer } from '../Spacer/config'

export const Column: Block = {
  slug: 'column',
  interfaceName: 'ColumnBlock',
  labels: {
    singular: 'Column (Vertical)',
    plural: 'Columns',
  },
  fields: [
    {
      name: 'justifyContent',
      type: 'select',
      label: 'Vertical Alignment',
      defaultValue: 'start',
      options: [
        { label: 'Start (Top)', value: 'start' },
        { label: 'Center', value: 'center' },
        { label: 'End (Bottom)', value: 'end' },
        { label: 'Space Between', value: 'between' },
        { label: 'Space Around', value: 'around' },
        { label: 'Space Evenly', value: 'evenly' },
      ],
    },
    {
      name: 'alignItems',
      type: 'select',
      label: 'Horizontal Alignment',
      defaultValue: 'stretch',
      options: [
        { label: 'Start (Left)', value: 'start' },
        { label: 'Center', value: 'center' },
        { label: 'End (Right)', value: 'end' },
        { label: 'Stretch', value: 'stretch' },
      ],
    },
    {
      name: 'gap',
      type: 'select',
      label: 'Gap Between Elements',
      defaultValue: 'md',
      options: [
        { label: 'None', value: 'none' },
        { label: 'XSmall', value: 'xs' },
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
        { label: 'XLarge', value: 'xl' },
      ],
    },
    {
      name: 'padding',
      type: 'select',
      label: 'Padding',
      defaultValue: 'none',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Small', value: 'sm' },
        { label: 'Medium', value: 'md' },
        { label: 'Large', value: 'lg' },
      ],
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'transparent',
      options: [
        { label: 'Transparent', value: 'transparent' },
        { label: 'White', value: 'white' },
        { label: 'Gray Light', value: 'gray-light' },
        { label: 'Gray', value: 'gray' },
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
      ],
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Content',
      blocks: [Content, MediaBlock, CallToAction, Archive, FormBlock, Button, Heading, Spacer],
    },
  ],
}
