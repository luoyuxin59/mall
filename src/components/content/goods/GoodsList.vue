<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goodsListItem="item">
      
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default: []
    }
  },
  data(){
    return {
   
    }
  },
  components: {
    GoodsListItem,
  }
}
</script>

<style lang="scss" scoped>
.goods-list{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;    
}
</style>