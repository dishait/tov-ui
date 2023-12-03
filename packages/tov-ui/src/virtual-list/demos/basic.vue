<docs>
---
title: 基本使用
---

虚拟列表的基本用法
</docs>

<script setup lang="ts">
const data = Array.from({ length: 1000 }).map((_, index) => {
  return {
    id: index + 1,
    name: `Test${index + 1}`,
  }
})
function handleClickItem(item) {
  console.log(item)
}
</script>

<template>
  <div>
    <t-virtual-list
      :height="400"
      :data="data"
      @clickItem="handleClickItem"
    >
      <template #item="{ item }">
        <div class="item-data">
          {{ item.name }}
        </div>
      </template>
    </t-virtual-list>
  </div>
</template>

<style scoped>
.item-data{
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
