import { defineComponent, isVNode } from 'vue'
import { filterEmpty } from '@v-c/utils'
import { useClassname } from '@tov-ui/utils'
import type { Column, TableProps } from './typing'
import Header from './header.tsx'
import Body from './body.tsx'

const Table = defineComponent<TableProps>((props, { slots }) => {
  const { c } = useClassname('table')
  return () => {
    // 我们可以直接在渲染函数中去解构props
    const { columns, data } = props
    const cols = filterEmpty(slots?.default?.())

    let columnsData: Column[] = []
    if (cols && cols.length) {
      for (const col of cols) {
        if (isVNode(col) && (col as any).type?.name && (col as any).type?.name === 'TTableColumn') {
          columnsData.push({
            title: col?.props?.title,
            key: col?.props?.index,
          })
        }
      }
    }
    else { columnsData = columns ?? [] }

    const cls = {
      [c()]: true,
    }

    return (
      <table class={cls}>
        <Header columns={columnsData} />
        <Body columns={columnsData} data={data} />
      </table>
    )
  }
}, {
  name: 'TTable',
})

export default Table
