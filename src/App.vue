<template>
  <div id="app">
    <keep-alive exclude="Detail">
         <router-view></router-view>
    </keep-alive>
    <mian-tab-bar class="mian-tab-bar"></mian-tab-bar>
  </div>
</template>
<script>
import MianTabBar from "@/components/content/MianTabBar/MianTabBar";
import Home from "@/views/home/Home";
export default {
  name: "App",
  components: {
    Home,
    MianTabBar, 
  },
};
</script>

<style lang="scss" scoped>
@import "assets/css/base.css";
.mian-tab-bar{
  z-index: 9;
}
#app {
  position: relative;
  height: 100vh;
}
* ul,
li {
  list-style: none;
}
</style>


