import type { App } from 'vue'
import { Notification } from './notification'
import { createNotification } from './instance'

// 因为我们这个组件比较特殊，所以我们先暂时不需要进行注册
const instance = createNotification();
(Notification as any).install = (app: App) => {
  app.config.globalProperties.$notification = instance
}

export default instance
