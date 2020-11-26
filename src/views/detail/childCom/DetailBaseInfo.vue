<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
      <div class="title">{{goods.title}}</div>
      <div class="info-price">
        <span class="newPrice">{{goods.newPrice}}</span>
        <span class="oldPrice">{{goods.oldPrice}}</span>
        <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
      </div>
      <div class="info-other">
        <!-- <span class="" v-for="(item, index) in goods.cloums" :key="index">{{item}}</span>  -->
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {  
    goods: {
      type: Object,
      default: {}
    }
  },
}
</script>
<style >
.base-info {
  margin-top: 16px;
  padding: 0 8px;
  color: #999; 
  border-bottom: 5px solid #f2f5f8; 
}
.title{
  color: #222;
}
.info-price {
  position: relative;
  margin-top: 11px;
}
.info-price .newPrice {
  font-size: 26px;
  color: var(--color-high-text);
}
.info-price .oldPrice {
    margin: 0 5px;
  font-size: 14px;
  text-decoration: line-through;
}
.info-price  .discount {
  position: absolute;
  top: 0;
  font-size: 14px;
  color: #fff;
  padding: 2px 6px;
  background-color:  var(--color-high-text);
  border-radius: 10px;
}
.info-other{
  display: flex;
  line-height: 34px;
  font-size: 14px;
  margin-top: 16px;
  border-bottom: 1px solid rgba(100,100,100,.1);
   -webkit-box-pack: justify;
  justify-content: space-between;

}
.info-service {
  display: flex;
  line-height: 66px;
  justify-content: space-between;

}
.info-service-item {
  font-size: 13px;
  color: #333;
}
.info-service-item img{
  position: relative;
  width: 14px;
  height: 14px;
  top: 2px;

}
</style>