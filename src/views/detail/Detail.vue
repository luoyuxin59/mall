<template>
  <div class="detail">
    <detail-nav-bar class="nav-bar" @navClick="navClick"></detail-nav-bar>
    <scroll class="scroll" ref="scroll" @scroll="contentScroll">
      <detail-swiper :TopImage="TopImage"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop" ></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" ></detail-goods-info>
      <detail-param-info :itemParams="itemParams" ref="param"></detail-param-info>
      <detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="goods"></goods-list>
    </scroll>
    <back-top v-show="isshowTopBack" class="backtop"  @click.native="topClick"></back-top>
    <detail-botton-bar @addToCart="addToCart"></detail-botton-bar>
    <toast :message="message" :isShow="isShow"></toast>
  </div>
  
</template>

<script>
import DetailNavBar from './childCom/DetailNavBar';
import DetailSwiper from './childCom/DetailSwiper';
import DetailBaseInfo from './childCom/DetailBaseInfo';
import DetailShopInfo from './childCom/DetailShopInfo';
import DetailGoodsInfo from './childCom/DetailGoodsInfo';
import DetailParamInfo from './childCom/DetailParamInfo';
import DetailCommentInfo from './childCom/DetailCommentInfo';
import goodsList from '@/components/content/goods/GoodsList';
import BackTop from '@/components/common/backTop/BackTop';
import DetailBottonBar from './childCom/DetailBottonBar'
import Scroll from '@/components/common/scroll/Scroll';
import { mapActions} from 'vuex';
import Toast from '../../components/content/toast/Toast'

import Vue from 'vue'
import {getDetail, getRecommend, Goods, GoodsParam} from '../../network/detail';
export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    goodsList,
    BackTop,
    DetailBottonBar,
    Scroll,
    Toast
    
  },
   data() {
    return {
      arr: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
      iid: null,
      TopImage: [],
      goods:{},
      shop: {},
      itemParams: {},
      detailInfo: {},
      commentInfo: {},
      recommends: [],
      isshowTopBack: false,
      message: '',
      isShow: false
    };
  },
   mounted() {
    /* 网络请求 */
    //  1.拿到商品id
     this.iid = this.$route.params.iid
     console.log(this.iid);
    //  2.获取数据 
    getDetail(this.iid).then(res =>{
        const data = res.result
        this.TopImage = res.result.itemInfo.topImages
    // 商品信息数据 
    this.goods =  new Goods(data.itemInfo, data.columns, data.shopInfo.services)
    // 店铺数据 
    this.shop = data.shopInfo
      // 获取详情数据
    this.detailInfo = data.detailInfo
    // 获取尺寸信息 
    this.itemParams = data.itemParams
    // 评论数据
    if(data.rate.list) {
      this.commentInfo = data.rate.list[0]
    }
  })
  getRecommend().then(res => {
    this.recommends = res.data.list
})
},
  methods: {
    ...mapActions({
      addCart: 'addToCart'
    }),
    imageLoad(){
      this.$refs.scroll.refresh()

      // 存储每个模块的高度 
      this.themeTops = []
      this.themeTops.push(0)
      this.themeTops.push(this.$refs.param.$el.offsetTop)
      this.themeTops.push(this.$refs.comment.$el.offsetTop)
      this.themeTops.push(this.$refs.goods.$el.offsetTop)

      console.log( this.themeTops);
    },
    contentScroll(position) {
      this.isshowTopBack = -(position.y) > 1000 
            const positionY = -position.y
        console.log(this.themeTops);
        let length = this.themeTops.length
        for(let i =0; i < length; i++) {
          if(this.currentIndex !== i && ((i <length -1 && positionY  >= 
          this.themeTops[i] && positionY < this.themeTops[i+1]) 
          ||( i === length -1 && positionY >= this.themeTops[i]))) {
            this.currentIndex = i
            console.log(this.currentIndex );
          }
        }
    },
    // 点击跳转到对应的主题
    navClick(index){
      console.log(index);
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTops[index],500)
    },
    // 返回顶部
    topClick() {
      this.$refs.scroll.scroll.scrollTo(0,0)
    },
    addToCart() {
      //  2.将商品信息添加到Store中
      const obj = {}

      obj.iid = this.iid
      obj.imgURL = this.TopImage[0]
      obj.title = this.goods.title
      obj.desc = this.goods.desc
      obj.price = this.goods.realPrice
      this.$store.dispatch('addCart', obj)
      this.message = "添加购物车成功"
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
      }, 500);
    }
  }
 
};
</script>

<style lang="scss" scoped>
.detail {
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 9999;
  background-color: #fff;
  .scroll{
    width: 100%;
    position: absolute;
    top: 49px;
    left: 0;
    bottom: 49px;
  }
  .nav-bar{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
}
</style>