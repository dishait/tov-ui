# Input 输入框


## 介绍

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

需要用户输入表单域内容时。

## 代码演示


<demo src="./demos/basic.vue" />

<demo src="./demos/size.vue" />

<demo src="./demos/disabled.vue" />

<demo src="./demos/use-slot.vue" />

<demo src="./demos/methods.vue" />


## 属性



| 属性        | 说明           | 类型                          | 默认值  |
| ----------- | -------------- | ----------------------------- | ------- |
| placeholder | 内容占位符     | string                        | 请输入  |
| disabled    | 是否禁用输入框 | boolean                       | -       |
| size        | 输入框大小     | `default` | `small` | `large` | default |



## 事件

| 事件   | 说明                   | 类型                     |
| ------ | ---------------------- | ------------------------ |
| change | 数据发生改变的时候触发 | `(value:string) => void` |



## 插槽

| 插槽   | 说明     | 类型      |
| ------ | -------- | --------- |
| prefix | 前置插槽 | `()=>any` |
| suffix | 后置插槽 | `()=>any` |



## 方法

| 方法  | 说明           | 类型         |
| ----- | -------------- | ------------ |
| focus | 聚焦事件方法   | `() => void` |
| blur  | 失去焦点的方法 | `()=>void`   |

