<template>
  <div id="app">
    <toolbar-area></toolbar-area>
    <transition name="page">
      <router-view></router-view>
    </transition>

    <spinner-bar :loading="this.$store.state.loadingStatus" ></spinner-bar>

  </div>
</template>

<script>
import ToolbarArea from './components/ToolbarArea.vue';
import SpinnerBar from './components/SpinnerBar.vue';
// import { bus } from './utils/bus.js';
export default {
  components: {
    ToolbarArea,
    SpinnerBar
  },
  data() {
    return {
      loadingStatus: false
    };
  },
  methods: {

  },
  created() {
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
