<docs>
---
title: useClassName
---

useClassName hook的基本使用。
</docs>

<script setup lang="ts">
import { ref } from 'vue'
import { useClassname } from '../use-classname'

const testCls = ref(false)

// 导入一下cx
const { c, cx, ce, cm } = useClassname('button')

const cls = cx(() => {
  return {
    // 设置一个是true，另一个是false
    [c('test', ce('label'), cm('large'))]: true,
    [c('test2')]: testCls.value,
  }
})
</script>

<template>
  <div :class="c('test')">
    {{ c("test") }}
    {{ cls }}
    <button @click="testCls = !testCls">
      点击切换 {{ testCls }}
    </button>
  </div>
</template>
