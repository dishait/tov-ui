import { defineComponent, ref } from 'vue'
import type { Column, TableProps } from './typing'
import Header from './header.tsx'
import Body from './body.tsx'
import { useTableProvide } from './context'

const Table = defineComponent<TableProps>((props, { slots }) => {
  const renderColumns = ref<Column[]>([])

  // 注入方法
  const setColumn = (column: Column) => {
    renderColumns.value.push(column)
  }
  // 注入数据
  useTableProvide({
    setColumn,
    columns: renderColumns,
  })
  return () => {
    // 我们可以直接在渲染函数中去解构props
    const { columns, data } = props
    const cols = slots?.default?.()
    console.log(cols)

    let columnsData: Column[] = []
    if (renderColumns.value && renderColumns.value.length)
      columnsData = renderColumns.value

    else if (columns && columns.length)
      columnsData = columns

    return (
      <table>
        <Header columns={columnsData} />
        <Body columns={columnsData} data={data} />
        {/* { slots?.default?.() } */}
      </table>
    )
  }
}, {
  name: 'TTable',
})

export default Table
