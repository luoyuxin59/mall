<template>
  <div class="cart-list">
    <scroll class="content"  ref="scroll" >
     <cart-list-item  v-for="item in cartList" :key="item.iid" :itemInfo="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll";
import CartListItem from './CartListItem'
export default {
  name: "CartList",
  props:{
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components:{
    Scroll,
    CartListItem,
  },
  activated() {
    console.log('activated');
    this.$refs.scroll.refresh()
  }
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 49px -44px - 44px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>