import { createVNode, render } from 'vue'
import type { NotificaionProps } from './notification'
import { Notification } from './notification'

/**
 * 创建notification实例
 */
export interface NotificationInstanceType {
  add: (props: NotificaionProps)=>(() => void)
}
export function createNotification() {
  let instance: NotificationInstanceType
  const info = (props: NotificaionProps) => {
    if (!instance) {
      const body = document.documentElement.querySelector('body')
      const vm = createVNode(Notification, {
        onReady(el: NotificationInstanceType) {
          instance = el
          instance.add(props)
        },
      })
      if (props.appContext)
        vm.appContext = props.appContext

      render(vm, body!)
    }
    else {
      instance.add(props)
    }
  }
  return {
    info,
  }
}
