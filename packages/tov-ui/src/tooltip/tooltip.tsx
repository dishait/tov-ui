import type { ExtractPropTypes, PropType, VNode } from 'vue'
import { computed, createVNode, defineComponent, ref } from 'vue'
import type { Placement } from '@floating-ui/vue'
import { offset, useFloating } from '@floating-ui/vue'
import { useClassname } from '@tov-ui/utils'
import { filterEmpty, isBaseType } from '@v-c/utils'

const tooltipProps = {
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom-center' as Placement,
  },
  content: {
    type: String as PropType<string>,
  },
  trigger: {
    type: String as PropType<'hover' | 'click'>,
    default: 'hover',
  },
}

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>

/**
 * 我们这里来带着大家初始化一下，我们Tsx + props的写法
 * 我们需要导入一下defineComponent
 */
// 然后全局导出我们的组件。
const Tooltip = defineComponent<TooltipProps>({
// 这里是我们的组件名称
  name: 'TTooltip',
  // 这里编写我们的属性
  props: tooltipProps as any,
  // 这里返回我们的元素信息
  setup(props, { slots }) {
    const reference = ref<HTMLDivElement>()
    const floating = ref<HTMLDivElement>()
    const placement = computed(() => props.placement)
    const { floatingStyles } = useFloating(reference, floating, {
      placement,
      middleware: [offset(4)],
    })
    const show = ref(false)
    let timer: any
    const { c } = useClassname('tooltip')

    const handleMouseEnter = () => {
      if (props.trigger !== 'hover')
        return
      show.value = true
    }

    const handleMouseLeave = () => {
      timer = setTimeout(() => {
        show.value = false
      }, 150)
    }

    const handleMouseEnterContent = () => {
      if (timer) {
        clearTimeout(timer)
        timer = undefined
      }
    }

    const handleMouseLeaveContent = () => {
      show.value = false
    }

    const handleClick = () => {
      if (props.trigger !== 'click')
        return

      show.value = true
    }

    return () => {
      const cls = {
        [c()]: true,
      }
      const renderTooltip = () => {
        if (!reference.value)
          return null
        if (!show.value)
          return null
        return (
          <div
            class={cls}
            ref={floating}
            onMouseenter={handleMouseEnterContent}
            onMouseleave={handleMouseLeaveContent}
            style={floatingStyles.value}
          >
            { slots?.content?.() ?? props?.content }
          </div>
        )
      }
      // 为了方便我们确认是否有数据传入，我们需要在@v-c/utils先来尝试过滤一下数据
      const children = filterEmpty(slots.default?.())
      // 如果没有值直接返回空
      if (children && children.length < 1)
        return null
      // 如有值，我们就需要确保只能有一个跟标签包裹，所以我们需要判断一下当前是不是一个跟标签来包裹的。
      if (children.length > 1) {
        // 如果不是，我们就需要给出警告
        console.warn('Tooltip组件只能有一个根节点')
        // 然后我们就直接返回所有的内容，并且不需要做弹框的处理
        return children
      }
      const node = children[0]
      // 接下来我们就需要拿到这个元素，然后来判断一下这个元素是不是一个基本类型的，如果是一个基本类型的元素
      // 就表示也没有被包裹任何元素，那么我们就没办法计算出这个元素的位置，所以我们需要给出警告
      // 这里的isBaseType是我们在@v-c/utils里面写的一个方法，用来判断是不是基本类型的元素
      // 这个函数可以判断是不是string、number、boolean、symbol这些基本类型
      if (isBaseType(node)) {
        console.warn('Tooltip组件必须包裹一个根节点元素')
        return node
      }

      // 我们在载入之前我们需要添加一些事件，来控制我们的弹框的显示和隐藏
      const events: Record<string, any> = {
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onClick: handleClick,
      }

      // 如果是一个元素，我们就需要给这个元素添加我们上节课传入的ref
      const myNode = createVNode(node as VNode, {
        ref: reference,
        ...events,
      })

      return (
        <>
          {myNode}
          {renderTooltip()}
        </>
      )
    }
  },
})

export default Tooltip
