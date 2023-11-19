import classnames from 'classnames'
import { computed } from 'vue'

// 首先我们先初始化一下我们的函数
export function useClassname(component: string) {
  // 函数初始化完成以后，我们刚刚说了，我们的类名定义的形式是 前缀 + 组件名 + 后缀
  // 那么对于前缀我们是需要统一一下的，所以我们需要有一个变量来存储我们的前缀。
  // 我们这里先写死，后面我们再来实现动态配置
  const prefix = 'tov-'
  // 前缀配置完成以后，接下来我们就需要配置我们的组件名，因为组件名称是传入的，所以我们需要给，
  // useClassname函数传入一个参数，我们这里可以定义一个component参数，然后我们把这个参数拼接到我们的前缀上
  const componentName = `${prefix}${component}`
  // 这样就得到了我们组件类名
  // 那么我们对于类名的部分，我们本身还需要自定义后缀，所以我们通过一个函数的形式来定义我们的后缀。
  // 我们的这个函数的名字，函数的名字我们可以起的短一些，因为这样可以减少我们整个代码的体积和复杂度。
  // 所以我们用class的首字符来命名这个函数。
  // 他接收一个参数，就是我们自定义的后缀
  const c = (...args: BEMType[]) => {
    // 我们拼接一下后缀，然后返回
    if (args.length > 0) {
      // 开始循环拼接
      let result = componentName
      args.forEach((item) => {
        if (Array.isArray(item)) {
          // 如果是数组的情况下，我们需要判断一下第二个参数是不是BEM中的一个
          const val1 = item[0]
          const val2 = item[1]
          if (val2 === 'B' || !val2)
            result += `-${val1}`
          else if (val2 === 'E')
            result += `__${val1}`
          else if (val2 === 'M')
            result += `--${val1}`
        }
        else {
          result += `-${item}`
        }
      })
      return result
    }
    // 当我们不传参数的时候，我们就直接返回我们的组件名
    return componentName
  }
  const ce = (e: string): BEMType => {
    return [e, 'E']
  }
  const cm = (m: string): BEMType => {
    return [m, 'M']
  }
  // 最后再抛出我们的函数，这样我们就可以在外面使用我们的这个函数了。
  // 下面我们来带着大家演示一下效果如何。
  // 我们在gen-class下的index.md中测试一下，如果在这里测试的话
  // 我们需要创建一个demos文件夹
  /**
   * 我们创建一个新的函数，叫cx
   * 这里面我们需要传入一个参数，这个参数就是我们所说的函数，那么我们先来定义一下这个函数的类型
   */
  const cx = (classFun: CxClassFun) => {
    // 那么我们这里就需要执行一下这个函数，然后我们借用classnames来最终返回一个字符串。
    // 我们来试一下，导入一下classnames
    // 然后直接包裹一下这个函数
    return computed(() => classnames(classFun()))
  }
  return {
    c,
    ce,
    cm,
    // 最后导出这个函数
    cx,
  }
}

// 我们这里，可以返回我们classnames中可以接受的一些类型，像string
// 其中我们的数组中也可以接收对象，这就是我们的返回值
type CxClassFun = () => string | (string | Record<string, boolean>)[] | Record<string, boolean>

type BEMType = string | [string, 'B' | 'E' | 'M' | undefined]
