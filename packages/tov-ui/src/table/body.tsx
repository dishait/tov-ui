import { defineComponent } from 'vue'
import type { BodyProps } from './typing'

const Body = defineComponent<BodyProps>((props) => {
  return () => {
    const { data, columns } = props
    console.log(data)
    const renderCell = (row: Record<string, any>) => {
      return columns.map((column) => {
        return <td>{row[column.key]}</td>
      })
    }
    const renderRow = () => {
      return data.map((row) => {
        return (
          <tr>
            {renderCell(row)}
          </tr>
        )
      })
    }

    return (
      <tbody>
        {renderRow()}
      </tbody>
    )
  }
})

export default Body
