// 首先我们还是先导入
import { useClassname } from '@tov-ui/utils'
import type { CSSProperties } from 'vue'
import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'

// 最后再进行导出
export default defineComponent({
  // 定义组件的名字
  name: 'TVirtualList',
  // 实现一个简单的setup
  props: {
    height: {
      type: Number,
      default: 300,
    },
    itemHeight: {
      type: Number,
      default: 40,
    },
    data: {
      type: Array,
      default: () => [],
    },
    buffer: {
      type: Number,
      default: 5,
    },
  },
  emits: ['clickItem'],
  setup(props) {
    // 我们先定义一个参数
    // 和我们使用vue2中的optionApi的形式一样
    // 把我们的a return出去
    const { c } = useClassname('virtual-list')
    const containerRef = ref<HTMLDivElement>()
    const scrollTop = ref<number>(0)
    const onScroll = () => {
      scrollTop.value = containerRef.value?.scrollTop ?? 0
    }
    onMounted(() => {
      if (containerRef.value)
        containerRef.value?.addEventListener('scroll', onScroll)
    })

    onUnmounted(() => {
      if (containerRef.value)
        containerRef.value?.removeEventListener('scroll', onScroll)
    })

    /**
     * 获取容器的高度
     */
    const containerHeight = computed(() => {
      // 判断我们的容器是否已经渲染出来了，如果已经渲染出来了
      // 如果已经开始渲染出来了，那么我们就使用渲染出来的高度
      if (containerRef.value)
        return containerRef.value.clientHeight
      // 如果没有我们就使用height  or 300
      return props.height ?? 300
    })

    const sliceItems = computed(() => {
      // 开始截取数据
      const itemHeight = props.itemHeight ?? 40
      const buffer = props?.buffer ?? 5
      // 我们计算一下我们的容器中一次性最多能显示多少个，这里我们向上取整，只能多不能少
      const showCounter = Math.ceil(containerHeight.value / itemHeight)
      // 然后我们通过向下取整，计算出我们的首个的位置，如果比0小，那么我们就作为复数，
      // 复数的情况我们就直接，我们直接索引从0开始计算
      const counterIndex = Math.floor(scrollTop.value / itemHeight) - buffer
      const startIndex = Math.max(0, counterIndex)
      const endIndex = showCounter + buffer * 2 + counterIndex
      return props.data.slice(startIndex, endIndex).map((item, i) => ({
        item,
        top: (startIndex + i) * props.itemHeight,
        key: `VirtualItem_${startIndex + i + 1}`,
      }))
    })
    return {
      c,
      containerRef,
      sliceItems,
      containerHeight,
    }
  },
  // 接下来我们就来写一下render函数
  render() {
    const { c, sliceItems, itemHeight = 40, height = 300, data } = this
    const containerCls = {
      [c()]: true,
    }
    const containerStyle: CSSProperties = {
      height: `${height}px`,
    }
    const bodyCls = {
      [c('body')]: true,
    }
    const bodyH = data.length * itemHeight
    const bodyStyle: CSSProperties = {
      height: `${bodyH}px`,
    }

    const renderItems = () => {
      const height = itemHeight ?? 40
      const itemCls = {
        [c('item')]: true,
      }
      const itemSlot = this.$slots?.item
      const onClick = (item: any) => {
        this.$emit('clickItem', item)
      }
      return sliceItems.map(({ key, top, item }) => {
        return (
          <div
            class={itemCls}
            style={{ height: `${height}px`, top: `${top}px` }}
            key={key}
            onClick={() => onClick(item)}
          >
            {itemSlot && itemSlot?.({ item })}
          </div>
        )
      })
    }
    return (
      <div class={containerCls} ref="containerRef" style={containerStyle}>
        <div class={bodyCls} ref="bodyRef" style={bodyStyle}>
          {renderItems()}
        </div>
      </div>
    )
  },

})
