import type { Block } from 'payload'
import { Content } from '../Content/config'
import { MediaBlock } from '../MediaBlock/config'
import { CallToAction } from '../CallToAction/config'
import { Button } from '../Button/config'
import { Heading } from '../Heading/config'
import { Spacer } from '../Spacer/config'

export const Container: Block = {
  slug: 'container',
  interfaceName: 'ContainerBlock',
  labels: {
    singular: 'Container',
    plural: 'Containers',
  },
  fields: [
    {
      name: 'direction',
      type: 'select',
      label: 'Flex Direction',
      defaultValue: 'column',
      options: [
        { label: 'Colonne (vertical)', value: 'column' },
        { label: 'Ligne (horizontal)', value: 'row' },
      ],
    },
    {
      name: 'justifyContent',
      type: 'select',
      label: 'Justify Content',
      defaultValue: 'start',
      options: [
        { label: 'Start', value: 'start' },
        { label: 'Center', value: 'center' },
        { label: 'End', value: 'end' },
        { label: 'Space Between', value: 'between' },
        { label: 'Space Around', value: 'around' },
        { label: 'Space Evenly', value: 'evenly' },
      ],
    },
    {
      name: 'alignItems',
      type: 'select',
      label: 'Align Items',
      defaultValue: 'start',
      options: [
        { label: 'Start', value: 'start' },
        { label: 'Center', value: 'center' },
        { label: 'End', value: 'end' },
        { label: 'Stretch', value: 'stretch' },
        { label: 'Baseline', value: 'baseline' },
      ],
    },
    {
      name: 'gap',
      type: 'select',
      label: 'Gap',
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
      name: 'flexWrap',
      type: 'select',
      label: 'Flex Wrap',
      defaultValue: 'nowrap',
      options: [
        { label: 'No Wrap', value: 'nowrap' },
        { label: 'Wrap', value: 'wrap' },
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
      name: 'blocks',
      type: 'blocks',
      label: 'Content',
      blocks: [Content, MediaBlock, CallToAction, Button, Heading, Spacer],
    },
  ],
}
