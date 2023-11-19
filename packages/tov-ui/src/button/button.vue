<script lang="ts">
// 导入一下我们定义组件的方法
import { defineComponent } from 'vue'

// 最后我们再使用这个函数默认导出我们的组件
export default defineComponent({
  // 我们定义组件的名称为 TButton
  name: 'TButton',
})
</script>

<template>
  <div class="tov-button">
    Tbutton
  </div>
</template>
