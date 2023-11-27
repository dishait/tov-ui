// 我们先定义两个列数据的类型
export interface Column {
  // 定义列的标题名称
  title: string
  // 自定字段名称
  key: string
}

// 然后我们再定义头部的属性的类型，我们需要接收一个columns
export interface HeaderProps {
  columns: Column[]
}

export interface TableProps {
  // 定义列数据
  columns: Column[]
  // 定义数据源
  data: any[]
}
