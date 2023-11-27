<docs>
---
title: 基本使用
---

表格的基本用法
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  {
    title: '姓名',
    key: 'name',
  },
  {
    title: '年龄',
    key: 'age',
  },
  {
    title: '地址',
    key: 'address',
  },
])
</script>

<template>
  <t-table :columns="columns">
    <!--    -->
  </t-table>
</template>

<style scoped>

</style>
