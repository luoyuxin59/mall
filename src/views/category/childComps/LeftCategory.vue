<template>
  <scroll class="left-category" ref="scroll">
    <div class="menu-list">
      <div class="menu-list-item " :class="{active: currentIndex === index}" 
      v-for="(item, index) in category" :key="index"
      @click="itemClick(index)"
      >{{item.title}}</div>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'

export default {
  name: 'LeftCategory',
  props: {
    category: {}
  },
  data() {
    return {
     currentIndex: 0
    }
  },
  components: {
    Scroll
  },
  
  methods: {
    
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('selectItem', index)
      this.$refs.scroll.refresh()
    }
  }
}
</script>


<style scoped>
  .menu-list {
    width: 26.66667vw;
    font-size: 15px;
    text-align: center;
    background-color: rgba(0, 0, 0, .03);
  }
  .menu-list .menu-list-item {
    width: 100%;
    line-height: 50px;
  
  }
  .active{
    border-left: 3px solid var(--color-high-text);
    color:  #ff5777;
    font-weight: 600;
    background-color: #fff;
  }
</style>