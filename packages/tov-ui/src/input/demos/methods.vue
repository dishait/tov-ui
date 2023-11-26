<docs>
---
title: 输入框聚焦
---

这是一个`input`输入框聚焦的使用例子
</docs>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const value = ref('')
const inputRef = ref()
onMounted(() => {
  inputRef.value?.focus()
})
</script>

<template>
  <div style="display: flex;flex-wrap: wrap;gap: 10px">
    <t-input ref="inputRef" v-model="value" />
  </div>
</template>
