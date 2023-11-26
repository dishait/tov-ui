<docs>
---
title: 使用输入框插槽
---

我们可以通过`prefix`和`suffix`插槽来自定义输入框的前后缀。
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div style="display: flex;flex-wrap: wrap;gap: 10px">
    <t-input v-model="value" size="small">
      <template #prefix>
        A
      </template>
      <template #suffix>
        B
      </template>
    </t-input>
  </div>
</template>

<style scoped>

</style>
