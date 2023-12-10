import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { tsxAutoProps } from 'vite-plugin-tsx-auto-props'

const baseUrl = fileURLToPath(new URL('../', import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    tsxAutoProps(),
  ],
  resolve: {
    // 因为我们的tov-ui-utils的库没有打包，所以我们可以考虑直接打包进去
    alias: [
      {
        // 我们通过正则表达式去匹配以@tov-ui/utils的导入配置
        'find': /^@tov-ui\/utils/,
        // 然后我们把路径替换成绝对路径地址
        'replacement': path.resolve(baseUrl, 'utils/src'),
      },
    ],
  },
  build: {
    rollupOptions: {
      // 我们这里只排除一下vue
      external: ['vue'],
      // 我们还需要配置一下输出的部分
      output: {
        // 配置一下导出，还是使用named
        exports: 'named',
        // 因为我们排除了vue，所以我们umd需要我们使用全局挂载的形式
        globals: {
          vue: 'vue',
        },
      },
    },
    lib: {
      // 入口我们使用entry
      entry: 'src/index.ts',
      // 文件我们使用tov-ui.js
      fileName: () => 'tov-ui.js',
      // 输出的名字我们采用tovUI
      name: 'tovUI',
      // formats这次我们就直接使用umd
      formats: ['umd'],
    },
  },
})
