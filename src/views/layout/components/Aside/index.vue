<template>
  <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
      <a-menu-item key="1">
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      selectedKeys: ['1']
    }
  },

  computed: {
    ...mapState('app', {
      collapsed: state => state.collapsed
    })
  }
}
</script>

<style lang="scss" scoped></style>
