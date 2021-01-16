<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <main-tab-bar/>
    </div>
    
  </div>
</template>
<script>
  import MainTabBar from './components/content/mainTabbar/MainTabBar'
  export default {
    name:'app',
    components: {
      MainTabBar
    }
  }
</script>
<style>
  @import './assets/css/base.css';
</style>
