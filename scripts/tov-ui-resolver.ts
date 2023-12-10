import type { ComponentResolver } from 'unplugin-vue-components'

export function tovUIResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve(name) {
      // 大家可以看到我们这里打印出来的是TButton，所以我们就可以判断一下是不是我们的以T开头的组件
      if (name.startsWith('T')) {
        // 如果是以T开头的组件，我们需要自动加载进来。
        return {
          // 因为我们再导出的时候并没有到处前缀T所以我们要删除掉前缀
          name: name.slice(1),
          from: 'tov-ui',
        }
      }
    },
  }
}
