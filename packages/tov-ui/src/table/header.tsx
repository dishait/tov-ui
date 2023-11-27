import { defineComponent } from 'vue'
import type { HeaderProps } from './typing'
import { headerProps } from './typing'

const Header = defineComponent<HeaderProps>(() => {
  return () => {
    return (
      <thead>
        <tr>
          <th>1</th>
          <th>2</th>
          <th>3</th>
        </tr>
      </thead>
    )
  }
}, {
  name: 'TTableHeader',
  props: [...headerProps],
})

export default Header
