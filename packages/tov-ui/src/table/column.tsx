import { defineComponent } from 'vue'
import type { Column } from './typing'
import { useTableInject } from './context'

export type ColumnProps = Pick<Column, 'title'> & { index: string }

export default defineComponent<ColumnProps>((props) => {
  const { setColumn } = useTableInject()
  setColumn({
    key: props.index,
    title: props.title,
  })

  return () => {
    return null
  }
}, {
  name: 'TTableColumn',
})
