<template>
  <div>
    <div class="right-category-view">
     
        <right-category-item
         v-for="item in categoryData" :key="item.maitKey"
          :rightItem="item"
        ></right-category-item>
    </div>
  </div>
</template>

<script>
import { debounce } from "@/common/utils";

import { getCategory, getSubcategory } from "@/network/category";
import RightCategoryItem from "./RightCategoryItem";
export default {
  name: "RightCategory",
  props: {
    categoryData: {
      type: Object,
      default: {},
    },
  },
  components: {
    RightCategoryItem,
  },
  mounted() {},
  methods: {
    // 网络请求
  },
};
</script>
<style lang="scss" scoped>
  .right-category-view {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 5px;
  }
</style>