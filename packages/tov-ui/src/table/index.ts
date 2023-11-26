import type { App } from 'vue'
import Table from './table.tsx'

(Table as any).install = (app: App) => {
  app.component(Table.name, Table)
}

export default Table
