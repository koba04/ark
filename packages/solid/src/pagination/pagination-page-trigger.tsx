import type { Assign } from '@polymorphic-factory/solid'
import { children, createEffect, JSX } from 'solid-js'
import { spread } from 'solid-js/web'
import { createSplitProps } from '../create-split-props'
import { ark, HTMLArkProps } from '../factory'
import { usePaginationContext } from './pagination-context'

type PaginationPageTriggerParams = {
  children: JSX.Element
  value: number
}
export type PaginationPageTriggerProps = Assign<HTMLArkProps<'li'>, PaginationPageTriggerParams>

export const PaginationPageTrigger = (props: PaginationPageTriggerProps) => {
  const [itemParams, liProps] = createSplitProps<Omit<PaginationPageTriggerParams, 'children'>>()(
    props,
    ['value'],
  )
  const pagination = usePaginationContext()

  const getChildren = children(() => props.children)
  createEffect(() => {
    const children = getChildren()
    if (children instanceof Element) {
      spread(
        children,
        pagination().getItemProps({
          type: 'page',
          value: itemParams.value,
        }),
      )
    }
  })

  return <ark.li {...liProps}>{getChildren()}</ark.li>
}