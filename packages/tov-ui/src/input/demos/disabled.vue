<docs>
---
title: 输入框禁用
---

这是一个`input`输入框禁用的使用例子。
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div style="display: flex;flex-wrap: wrap;gap: 10px">
    <t-input v-model="value" size="large" disabled />
    <t-input v-model="value" disabled />
    <t-input v-model="value" size="small" disabled />
  </div>
</template>

<style scoped>

</style>
