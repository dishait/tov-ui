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

interface Data {
  name: string
  age: number
  address: string
}

const data = ref<Data[]>([])
function genData() {
  Array.from({ length: 10 }).forEach((_, index) => {
    data.value.push({
      name: `王小虎${index}`,
      age: 32,
      address: `上海市普陀区金沙江路 1518 弄${index}`,
    })
  })
}
genData()
</script>

<template>
  <t-table :columns="columns" :data="data" />
  <t-table :data="data">
    <t-table-column index="name" title="姓名" />
    <t-table-column index="age" title="年龄" />
    <t-table-column index="address" title="地址" />
  </t-table>
</template>

<style scoped>

</style>
