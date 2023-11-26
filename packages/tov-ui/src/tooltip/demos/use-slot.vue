<docs>
---
title: 插槽使用
---

插槽模式使用Tooltip组件
</docs>

<script lang="ts" setup>
</script>

<template>
  <div>
    <t-tooltip placement="top">
      <template #content>
        <span style="color: red">
          这是插槽中的内容
        </span>
      </template>
      <t-button>基本使用</t-button>
    </t-tooltip>
  </div>
</template>
