import { defineComponent } from 'vue'
import type { TableProps } from './typing'

export default defineComponent<TableProps>(() => {
  return () => {
    return (
      <table>
        <thead>
          <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
          </tr>
        </thead>
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
