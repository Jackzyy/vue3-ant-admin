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
        v-for="route in routes"
        :key="pathFilter(route)"
        :route="route"
        :base-path="route.path"
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
      selectedKeys: [],
      openKeys: []
    }
  },

  computed: {
    ...mapState('app', {
      collapsed: state => state.collapsed
    }),

    routes() {
      return commonRoutes
    }
  },

  watch: {
    $route(val) {
      this.selectedKeys = [val.path]
      this.openKeys = this.openKeysMatched(val.matched)
    }
  },

  created() {
    this.selectedKeys = [this.$route.path]
    this.openKeys = this.openKeysMatched(this.$route.matched)
  },

  methods: {
    handleMenu({ key }) {
      this.$router.push(key)
    },

    pathFilter(route) {
      if (route.children.length === 1) {
        return `/${route.children[0].path}`
      } else {
        return route.path
      }
    },

    openKeysMatched(val) {
      return val.map(item => {
        return item.path
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
