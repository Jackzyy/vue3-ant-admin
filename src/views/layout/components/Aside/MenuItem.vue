<template>
  <a-menu-item v-if="childrenFilter()">
    <MenuFoldOutlined />
    <span>{{ childItem.meta.title }}</span>
  </a-menu-item>

  <a-sub-menu v-else :key="route.path">
    <template v-slot:title>
      <span>
        <MenuFoldOutlined />
        <span>{{ route.meta.title }}</span>
      </span>
    </template>
    <MenuItem
      v-for="child in route.children"
      :key="resolvePath(child.path)"
      :route="child"
      :base-path="resolvePath(child.path)"
    />
  </a-sub-menu>
</template>

<script>
import path from 'path'
import { MenuFoldOutlined } from '@ant-design/icons-vue'
export default {
  name: 'MenuItem',
  components: {
    MenuFoldOutlined
  },

  props: {
    route: {
      type: Object,
      default: () => {}
    },

    basePath: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      childItem: null
    }
  },

  computed: {
    menuHidden() {
      return this.route.hidden ? false : true
    }
  },

  methods: {
    childrenFilter() {
      if (!this.route.children) {
        this.childItem = this.route
        return true
      }
      if (this.route.children.length === 1) {
        this.childItem = this.route.children[0]
        return true
      } else {
        return false
      }
    },

    // 路由地址拼接
    resolvePath(router) {
      return path.join(this.basePath, router)
    }
  }
}
</script>

<style lang="scss" scoped></style>
