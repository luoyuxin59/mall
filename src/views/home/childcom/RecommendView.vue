<template>
  <div class="recommend">
  <div class="recommend-item" v-for="item in recommends" :key="item.sort">
    <a :href="item.link" >
      <img :src="item.image" alt="">
      <p class="text">{{item.title}}</p>
    </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.recommend {
  width: 100%;
  display: flex;
  border-bottom: 8px solid #eee;
  .recommend-item{
    width: 100%;
    flex: 1;
    text-align: center;
    margin: 8px 5px;
    img{
      width: 100%;
    }
    .text{
      margin-top: 10px;
      font-size: 12px;
      color: var(--color-text);
    }
  }
}
</style> 
