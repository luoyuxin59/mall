<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>


<style scoped>
  .nav-bar {
    position: absolute;
    width: 100%;
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    z-index: 99999;
    background: #Fff;
  }
  .left {
    width: 60px;
  }
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>