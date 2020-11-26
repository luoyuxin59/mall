<template>
  <div>
   <nav-bar>
      <div slot="left" class="back" @click="back">
        <img src="../../../assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="titles ">
        <div class="item" :class="{active : currentIndex == index}" v-for="(item, index) in arr" :key="index" @click="itemClick(index)">
          {{ item }}
        </div>
      </div>
    </nav-bar>
    </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  data() {
    return {
      arr: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
      iid: '',
    };
  },
  components: {
    NavBar,
  },
   methods: {

    back() {
      this.$router.back(1);
    },
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('navClick', index);
    },
  },
}
</script>

<style lang="scss" scoped>
 .back {
    padding-top: 6px;
  }
  .titles {
    display: flex;
    .item {
      flex: 1;
      text-align: center;
      font-size: 14px;
    }
    .active{
      color: var(--color-high-text);
    }
  }
</style>