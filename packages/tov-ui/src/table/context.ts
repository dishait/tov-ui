// 要给provide传递值的情况，那么我们需要先定义一个唯一key，我们这里使用symbol来定义

import { inject, provide, ref } from 'vue'
import type { InjectionKey, Ref } from 'vue'
import type { Column } from './typing'

// 我们给他添加一个类型
export interface TableContext {
  columns: Ref<Column[]>
  setColumn: (columns: Column) => void
}
const TableKey: InjectionKey<TableContext> = Symbol('TableKey')

// 注入函数
export function useTableProvide(ctx: TableContext) {
  provide(TableKey, ctx)
}

// 获取注入的方法
export function useTableInject() {
  const ctx = inject(TableKey, {
    columns: ref([]),
    setColumn: (_column: Column) => {},
  })
  return ctx
}
