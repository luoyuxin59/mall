<template>
  <div class="tab-control">
    <div class="control " v-for="(item,index) in arr" :key="index">
      <span :class="{active : currentIndex == index}"  @click="controlClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      arr: ['流行', '新款', '精选'],
      currentIndex: 0
    }
  },
  methods: {
    controlClick(index) {
      this.currentIndex = index
      this.$emit("tabClick",index)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-control{
  display: flex;
  line-height: 49px;
  text-align: center; 
  background-color: #fff;
  .control{
    flex: 1;
    .active{
    padding: 3px;
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
  }
  }
 
}

</style>