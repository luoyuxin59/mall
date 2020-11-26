<template>
  <div class="backtop">
        <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style lang="scss" scoped>
  .backtop{
    position: fixed;
    right: 30px;
    bottom: 100px;
    width: 50px;
    height: 50px;
    z-index: 9;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>