<template>
  <div id="app">
    <toolbar-area></toolbar-area>
    <transition name="page">
      <router-view></router-view>
    </transition>

    <spinner-bar :loading=true></spinner-bar>

  </div>
</template>

<script>
import ToolbarArea from './components/ToolbarArea.vue';
import SpinnerBar from './components/SpinnerBar.vue';

export default {
  components: {
    ToolbarArea,
    SpinnerBar
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
  color: #34495E;
}
a:hover {
  color: #42B883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}
/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
