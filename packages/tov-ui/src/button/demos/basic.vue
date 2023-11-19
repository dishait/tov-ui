<docs>
---
title: 基本使用
---

这是一个`button`按钮最基本的使用例子
</docs>

<script setup lang="ts">
function myClick() {
  console.log('myClick')
}
</script>

<template>
  <div>
    <t-button @click="myClick" />
  </div>
</template>
