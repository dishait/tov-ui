<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { useClassname } from '@tov-ui/utils'

export default defineComponent({
  name: 'TButton',
  props: {
    type: {
      type: String as PropType<'default' | 'primary' | 'dashed'>,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<'default' | 'small' | 'large'>,
      default: 'default',
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const { cx, c, cm } = useClassname('button')
    const cls = cx(() => {
      return {
        [c()]: true,
        [c(cm(props.type))]: !!props.type,
        [c('size', cm(props.size))]: props.size !== 'default',
      }
    })

    const handleClick = (e: MouseEvent) => {
      if (props.disabled)
        return
      emit('click', e)
    }
    return {
      cls,
      handleClick,
    }
  },
})
</script>

<template>
  <button :class="cls" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>
