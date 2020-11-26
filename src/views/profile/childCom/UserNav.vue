<template>
  <div class="nav">
    <div class="item">
      <img src="../../../assets/img/profile/message.svg" alt="">
      <span class="text">我的消息</span>
    </div>
       <div class="item">
      <img src="../../../assets/img/profile/pointer.svg" alt="">
      <span class="text">积分商城</span>
    </div>
       <div class="item">
      <img src="../../../assets/img/profile/vip.svg" alt="">
      <span class="text">会员卡</span>
    </div>
        <div class="spit">
    </div>
       <div class="item">
      <img src="../../../assets/img/profile/cart.svg" alt="">
      <span class="text">我的购物车</span>
    </div>
       <div class="item">
      <img src="../../../assets/img/profile/shopping.svg" alt="">
      <span class="text">下载APP</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserNav"
}
</script>

<style lang="scss" scoped>
  .nav{
    color: #333;
    font-size: 16px;
    .item{
      display: flex;
      line-height: 46px;
      margin-left: 10px;
   
      img{
        margin-top: 12px;
        width: 20px;
        height: 20px;
      }
      .text{
        width: 100%;
        margin-left: 10px;
        border-bottom: 1px solid #ccc;
      }
    }
    .item:nth-child(3){
      .text{
        border-bottom: none;
      }
    }
    .item:nth-child(6){
     .text{
        border-bottom: none;
      }
    }
    .spit{
      height: 15px;
      background: #eee;
    }
  }
  
</style>