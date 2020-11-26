<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div class="title" slot="center">我的</div>
    </nav-bar>
   <div class="content">
      <user-info></user-info>
      <user-nav></user-nav>
   </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import UserInfo from './childCom/UserInfo'
import UserNav from './childCom/UserNav'
export default {
  components: { 
    NavBar,
    UserInfo,
    UserNav
    },

}
</script>

<style lang="scss" scoped>
  .profile{
    .nav-bar{
      background-color: var(--color-tint);
      color: #fff;
    }
    .content{
      position: absolute;
      top: 44px;
      left: 0;
      bottom: 49px;
      width: 100%;
    }
  }
</style>