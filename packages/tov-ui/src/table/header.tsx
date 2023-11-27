import { defineComponent } from 'vue'
import { useClassname } from '@tov-ui/utils'
import type { HeaderProps } from './typing'

const Header = defineComponent<HeaderProps>((props) => {
  const { c } = useClassname('table-header')
  return () => {
    const cls = {
      [c()]: true,
    }
    const rowCls = {
      [c('row')]: true,
    }
    const cellCls = {
      [c('cell')]: true,
    }
    const { columns } = props

    const renderColumn = () => {
      return columns?.map((v) => {
        return <th class={cellCls}>{v.title}</th>
      })
    }

    return (
      <thead class={cls}>
        <tr class={rowCls}>
          {renderColumn()}
        </tr>
      </thead>
    )
  }
}, {
  name: 'TTableHeader',
})

export default Header
