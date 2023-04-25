import type { ChannelProps } from '@zag-js/color-picker/dist/color-picker.types'
import { mergeProps } from 'solid-js'
import { createSplitProps } from '../create-split-props'
import { ark, type HTMLArkProps } from '../factory'
import { ColorPickerSliderProvider } from './color-picker-channel-slider-context'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerSliderTrackProps = HTMLArkProps<'div'> & ChannelProps

export const ColorPickerSliderTrack = (props: ColorPickerSliderTrackProps) => {
  const [channelProps, divProps] = createSplitProps<ChannelProps>()(props, [
    'channel',
    'orientation',
  ])
  const colorPicker = useColorPickerContext()
  const mergedProps = mergeProps(colorPicker().getChannelSliderTrackProps(channelProps), divProps)

  return (
    <ColorPickerSliderProvider value={channelProps}>
      <ark.div {...mergedProps} />
      {/* <ark.div {...colorPicker().getChannelSliderBackgroundProps(channelProps)}> */}
      {/* {children}
        </ark.div> */}
    </ColorPickerSliderProvider>
  )
}