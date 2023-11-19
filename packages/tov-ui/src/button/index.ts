import type { App } from 'vue'
import Button from './button.vue'

// 如果我们想使用app.use的方式安装组件，那么我们需要给组件添加一个install方法
Button.install = (app: App) => {
  // 我们在这个方法中注册一下我们的组件
  app.component('TButton', Button)
}

export default Button
