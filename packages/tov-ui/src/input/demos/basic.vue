<docs>
---
title: 输入框基础用法
---

这是一个`input`输入框最基本的使用例子
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div style="border: 1px solid black;">
    <t-input v-model="value" />
  </div>
  {{ value }}
</template>
