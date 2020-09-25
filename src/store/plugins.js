import createPersistedState from 'vuex-persistedstate'

/**
 * Vuex持久化储存
 * 根据模块选择储存位置
 */

const localStoragePlugin = createPersistedState({
  storage: window.localStorage,
  reducer(store) {
    return {
      app: store.app
    }
  }
})

const sessionStoragePlugin = createPersistedState({
  storage: window.sessionStorage,
  reducer() {
    return {}
  }
})

export default [localStoragePlugin, sessionStoragePlugin]
