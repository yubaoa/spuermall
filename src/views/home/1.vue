<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" 
    @scroll="contentScroll" 
    :pull-up-load="true"
    @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" />
      <home-recommend-view :recommends="recommends" />
      <feature-view></feature-view>
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        v-on:tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
// import HomeSwiper from './childComps/HomeSwiper.vue'
// import HomeRecommendView from './childComps/HomeRecommendView.vue'
// import FeatureView from './childComps/FeatureView.vue'

// import NavBar from 'components/common/navbar/NavBar.vue'
// import TabControl from 'components/content/tabControl/TabControl.vue'
// import GoodsList from 'components/content/goods/GoodsList.vue'
// import Scroll from 'components/common/scroll/Scroll.vue'
// import BackTop from 'components/content/backTop/BackTop.vue'

// import {getHomeGoods, getHomeMultidata} from 'network/home'



export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data(){
    return {
      recommends:null,
      banners:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isShowBackTop:true
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  mounted(){
    console.log('homecreated');
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')


  },
  methods:{
    /**
     * 事件监听相关
     */
    tabClick(index){
      //console.log(index);
      switch(index){
        case 0:this.currentType = 'pop'
        break
        case 1:this.currentType = 'new'
        break
        case 2:this.currentType = 'sell'
        break
      }
    },
    backClick(){
     console.log(this.$refs.scroll);
      this.$refs.scroll.scrollTo(0,0,300)
    },
    contentScroll(position){
      //console.log(position.y);
      if(position.y >-500){
        this.isShowBackTop=true
      }
      else{
        this.isShowBackTop=false
      }
    },
   loadMore(){
     console.log(this.goods.currentType);
      this.getHomeGoods(this.goods.currentType)
    },
    /**
     * 网络请求相关
     */
    getHomeMultidata(){
    getHomeMultidata().then(res => {
      this.banners = res.banner.list
      this.recommends = res.recommend.list

    })
  },
  getHomeGoods(type){
    const page = this.goods[type].page + 1
    getHomeGoods(type,page).then(res => {
      //console.log(res);
      this.goods[type].list.push(...res.list)
      this.goods[type].page+=1
    }

  )
  }
  // getHomeGoods(type) {
  //       const page = this.goods[type].page + 1
  //       getHomeGoods(type, page).then(res => {
  //         this.goods[type].list.push(...res.data.list)
  //         this.goods[type].page += 1
  //         this.$refs.scroll.finishPullUp()
  //       })
  //     }
}}
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
  background-color: ivory;
  height: auto;
}
.content {
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
