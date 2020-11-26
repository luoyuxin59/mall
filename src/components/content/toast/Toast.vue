<template>
  <div class="toast" v-show="isShow">
      {{message}}
  </div>
</template>

<script>
export default {
  name: "toast",
  data(){
    return{
    }
  },
  props:{
    message:{
      type: String,
      default: ''
    },
     isShow: {
       type: Boolean,
       default: false
     }
  }
}
</script>

<style lang="scss" scoped>
  .toast{
    position: absolute;
    top: 50%;
    left: 50%;
    line-height: 30px;
    padding: 0 10px;
    border-radius: 10px;
    transform: translate(-50%,-50%);
    background: rgba(0, 0, 0, .7);
    color: #fff;
  }
</style>