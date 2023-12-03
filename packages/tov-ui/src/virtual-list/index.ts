// 最后我们在index.ts中导出我们的组件
import type { App } from 'vue'
import VirtualList from './virtual-list'

VirtualList.install = (app: App) => {
  app.component(VirtualList.name, VirtualList)
}

export default VirtualList
