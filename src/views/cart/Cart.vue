<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车<span>({{length}})</span></div>
    </nav-bar>
    <cart-list class="list" :cartList="list"></cart-list>
    <cart-botton-bar ></cart-botton-bar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from '../../components/common/navbar/NavBar';
import CartBottonBar from './childCom/CartBottonBar';
import CartList from './childCom/CartList';
export default {
  name: "Cart",
  components: {
    NavBar,
    CartBottonBar,
    CartList,
  },
  computed: {
    ...mapGetters({
      length: 'cartLength',
      list: 'cartList'
    })
  },
}
</script>

<style lang="scss" scoped>
.cart{
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .list{
    width: 100%;
    position: absolute;
    top: 49px;
    bottom: 100px;
    // left: 0;
  }
}
</style>