const state = {
  collapsed: false // true:关闭
}

const mutations = {
  SET_COLLAPSED(state, payload) {
    state.collapsed = payload
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
