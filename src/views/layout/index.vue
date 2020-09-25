<template>
  <a-layout id="layout">
    <Aside />
    <a-layout>
      <Header />
      <Content />
    </a-layout>
  </a-layout>
</template>

<script>
import Aside from './components/Aside'
import Header from './components/Header'
import Content from './components/Content'
export default {
  components: {
    Aside,
    Header,
    Content
  },

  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
