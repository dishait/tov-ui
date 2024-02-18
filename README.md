# tov-ui

这是一个基于vue3的UI框架


## 安装

```shell
pnpm add tov-ui @tov-ui/icons
```

## 使用

### 全局加载

```ts
import tovUI from 'tov-ui'
import 'tov-ui/dist/tov-ui.css'
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.use(tovUI)
app.mount('#app')
```

### 按需引用

```vue
<script lang="ts" setup>
import { Button } from 'tov-ui'
import 'tov-ui/es/button/style/index.css'
</script>

<template>
  <Button>按钮</Button>
</template>
```

## 演示地址

[站点演示](https://dishait.github.io/tov-ui/)

## 开发

```shell
# 安装依赖
pnpm install

# 启动项目
pnpm docs:dev

# 开启单元测试
pnpm test

# 单元测试覆盖率测试
pnpm coverage
```
