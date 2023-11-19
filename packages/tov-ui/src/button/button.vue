<script lang="ts">
import { defineComponent } from 'vue'
import { useClassname } from '@tov-ui/utils'

export default defineComponent({
  name: 'TButton',
  emits: ['click'],
  setup(_props, { emit }) {
    const { cx, c } = useClassname('button')
    const cls = cx(() => {
      return {
        [c()]: true,
      }
    })

    const handleClick = (e: MouseEvent) => {
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
  <button :class="cls" @click="handleClick">
    Tbutton
  </button>
</template>
