<template>
  <a-layout-header id="layout-header">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="handleCollapsed(false)"
    />
    <menu-fold-outlined v-else class="trigger" @click="handleCollapsed(true)" />
  </a-layout-header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
export default {
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },

  computed: {
    ...mapState('app', {
      collapsed: state => state.collapsed
    })
  },

  methods: {
    ...mapMutations('app', ['SET_COLLAPSED']),

    handleCollapsed(val) {
      this['SET_COLLAPSED'](val)
    }
  }
}
</script>

<style lang="scss" scoped></style>
