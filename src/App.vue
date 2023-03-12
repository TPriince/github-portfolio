<template>
  <!-- CONTAINER -->
  <div class="container">
    <SideBar />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import SideBar from './components/SideBar.vue';
  export default {
    name: 'App',
    components: {
      RouterView,
      SideBar,
    },
    provide () {
      
    }
  }
</script>

<style >

</style>