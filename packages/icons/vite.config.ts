import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      'outDir': ['es', 'lib'],
    }),
  ],
  build: {
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          preserveModules: true,
          preserveModulesRoot: 'src',
          format: 'esm',
          entryFileNames: '[name].js',
          dir: 'es',
        },
        {
          preserveModules: true,
          preserveModulesRoot: 'src',
          format: 'cjs',
          entryFileNames: '[name].js',
          dir: 'lib',
          exports: 'named',
        },
      ],
    },
    lib: {
      entry: 'src/index.ts',
    },
  },
})
