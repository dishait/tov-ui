import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import { tsxAutoProps } from 'vite-plugin-tsx-auto-props'

// 读取我们当前的根目录
export default defineConfig({
  // 首先就是我们的插件，插件我们直接找打我们跟目录下的vite.config.ts的文件
  plugins: [
    dts({
      entryRoot: 'src',
      outDir: ['lib', 'es'],
      exclude: ['**/tests/**'],
    }),
    vue(),
    vueJsx(),
    tsxAutoProps(),
  ],
  // 接下来我们来写一下打包的，关于打包库，我们需要使用vite的lib模式
  build: {
    // 如果我们要实现esm和cjs分别打包，我们就需要使用rollup帮助我们打包
    // 所以这里的打包我们会让vite走rollup
    rollupOptions: {
      // 在rollup里面有一个output
      // 因为我们需要将esm和cjs输出在不同的目录
      // 所以我们需要给output一个数组
      // 我们先来写一下esm的打包配置
      external: ['@tov-ui/utils', '@tov-ui/icons', '@floating-ui/vue', '@v-c/utils', 'vue'],
      output: [
        {
          // 因为我们需要生成多个文件，所以我们这里设置preserverModules为true
          preserveModules: true,
          // 因为配置了为true，我们就需要指定输入的目录
          preserveModulesRoot: 'src',
          // 输入的文件名称，这里我们指定一下，
          // 如果不指定的话，他会自己生成hash，我们就看到的代码就不直观了
          // 所以我们这里就让他原名称输入
          entryFileNames: '[name].js',
          // 然后我们需要格式化成esm的格式
          format: 'esm',
          // 最终输出的目录，我们选择在tov-ui下的es目录中
          dir: 'es',
          // 这就完成了我们的esm的输出配置，
        },
        // 接下来我们再来看一下cjs的输出配置，其实cjs和esm的参数大部分是一致的
        {
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          // 格式化这里需要调整一下，调整成cjs
          format: 'cjs',
          // 使用cjs的话，我们需要指定导出的类型，这一点是不一样的需要大家多注意
          exports: 'named',
          // 这里我们的cjs的代码，我们统一输出到我们的lib目录中
          dir: 'lib',
          // 下面我们就带着大家来试一下。
        },
      ],
    },
    lib: {
      // 入口我们这里就写一下src/index.ts
      entry: 'src/index.ts',
    },
  },
})
