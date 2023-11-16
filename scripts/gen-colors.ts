import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { gold, green, purple, red } from '@ant-design/colors'

// 获取我们的主色，我们之前定的主色是紫色，所以我们这里就使用紫色作为我们的主色调。
// 接下来我们就需要将我们的主色生成为css的文件，
// console.log(purple)
// 大家可以看到我们打印的结果，发现是一个数组，但是数组里面还包含着对象，
// 大家不要疑惑，数组中是可以有这样的操作的，
// 其中的这个primary你可以认为他是被挂在原型链中的
// 我们循环打印的时候，这个值是不会被识别的
// 我们来给大家打印一下试试
// 我们需要定义一个属性来接收我们的值
let colors = ''
purple.forEach((color, index) => {
  // 我们再来打印一下
  // console.log(color)
  // 大家可以看到，他只打印了我们的数组中的内容，
  // 没有打印我们的主色调，那么这就印证了我们的猜想。
  // 接下来我们就需要将这些值生成到我们的主色调生成到我们的tov-ui中
  // 为了方便我们多主题的开发，我们建议将所有的主题色都使用css-var变量的形式生成，方便我们后期去更换主题色。
  // 我们先来写一下我们要生成主题色的css-var变量的格式”--tov-color-primary“，这是一个命名规范，
  // 第一个代表我们的组件库的前缀，第二个代表我们的要生成的是什么，第三个表示我们生成的是主色调
  // 接下来我们就先来生成一下这一部分
  // 首先来写我们的前缀，因为我们生成的的是整个主题色的色域，
  // 所以我们需要在primary的后面再指定这是第几种色域值。
  colors += `--tov-color-primary-${index + 1}: ${color};\n`
})

// 我们来打印一下
// console.log(colors)
// 大家可以看到我们生成的色域值就实现了，但是大家会发现我们没有一行行的生成，我们只需要再我们的分号的后面添加一个\n
// 我们再来打印一下。他就会换行生成了，接下来我们还要生成，成功、警告、失败的颜色。
// 成功我们使用绿色

green.forEach((color, index) => {
  // 我们还是使用同样的方式生成，这里我们就直接带着大家去复制了。
  colors += `--tov-color-success-${index + 1}: ${color};\n`
})

// 警告我们使用金色
gold.forEach((color, index) => {
  // 我们还是使用同样的方式生成，这里我们就直接带着大家去复制了。
  colors += `--tov-color-warning-${index + 1}: ${color};\n`
})

// 失败使用红色
red.forEach((color, index) => {
  // 我们还是使用同样的方式生成，这里我们就直接带着大家去复制了。
  colors += `--tov-color-error-${index + 1}: ${color};\n`
})

// 最后我们来打印一下

// console.log(colors)
// 接下来我们就需要写入到我们的文件中，
// 首先我们需要在packages/tov-ui/src中创建一个style的文件夹，然后再创建一个themes的文件夹
// 我们将这些色彩值，以一个var.css的文件的形式写入到我们的style/themes文件夹下

// 这里我们会用到一些关于nodejs的命令，如果大家不熟悉的话，可以去学习我们的node小课，有专门去讲这一部分
// 我们这里就不在赘述，就直接带着大家去使用。
// 我们先创建这个文件的存储路径
const filePath = fileURLToPath(new URL('../packages/tov-ui/src/style/themes/var.css', import.meta.url))
// 先创建这个文件，

// 然后我们使用fs进行写入
// writeFileSync(filePath, colors)
// console.log('写入完成')
// 但是大家会发现我们写入的文件会报错，这是因为我们必须有一个跟标签包裹，这里我们使用:root进行包裹，我们就来改造一下
colors = `:root{\n ${colors}\n}`

writeFileSync(filePath, colors)
// 那么我们的基础色调，我们就准备好了，我们这节课就先到这里
