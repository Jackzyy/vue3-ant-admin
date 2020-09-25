import { createStore } from 'vuex'
import getters from './getters'
import plugins from './plugins'
const path = require('path')

// 动态添加modules
const files = require.context('./modules', false, /\.js$/)
let modules = {}
files.keys().forEach(key => {
  let name = path.basename(key, '.js')
  modules[name] = files(key).default || files(key)
})

export default createStore({
  modules,
  getters,
  plugins
})
