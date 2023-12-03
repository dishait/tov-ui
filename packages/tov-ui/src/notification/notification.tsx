import { useClassname } from '@tov-ui/utils'
import type { VNode } from 'vue'
import { TransitionGroup, defineComponent, onMounted, ref } from 'vue'

export interface NotificaionProps {
  content: VNode | string
  title: VNode | string
  // 倒计时
  duration?: number
  appContext?: any
}

export interface NotificaionInstance extends NotificaionProps {
  id: string
  timer: any
}

export const Notification = defineComponent({
  name: 'TNotification',
  props: {
    onReady: {
      type: Function,
    },
  },
  setup(props) {
    const data = ref<NotificaionInstance[]>([])
    const { c } = useClassname('notification')
    let _id = 0
    const add = (notification: NotificaionProps) => {
      const id = `Notification_${_id++}`
      const instance: NotificaionInstance = {
        ...notification,
        id,
        timer: undefined,
      }
      data.value.push(instance)
      const close = () => {
        // 删除当前id对应的渲染的数据
        const index = data.value.findIndex(v => v.id === id)
        const item = data.value[index]
        // 删除元素
        if (index !== -1)
          data.value.splice(index, 1)

        // 为了防止内存泄漏我们要手动清空一下
        if (item.timer)
          clearTimeout(item.timer)
      }

      /**
       * 倒计时删除
       */
      if (notification.duration !== 0) {
        instance.timer = setTimeout(() => {
          close()
          if (instance.timer)
            clearTimeout(instance.timer)

          // 默认是3000ms
        }, notification?.duration ?? 3000)
      }
      return close
    }

    onMounted(() => {
      props?.onReady?.({
        add,
      })
    })

    return () => {
      const renderNotificatons = () => {
        return data.value.map((item) => {
          const cls = {
            [c('wrapper')]: true,
          }
          const titleCls = {
            [c('wrapper', 'title')]: true,
          }
          const contentCls = {
            [c('wrapper', 'content')]: true,
          }
          return (
            <div class={cls} key={item.id}>
              <div class={titleCls}>
                {item.title}
              </div>
              <div class={contentCls}>
                {item.content}
              </div>
            </div>
          )
        })
      }
      const cls = {
        [c()]: true,
      }
      return (
        <>
          <div class={cls}>
            <TransitionGroup name="tov-slide-right" tag="div">
              {renderNotificatons()}
            </TransitionGroup>
          </div>
        </>
      )
    }
  },
},
)
