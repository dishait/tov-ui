<docs>
---
title: 基本用法
---
Notification的基本用法
</docs>

<script setup lang="ts">
import { Notification } from 'tov-ui'
import { getCurrentInstance, h } from 'vue'
import Content from './components/content.vue'

const instance = getCurrentInstance()
function handleClick() {
  Notification.info({
    title: '测试哈哈哈哈',
    content: h(Content),
    duration: 0,
    appContext: instance?.appContext,
  })
}
</script>

<template>
  <div>
    <t-button @click="handleClick">
      提示
    </t-button>
  </div>
</template>
