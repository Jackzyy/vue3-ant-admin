/**
 * 添加全局方法
 */
import { createApp } from 'vue'

export default {
  install(Vue) {
    // 注册Bus中间件
    Vue.config.globalProperties.$bus = createApp()
  }
}
