<script setup lang="ts">
import { nextTick, onMounted, ref, watchEffect } from 'vue'
import { useClassname } from '@tov-ui/utils'
import { omit, pick } from '@v-c/utils'
import type { InputProps } from './typing'

defineOptions({
  // 导出名字
  name: 'TInput',
  inheritAttrs: false,
})
// 我们通过defineProps后的尖括号中来放我们的类型属性
const props = withDefaults(defineProps<InputProps>(), {
  placeholder: '请输入',
  size: 'default',
})
// 事件的定义，我们还是直接写在defineEmits中来实现
const emit = defineEmits<{ 'update:modelValue': [value: string]; change: [value: string] }>()
defineSlots<{
  suffix(): any
  prefix(): any
}>()
const { c, cx, cm, ce } = useClassname('input')

const cls = cx(() => {
  return {
    [c()]: true,
    [c(cm('disabled'))]: props.disabled,
    [c(cm(props.size))]: props.size !== 'default',
  }
})
const inputCls = cx(() => {
  return {
    [c('wrapper')]: true,
  }
})
const input = ref<HTMLInputElement>()
const domRef = ref<HTMLDivElement>()

function setInputValue() {
  const _input = input.value
  const modelValue = props.modelValue ?? ''
  // 如果input不存在或者数据是相等的，那么我么就不需要做赋值的处理
  if (!_input || _input.value === modelValue)
    return
  // 如果值不相同，那么我们就直接进行赋值的操作
  _input.value = modelValue
}
// 接下来我们就需要给input绑定我们的modelValue
// 然后我们使用一个函数来接收一下我们的input的传值
function handleInput(e: Event) {
  const inputEl = e.target as HTMLInputElement
  // 这里我们判断一下，如果input的值和我们的modelValue相同，那么我们就不需要做赋值的操作
  if (inputEl.value === props.modelValue)
    return

  emit('update:modelValue', inputEl.value)
  emit('change', inputEl.value)
  nextTick(() => {
    setInputValue()
  })
}
// 第一次初始化的时候，我么也需要实现一下赋值的操作
onMounted(() => {
  setInputValue()
})

watchEffect(() => {
  if (props.modelValue)
    setInputValue()
})
const orginInputProps = ['autocomplete']

function focus() {
  input.value?.focus()
}
function blur() {
  input.value?.blur()
}

defineExpose({
  focus,
  blur,
})
</script>

<template>
  <div ref="domRef" :class="[cls, $attrs.class]" v-bind="omit($attrs, orginInputProps)">
    <template v-if="$slots.prefix">
      <span :class="c(ce('prefix'))">
        <slot name="prefix" />
      </span>
    </template>
    <input
      ref="input"
      :class="inputCls"
      :disabled="disabled"
      v-bind="pick($attrs, orginInputProps)"
      :placeholder="placeholder"
      @input="handleInput"
    >
    <template v-if="$slots.suffix">
      <span :class="c(ce('suffix'))">
        <slot name="suffix" />
      </span>
    </template>
  </div>
</template>
