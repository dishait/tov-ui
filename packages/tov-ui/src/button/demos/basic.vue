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
  <div style="display: flex;gap: 10px;">
    <t-button @click="myClick">
      按钮1
    </t-button>
    <t-button type="primary" @click="myClick">
      按钮2
    </t-button>
    <t-button type="dashed">
      按钮3
    </t-button>
  </div>
</template>
