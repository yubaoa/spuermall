<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if='active'><slot v-if='active' name='item-icon'></slot></div>
    <div v-else><slot  name='item-icon-unactive'></slot></div>
    <div :style='activeStyle'>
      <slot name='item-name' ></slot>
    </div>
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="" />
    <div>首页</div> -->
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activecolor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      // active: true
    }
  },
  methods: {
    itemclick () {
      this.$router.push(this.path)
    }
  },
  computed: {
    active () {
      console.log(this.$route.path)
      return !(this.$route.path.indexOf(this.path) === -1)
    },
    activeStyle () {
      return this.active ? {color: this.activecolor} : {}
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width: 20px;
  height: 20px;
  margin-top: 3px;
}
.active{
  color:yellowgreen;
}
</style>
