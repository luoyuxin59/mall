<template>
  <div class="item">
    <img :src="showImage" alt="" @load="imageLoad" @click="itemClick"/>
    <div class="goods-info">
      <p>{{ goodsListItem.title }}</p>
      <span class="price">{{ goodsListItem.price }}</span
      ><span class="collect">{{ goodsListItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsListItem: {
      type: Object,
      default: {},
    },
    iid: "",
  },
  data() {
    return {
     
    }
  },
  computed: {
    showImage() {
      return this.goodsListItem.image || this.goodsListItem.img || this.goodsListItem.show.img ;
    },
  },
  methods:{
     imageLoad() {
      //  console.log('imageLoad');
      this.$bus.$emit("imageLoad");
    },
    itemClick() {
      console.log(this.goodsListItem.img);
      this.$router.push('/detail/' + this.goodsListItem.iid)
    }
  }
};
</script>
<style lang="scss" scoped>
.item {
  flex: 0.5;
  width: 48%;
  padding: 5px;
  img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    text-align: center;
    .price {
      color: var(--color-high-text);
      margin-right: 20px;
    }
    .collect {
      position: relative;
    }
    .collect::before {
      content: "";
      position: absolute;
      left: -15px;
      top: -1px;
      width: 14px;
      height: 14px;
      background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>