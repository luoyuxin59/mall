<template>
  <div class="bottton-bar">
    <div class="left">
      <div class="checkbtn">
         <check-button :isChecked="isSelectAll" @click.native="btnClick"></check-button>
      </div>
      <div class="all">全选</div>
      <div class="total">合计：￥{{totalPrice}}</div>
    </div>
    <div class="right">去结算({{ckeckLength}})</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CheckButton from './CheckButton'
export default {
  components: { CheckButton },
  name: "CartBottonBar",

  computed: {
    ...mapGetters(['cartList']),
  totalPrice() {
      let totalPrice = 0;
     this.cartList.filter(item => {
      if(item.checked){
          totalPrice += item.price * item.count
      }
    })
    return totalPrice.toFixed(2);
  },
  ckeckLength(){
   return this.cartList.filter(item => item.checked).length   
  },
  isSelectAll() {
    return !(this.cartList.filter(item => !item.checked).length)
  }

  },
  methods: {
    btnClick(){
      console.log(this.isSelectAll);
      if(this.isSelectAll) {
          this.cartList.forEach(item => item.checked = false)
      }else {
        this.cartList.forEach(item => item.checked =true)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottton-bar {
    position: absolute;
    display: flex;
    bottom: 49px;
    left: 0;
    width: 100%;
    height: 49px;
    background: #eee;
    box-shadow: 0 -3px 2px rgba(0, 0, 0, .2);
    .left{
      flex: 1;
      display: flex;
     
      .checkbtn{
        margin: 13px 3px 0 5px;
      }
      .all{
            line-height: 49px;

        color: #ccc;
      }
      .total{
            line-height: 49px;

        margin-left: 30px;
        color: #333;
      }
    }
    .right{
          line-height: 49px;

      width: 35%;
      text-align: center;
      background: orangered;
      color: #fff;
    }
  }
</style>