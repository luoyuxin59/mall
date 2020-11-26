<template>
  <div class="detail-swiper">
    <swiper>
      <swiper-item v-for="(img, index) in TopImage" :key="index">
         <img :src="img" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import SwiperItem from '@/components/common/swiper/SwiperItem.vue'
import Swiper from '../../../components/common/swiper/Swiper'
export default {
  name: "DetailSwiper",
  props: {
    TopImage: {
      type: Array,
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>
<style lang="scss" scoped>
.detail-swiper {
  height: 300px;
}
</style>