<template>
  <a-layout-sider
    id="layout-aside"
    :collapsed="collapsed"
    :trigger="null"
    collapsible
  >
    <a-menu
      theme="dark"
      mode="inline"
      v-model:selectedKeys="selectedKeys"
      @click="handleMenu"
    >
      <a-menu-item key="/dashboard">
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="/navtest">
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
  },

  methods: {
    handleMenu({ item, key, keyPath }) {
      console.log({ item, key, keyPath })
      this.$router.push(key)
    }
  }
}
</script>

<style lang="scss" scoped></style>
