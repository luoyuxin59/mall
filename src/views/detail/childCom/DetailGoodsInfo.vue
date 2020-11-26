<template>
  <div  v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="text">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-effect">
      <div class="effect-text">{{detailInfo.detailImage[0].key}}</div>
      <div class="effect-image" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
        <img :src="item" alt=""  @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {}
  },
  data() {
    return{
      	counter: 0,
      imageLength: 0
    }
  },
  methods: {
    imgLoad() {
      if(++this.counter == this.imageLength)
      this.$emit('imageLoad')
      console.log('img');
    }
  },
  watch: {
    detailInfo() {
      this.imageLength = this.detailInfo.detailImage[0].list.length

    }
  }
}
</script>

<style scoped>
.goods-info {
  padding: 16px 10px 0 10px;
  border-bottom: 1.33333vw solid #f2f5f8;
}
.info-desc {
  position: relative;
}
.info-desc .start, .info-desc .end {
  width: 100px;
  height: 1px;
  background-color: #444;
 
}
.info-desc .start::before {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #333;
  top: -6px;
}
.info-desc .end::before {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  background-color: #333;
  bottom: -16px;
  right: 0;
}
.info-desc .end {
  float: right;
}
.info-desc .text {  
  margin: 15px 0;
  font-size: 14px;
  color: #666;
}
.info-effect .effect-text {
  color: #333;
  font-size: 16px;
}
.info-effect img {
  width: 100%;
}
</style>