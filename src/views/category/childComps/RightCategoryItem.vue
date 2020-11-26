<template>
  <div class="item">
    <div>
      <a :href="rightItem.link">
        <img :src="rightItem.image" alt="" @load="imgload">
        <p>{{rightItem.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll'

export default {
  name: "RightCategoryItem",
  props:{
    rightItem: {
      type: Object,
      default: {}
    }
  },
  methods: {
    imgload(){
      this.$bus.$emit('imgload')
    }
  },
  
}
</script>

<style lang="scss" scoped>
  .item {
    width: 81px;
    text-align: center;
    margin: 0 3px 10px 3px;
    div{
      img {
        width: 80%;
      }
      p{
        font-size: 10px;
        text-align: center;
      }
    }
  }
</style>