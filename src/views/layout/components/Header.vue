<template>
  <a-layout-header id="layout-header">
    <menu-unfold-outlined
      v-if="collapsed"
      @click="() => (collapsed = !collapsed)"
    />
    <menu-fold-outlined v-else @click="() => (collapsed = !collapsed)" />
  </a-layout-header>
</template>

<script>
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
export default {
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },

  data() {
    return {
      collapsed: false
    }
  },

  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
