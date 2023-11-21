# 按钮 Button

## 介绍

按钮组件用于触发一个操作，如提交表单。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。


## 代码演示


<demo src="./demos/basic.vue"></demo>

<demo src="./demos/disabled.vue"></demo>

<demo src="./demos/size.vue"></demo>


## 属性

| 属性     | 说明             | 类型                             | 默认值    |
| -------- | ---------------- | -------------------------------- | --------- |
| type     | 设置按钮类型     | `default` | `primary` | `dashed` | `default` |
| size     | 设置按钮大小     | `default` | `small` | `large`    | `default` |
| disabled | 设置按钮失效状态 | boolean                          | `false`   |



## 事件



| 事件  | 说明                 | 类型                         |
| ----- | -------------------- | ---------------------------- |
| click | 点击的时候触发的事件 | `(event:MouseEvent) => void` |

