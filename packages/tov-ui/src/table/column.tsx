import { defineComponent } from 'vue'
import type { Column } from './typing'

export type ColumnProps = Pick<Column, 'title'> & { index: string }

export default defineComponent<ColumnProps>(() => {
  return () => {
    return null
  }
}, {
  name: 'TTableColumn',
})
