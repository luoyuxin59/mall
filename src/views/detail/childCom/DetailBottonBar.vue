<template>
  <div class="botton-bar">
    <div class="left">
      <div class="item">
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div class="item">
          <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div class="item">
          <i class="icon collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="add" @click="addCart">加入购物车</div>
      <div class="shop">购买</div>
    </div>
  </div>
</template>

<script>
import {addCart, } from '../../../store'
export default {
  name: "DetailBottonBar",
  methods: {
    addCart() {
      this.$emit("addToCart")
    }
  }
}
</script>

<style lang="scss" scoped>
  .botton-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 56px;
    font-size: 13px;
    width: 100%;
    background-color: pink;
    display: flex;
    .left{
      flex: 1;
      display: flex;
      background: #fff;
      text-align: center;
      .item{
        flex: 1;
        .icon{
          display: block;
          width: 22px;
          height: 22px;
          margin:  10px auto 3px;
          background: url('../../../assets/img/detail/detail_bottom.png') 0 0/100%;
          }
        .service{
          background-position: 0 98px;;
        }
        .shop{
          background-position: 0 202px;;

        }
        .collect{
          background-position: 0 302px;;
       
        }
      }
    }
    .right{
      flex: 1;
      display: flex;
      line-height: 56px;
      text-align: center;
      .shop{
      background: #f69;
      flex: 1;
       color: #fff;
      }
      .add{
        flex: 1;
        background: yellow;
        color: #222;
      }
    }
    
  }
</style>
