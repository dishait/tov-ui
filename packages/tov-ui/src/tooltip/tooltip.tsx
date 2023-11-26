import { defineComponent, ref } from 'vue'
import { useFloating } from '@floating-ui/vue'
import { useClassname } from '@tov-ui/utils'

/**
 * 我们这里来带着大家初始化一下，我们Tsx + props的写法
 * 我们需要导入一下defineComponent
 */
// 然后全局导出我们的组件。
export default defineComponent({
// 这里是我们的组件名称
  name: 'TTooltip',
  // 这里编写我们的属性
  props: {},
  // 这里返回我们的元素信息
  setup(props, { slots }) {
    const reference = ref<HTMLDivElement>()
    const floating = ref<HTMLDivElement>()
    const { floatingStyles } = useFloating(reference, floating)
    const { c } = useClassname('tooltip')
    return () => {
      const cls = {
        [c()]: true,
      }
      const renderTooltip = () => {
        if (!reference.value)
          return null

        return (
          <div class={cls} ref={floating} style={floatingStyles.value}>
            浮框
          </div>
        )
      }
      const children = slots.default?.()
      // 如果没有值直接返回空
      if (children && children.length < 1)
        return null

      // 如果有值，查看我们需要返回的内容

      return (
        <>
          <div ref={reference}>
            测试
          </div>
          {renderTooltip()}
        </>
      )
    }
  },
})
