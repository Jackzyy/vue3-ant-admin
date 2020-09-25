<template>
  <a-layout-sider
    id="layout-aside"
    :collapsed="collapsed"
    :trigger="null"
    :width="256"
    collapsible
  >
    <a-menu
      theme="dark"
      mode="inline"
      v-model:selectedKeys="selectedKeys"
      @click="handleMenu"
    >
      <a-menu-item key="/dashboard">
        <MenuFoldOutlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="/navtest">
        <MenuFoldOutlined />
        <span>nav 2</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'
import { MenuFoldOutlined } from '@ant-design/icons-vue'
export default {
  components: {
    MenuFoldOutlined
  },

  data() {
    return {
      selectedKeys: ['/dashboard']
    }
  },

  computed: {
    ...mapState('app', {
      collapsed: state => state.collapsed
    })
  },

  methods: {
    handleMenu({ key }) {
      this.$router.push(key)
    }
  }
}
</script>

<style lang="scss" scoped></style>
