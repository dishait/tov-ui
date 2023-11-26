<docs>
---
title: 输入框尺寸
---

这是一个`input`输入框尺寸的使用例子。
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div style="display: flex;flex-wrap: wrap;gap: 10px">
    <t-input v-model="value" size="large" />
    <t-input v-model="value" />
    <t-input v-model="value" size="small" />
  </div>
</template>

<style scoped>

</style>
