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
  <div style="display: flex;flex-wrap: wrap;gap: 10px">
    <t-input v-model="value" disabled />
    <t-input v-model="value" size="large" />
    <t-input v-model="value" />
    <t-input v-model="value" size="small">
      <template #prefix>
        A
      </template>
      <template #suffix>
        B
      </template>
    </t-input>
    <t-input v-model="value" size="small" />
  </div>
  {{ value }}
</template>
