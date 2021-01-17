<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
      
    </div>
  </div>
</template>

<script>
  import BSroll from "better-scroll"
import BScroll from 'better-scroll';
  export default {
    name:"Scroll",
    data() {
      return {
        scroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    }

    ,
    mounted() {
      
      // 1.创建BScroll
      this.scroll = new BScroll(this.$refs.wrapper, {
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      })
    // console.log(this.scroll.scrollerHeight);
      // 2.监听滚动的位置
      this.scroll.on("scroll",position =>{
        // console.log(position);
        this.$emit("scroll",position)
      }),

      // 3.监听上拉事件
      this.scroll.on("pullingUp",() => {
        this.$emit("pullingUp")
      })
    },
    methods:{
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refresh(){
        console.log('asasd')
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>