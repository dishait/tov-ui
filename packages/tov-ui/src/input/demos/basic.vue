<docs>
---
title: 输入框基础用法
---

这是一个`input`输入框最基本的使用例子
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
    <t-input v-model="value" />
  </div>
  {{ value }}
</template>
