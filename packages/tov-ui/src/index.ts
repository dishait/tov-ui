import type { Plugin } from 'vue'
import pkg from '../package.json'
import * as components from './components'

export * from './components'

export default {
  install(app) {
    // 这里的componentName我们暂时用到，可以先将它加个下划线避免eslint报错
    Object.entries(components).forEach(([_componentName, component]) => {
      // 我们直接判断一下是否有install方法，如果有我们就执行一下install的方法
      // 为什么我们这里不用app.component,这是因为我们不确定这个组件中注册哪些附属的组件
      // 所以我们直接执行install方法，让组件自己去注册自己需要的组件就可以
      if ((component as any).install)
        app.use(component as any)
    })
  },
  // 我们还可以在这里导出一下我们组件的版本号，方便我们后期查看版本。
  // 版本号我们直接从package.json中获取
  version: pkg.version,
} as Plugin
