<template>
  <div class="list-item">
    <div class="item-selector">
      <check-button :isChecked="itemInfo.checked" @click.native="checkClick" ></check-button>
    </div>
   <div class="item-img">
     <img :src="itemInfo.imgURL" alt="" >
   </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">{{itemInfo.desc}}</div>
      <div class="item-other">
        <span class="price">￥{{itemInfo.price}}</span>
        <span class="count">x{{itemInfo.count}}</span>
      </div>
    </div>
   
  </div>
</template>

<script>
import CheckButton from './CheckButton'
export default {
  name: 'CartListItem',
  props: {
    itemInfo: {}
  },
  components: {
    CheckButton
  },
  methods: {
   checkClick(){
     this.itemInfo.checked = !this.itemInfo.checked ;

   }
  }
}
</script>

<style scoped>
  .list-item {
    display: flex;
    height: 130px;
    padding: 8px;
    border-bottom: 1px solid #ccc;
    z-index: 999;
  }
  .item-selector {
    width: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  .item-img img{
    width: 90px;
    height: 110px;
    margin-left: 5px;
    border-radius: 5px;
  }
  .item-info {
   font-size: 4.53333vw;
    color: #333;
    padding: 1.33333vw 2.66667vw;
    /* position: relative; */
    overflow: hidden;
  }
   .item-title {
     font-size: 18px;
    color: #333;
   }
   .item-desc{
     line-height: 66px;
     font-size: 14px;
     color: #666;
 
   }
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-other .price{
    font-size: 18px;
    color: red;
    font-weight: 500;
  }  
  .item-other .count {
    font-size: 16px;
    color: #333;
    float: right;
  } 
</style>