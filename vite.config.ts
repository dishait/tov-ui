import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'

// 导入demo插件
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxAutoProps from 'unplugin-vue-tsx-auto-props/vite'

// 读取我们当前的根目录
const baseUrl = fileURLToPath(new URL('.', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitepressDemo({
      // 我们让他自动搜索，我们所有项目中的demos下的vue文件
      glob: ['**/demos/*.vue'],
    }),
    vueJsx(),
    tsxAutoProps(),
  ],
  // 我们使用vite中给我们提供的resolve配置项中的alias来实现一个重命名。
  resolve: {
    alias: [
      {
        // 我们复制我们的utils中的配置，直接修改一下
        'find': /^tov-ui/,
        // 然后再把utils替换成tov-ui，这样我们就完成了配置
        'replacement': path.resolve(baseUrl, 'packages/tov-ui/src'),
      },
      {
        // 我们通过正则表达式去匹配以@tov-ui/utils的导入配置
        'find': /^@tov-ui\/utils/,
        // 然后我们把路径替换成绝对路径地址
        'replacement': path.resolve(baseUrl, 'packages/utils/src'),
      },
    ],
  },
})
