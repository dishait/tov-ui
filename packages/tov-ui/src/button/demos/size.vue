<docs>
---
title: 按钮大小
---

你可以通过设置`size`属性来改变按钮的大小，默认为`default`，可选值为`small`和`large`
</docs>

<script setup lang="ts">
</script>

<template>
  <div style="display: flex;gap: 10px">
    <t-button size="small">
      小按钮
    </t-button>
    <t-button>
      正常
    </t-button>
    <t-button size="large">
      大按钮
    </t-button>
  </div>
</template>
