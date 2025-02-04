import * as fileUpload from '@zag-js/file-upload'
import { normalizeProps, useMachine, type PropTypes } from '@zag-js/vue'
import { computed, ref, type ComputedRef } from 'vue'
import { useEnvironmentContext } from '../environment'
import { type Optional } from '../types'
import { useId } from '../utils'

export interface UseFileUploadProps extends Optional<fileUpload.Context, 'id'> {}

export interface UseFileUploadReturn extends ComputedRef<fileUpload.Api<PropTypes>> {}

export const useFileUpload = (
  props: UseFileUploadProps,
  emit: CallableFunction,
): UseFileUploadReturn => {
  const getRootNode = useEnvironmentContext()
  const context = ref(props)

  const [state, send] = useMachine(
    fileUpload.machine({
      ...context.value,
      id: context.value.id ?? useId().value,
      getRootNode,
      onFilesChange: (details) => {
        emit('files-change', details)
      },
      isValidFile: context.value.isValidFile,
    }),
    { context },
  )

  return computed(() => fileUpload.connect(state.value, send, normalizeProps))
}
