import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'normalize.css' // 初始化样式
import '@/styles/index.scss' // 自定义样式
import utils from '@/utils' // 公共插件

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(utils)
  .mount('#app')
