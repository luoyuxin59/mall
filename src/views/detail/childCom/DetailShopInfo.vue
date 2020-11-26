<template>
  <div class="shop-info">
    <div class="shop-title">
      <img :src="shop.shopLogo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="goods-count">{{shop.cSells | sellCountFilter}}</div>
          <div class="goods-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better' : item.isBetter}">{{item.score}}</td>
            <td class="score" :class="{'score-better' : item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom ">
    <div class="enter-shop">
        进店逛逛
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {}
  },
  filters: {
   sellCountFilter(value) {
     if(value >= 10000) {
       return (value / 10000).toFixed(2) + '万'
     }else {
       return value
     }
   }
  }
}
</script>

<style scope>
.shop-info {
  padding: 60px 5px 26px 5px;
  border-bottom: 5px solid #f2f5f8; 
}
.shop-title img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.shop-middle{
  margin-top: 16px;
  display: flex;
  align-items: center;
}
.shop-middle-left {
 display: flex;
 line-height: 24px;
 justify-content: space-evenly;
text-align: center; 
 border-right: 1px solid rgba(0,0,0,.1);

}
.shop-middle-right {
  font-size: 14px;
  color: #333;
    text-align: center; 
}
.shop-middle-right table {
  width: 132px;
  height: 86px;
  margin-left: 34px;
}
.shop-middle-item {
  flex: 1;
}
.goods-count {
  font-size: 20px;
  color: #666;
}
.goods-text {
  font-size: 14px;
}
.shop-middle-right .score {
  color: #5ea732;
}
.shop-middle-right  .score-better {
  color: #f13e3a
}
.shop-bottom {
  margin-top: 12px;
  text-align: center;
  
}
.enter-shop {
  display: inline-block;
  height: 32px;
  width: 165px;
  line-height: 32px;
  background-color: #f2f5f8;
  text-align: center;
  border-radius: 10px;
 }
</style>