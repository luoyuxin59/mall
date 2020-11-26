<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control class="control1" ref="control1" v-show="isShowTabCotrol"  @tabClick="tabClick"></tab-control>
    <scroll class="content" ref="scroll"   @pullingUp="loadMore"    @scroll="contentScroll">
      <home-swiper @swiperImgload="swiperImgload" :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <div class="spit"></div>
      <feature-view/>
      <tab-control ref="control2" class="control2" v-show="!isShowTabCotrol"   @tabClick="tabClick"></tab-control>
      <goods-list :goods="showImage"></goods-list>
    </scroll>
     <back-top v-show="isshowTopBack" class="backtop"  @click.native.stop="topClick"></back-top>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar';
import Swiper from '@/components/common/swiper/Swiper';
import HomeSwiper from  './childcom/HomeSwiper';
import RecommendView from './childcom/RecommendView';
import FeatureView from './childcom/FeatureView'
import TabControl from '@/components/content/tabControl/TabControl'
import { getHomeMultidata, getHomeGoods } from "@/network/home";
import GoodsList from '@/components/content/goods/GoodsList';

import Scroll from '@/components/common/scroll/Scroll';
import Vue  from 'vue'
import {debounce} from "@/common/utils"
import BackTop from '@/components/common/backTop/BackTop';

export default {
  name: 'Home',
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        sell: { page: 0, list: [] },
        new: { page: 0, list: [] },
      },
      currentType: "pop",
      isshowTopBack: false,
      isShowTabCotrol: false,
      offsetTop: 0,
      saveY: 0,
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    Swiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata()

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
    console.log('home');

  
    },
  computed:{
    showImage() {
      return this.goods[this.currentType].list;
    },
     },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
          this.$refs.scroll.refresh()

    },
    deactivated() {
      this.saveY = this.$refs.scroll.getCurrentY()
      console.log(this.saveY); 
    },
 
    mounted(){
    // 监听item图片加载完城
    const refresh = debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('imageLoad', () => {
      refresh()
    })

  },
  methods: {
  
    /* 事件监听相关 */
    swiperImgload(){
       this.offsetTop = this.$refs.control2.$el.offsetTop;
    },
    tabClick(index) {
      console.log(index);
      switch(index){
        case 0:
          this.currentType = "pop";
          break; 
         case 1:
          this.currentType = "new";
           break; 
         case 2:
          this.currentType = "sell";
           break;
      }
      this.$refs.control2.currentIndex = index
      this.$refs.control1.currentIndex = index
    },
    // 上拉加载更多
    loadMore() {
     this.getHomeGoods(this.currentType)
    },
    contentScroll(position){
      // 控制返会顶部的按钮显示和隐藏
      this.isshowTopBack = (-position.y) >= 1000 
      // 决定tabcontrol是否吸顶
      this.isShowTabCotrol = position.y < -this.offsetTop
    },
    topClick(){
      this.$refs.scroll.scroll.scrollTo(0,0)
   },
    /* 网络请求 */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
        console.log(this.banners);
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      console.log(page);
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1
        console.log('数据加载完成');
        this.$refs.scroll.finishPullUp()
      })
    },
  }
}
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  position: relative;
  height: calc(100% - 49px);
  .content{
    height: calc(100% - 49px);
    overflow: hidden;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 9;
  }
  .backtop{
    z-index: 999;
  }
  .control1{
    position: relative;
    z-index: 9;
  }
}


</style>