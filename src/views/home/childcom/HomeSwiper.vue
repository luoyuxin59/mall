<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index" >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imgload" />
      </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";

export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
       isload: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
     imgload() {
      if(!this.isload){
      this.$emit('swiperImgload')
        this.isload = true
      }
  }
}
}
</script>

<style lang="scss" scoped>

.homeswiper img{
  width: 100%;
}

</style>