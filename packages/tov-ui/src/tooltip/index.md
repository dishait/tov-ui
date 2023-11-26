# Tooltip 文字提示

## 介绍

简单的文字提示气泡框。

## 何时使用

鼠标移入，点击，聚焦或者长按元素，弹出气泡式的卡片浮层，气泡浮层里可以包含文字、图片、列表、表单等内容。


## 代码演示


<demo src="./demos/basic.vue" />

<demo src="./demos/placement.vue" />

<demo src="./demos/use-slot.vue" />

<demo src="./demos/trigger.vue" />


## 属性

| 参数        | 说明      | 类型              | 默认值      |
|-----------|---------|-----------------|----------|
| placement | 控制显示的位置 | `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | `bottom` |
| trigger | 触发方式 | `hover` `click` | `hover` |
| content | 显示的内容，也可以通过 `slot` 传入 DOM | `string` | - |
