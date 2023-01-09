<template>
  <div id="app">
    <toolbar-area></toolbar-area>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolbarArea from './components/ToolbarArea.vue'

export default {
  components: {
    ToolbarArea
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
}
</style>
