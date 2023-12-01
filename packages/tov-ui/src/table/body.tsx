import { defineComponent } from 'vue'
import { useClassname } from '@tov-ui/utils'
import type { BodyProps } from './typing'

const Body = defineComponent<BodyProps>((props) => {
  const { c } = useClassname('table')
  return () => {
    const cls = {
      [c('body')]: true,
    }
    const rowCls = {
      [c('body-row')]: true,
    }
    const cellCls = {
      [c('body-cell')]: true,
      [c('cell')]: true,
    }
    const { data, columns } = props
    const renderCell = (row: Record<string, any>) => {
      return columns.map((column) => {
        return <td class={cellCls}>{row[column.key]}</td>
      })
    }
    const renderRow = () => {
      return data.map((row) => {
        return (
          <tr class={rowCls}>
            {renderCell(row)}
          </tr>
        )
      })
    }

    return (
      <tbody class={cls}>
        {renderRow()}
      </tbody>
    )
  }
})

export default Body
