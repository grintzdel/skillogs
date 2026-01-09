import React, { Fragment } from 'react'

import type {
  ArchiveBlock as ArchiveBlockType,
  CallToActionBlock as CallToActionBlockType,
  ContentBlock as ContentBlockType,
  FormBlock as FormBlockType,
  MediaBlock as MediaBlockType,
  ButtonBlock as ButtonBlockType,
  TextImageSectionBlock as TextImageSectionBlockType,
  SectionBlock as SectionBlockType,
  HeadingBlock as HeadingBlockType,
  SpacerBlock as SpacerBlockType,
  ContainerBlock as ContainerBlockType,
  FeaturesSectionBlock as FeaturesSectionBlockType,
  CTASectionBlock as CTASectionBlockType,
  TwoColumnsSectionBlock as TwoColumnsSectionBlockType,
  TextBlock as TextBlockType,
  CardGridSectionBlock as CardGridSectionBlockType,
  MediaGridSectionBlock as MediaGridSectionBlockType,
} from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ButtonBlock } from '@/blocks/Button/Component'
import { TextImageSectionBlock } from '@/blocks/TextImageSection/Component'
import { SectionBlock } from '@/blocks/Section/Component'
import { HeadingBlock } from '@/blocks/Heading/Component'
import { SpacerBlock } from '@/blocks/Spacer/Component'
import { ContainerBlock } from '@/blocks/Container/Component'
import { FeaturesSectionBlock } from '@/blocks/FeaturesSection/Component'
import { CTASectionBlock } from '@/blocks/CTASection/Component'
import { TwoColumnsSectionBlock } from '@/blocks/TwoColumnsSection/Component'
import { TextBlock } from '@/blocks/Text/Component'
import { CardGridSectionBlock } from '@/blocks/CardGridSection/Component'
import { MediaGridSectionBlock } from '@/blocks/MediaGridSection/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  button: ButtonBlock,
  textImageSection: TextImageSectionBlock,
  section: SectionBlock,
  heading: HeadingBlock,
  spacer: SpacerBlock,
  container: ContainerBlock,
  featuresSection: FeaturesSectionBlock,
  ctaSection: CTASectionBlock,
  twoColumnsSection: TwoColumnsSectionBlock,
  text: TextBlock,
  cardGridSection: CardGridSectionBlock,
  mediaGridSection: MediaGridSectionBlock,
}

type AnyBlock =
  | ArchiveBlockType
  | CallToActionBlockType
  | ContentBlockType
  | FormBlockType
  | MediaBlockType
  | ButtonBlockType
  | TextImageSectionBlockType
  | SectionBlockType
  | HeadingBlockType
  | SpacerBlockType
  | ContainerBlockType
  | FeaturesSectionBlockType
  | CTASectionBlockType
  | TwoColumnsSectionBlockType
  | TextBlockType
  | CardGridSectionBlockType
  | MediaGridSectionBlockType

export const RenderBlocks: React.FC<{
  blocks: AnyBlock[]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType as keyof typeof blockComponents]

            if (Block) {
              return (
                <div key={index}>
                  <Block {...(block as any)} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
