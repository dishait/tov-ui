<docs>
---
title: 位置
---

Tooltip组件提供了12个方向来使用。
</docs>

<script lang="ts" setup>
</script>

<template>
  <div style="display: flex;gap: 10px;flex-wrap: wrap">
    <t-tooltip content="test placement">
      <t-button>Bottom</t-button>
    </t-tooltip>
    <t-tooltip placement="bottom-end" content="test placement">
      <t-button>BottomEnd</t-button>
    </t-tooltip>
    <t-tooltip placement="bottom-start" content="test placement">
      <t-button>BottomStart</t-button>
    </t-tooltip>
    <t-tooltip placement="top" content="test placement">
      <t-button>Top</t-button>
    </t-tooltip>
    <t-tooltip placement="top-start" content="test placement">
      <t-button>TopStart</t-button>
    </t-tooltip>
    <t-tooltip placement="top-end" content="test placement">
      <t-button>TopEnd</t-button>
    </t-tooltip>
    <t-tooltip placement="left" content="test placement">
      <t-button>Left</t-button>
    </t-tooltip>
    <t-tooltip placement="left-start" content="test placement">
      <t-button>LeftStart</t-button>
    </t-tooltip>
    <t-tooltip placement="left-end" content="test placement">
      <t-button>LeftEnd</t-button>
    </t-tooltip>
    <t-tooltip placement="right" content="test placement">
      <t-button>Right</t-button>
    </t-tooltip>
    <t-tooltip placement="right-start" content="test placement">
      <t-button>RightStart</t-button>
    </t-tooltip>
    <t-tooltip placement="right-end" content="test placement">
      <t-button>RightEnd</t-button>
    </t-tooltip>
  </div>
</template>
