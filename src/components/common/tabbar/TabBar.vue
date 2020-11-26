<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'
export default {
  name: 'TabBar',
  components: {
    TabBarItem
  }
}
</script>

<style scoped>
#tabbar {
  display: flex;
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  right: 0;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(150, 150, 150, 0.08);
  border-top: 1px solid #eee;
}
</style>