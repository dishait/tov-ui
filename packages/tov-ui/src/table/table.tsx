import { defineComponent } from 'vue'
import type { TableProps } from './typing'
import Header from './header.tsx'

const Table = defineComponent<TableProps>((props) => {
  return () => {
    // 我们可以直接在渲染函数中去解构props
    const { columns } = props
    return (
      <table>
        <Header columns={columns} />
        <tbody>
          <tr>
            <td>c.1</td>
            <td>c.2</td>
            <td>c.3</td>
          </tr>
        </tbody>
      </table>
    )
  }
}, {
  name: 'TTable',
})

export default Table
