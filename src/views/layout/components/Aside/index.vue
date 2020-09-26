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
      :forceSubMenuRender="true"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @click="handleMenu"
    >
      <MenuItem
        v-for="item in routes"
        :key="item.path"
        :route="item"
        :base-path="item.path"
      />
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { mapState } from 'vuex'
import MenuItem from './MenuItem'
import { commonRoutes } from '@/router'
export default {
  components: {
    MenuItem
  },

  data() {
    return {
      selectedKeys: ['/dashboard'],
      openKeys: []
    }
  },

  computed: {
    ...mapState('app', {
      collapsed: state => state.collapsed
    }),

    routes() {
      console.log(commonRoutes)
      return commonRoutes
    }
  },

  methods: {
    handleMenu({ item, key, keyPath }) {
      console.log(item, key, keyPath)
      this.$router.push(key)
    }
  }
}
</script>

<style lang="scss" scoped></style>
