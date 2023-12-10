import type { App } from 'vue'
import Table from './table.tsx'
import Column from './column.tsx';

(Table as any).install = (app: App) => {
  app.component(Table.name, Table)
  app.component(Column.name, Column)
}

export const TableColumn = Column

export default Table
