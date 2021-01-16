<template>
  <div id="app">
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
body {
   margin:0;
  padding:0;
}
#tab-bar {
   display: flex; 
  background-color: aliceblue;
  position:fixed;
  left: 0;
  right: 0;
  bottom: 0px;
  box-shadow: 0px -2px 1px rgb(122, 118, 124, 0.1);
}

</style>
