<docs>
---
title: 触发方式
---

Tooltip支持两种触发方式，分别是`hover`和`click`。
</docs>

<script lang="ts" setup>
</script>

<template>
  <div style="display: flex;gap: 10px">
    <t-tooltip trigger="hover" content="test trigger">
      <t-button>hover</t-button>
    </t-tooltip>
    <t-tooltip trigger="click" content="test trigger">
      <t-button>点击</t-button>
    </t-tooltip>
  </div>
</template>
