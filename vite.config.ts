import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'

// 导入demo插件
import { vitepressDemo } from 'vite-plugin-vitepress-demo'

// 读取我们当前的根目录
const baseUrl = fileURLToPath(new URL('.', import.meta.url))
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitepressDemo({
      // 我们让他自动搜索，我们所有项目中的demos下的vue文件
      glob: ['**/demos/*.vue'],
    }),
  ],
  // 我们使用vite中给我们提供的resolve配置项中的alias来实现一个重命名。
  resolve: {
    alias: [
      {
        // 我们通过正则表达式去匹配以@tov-ui/utils的导入配置
        'find': /^@tov-ui\/utils/,
        // 然后我们把路径替换成绝对路径地址
        'replacement': path.resolve(baseUrl, 'packages/utils/src'),
      },
    ],
  },
})
