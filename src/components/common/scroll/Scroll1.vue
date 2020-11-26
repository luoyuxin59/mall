<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
      pullUpLoad: {
        type: Boolean,
        default: false,
      },
    };
  },
  // 1.组件创建完成后调用
  mounted() {
    // this.scroll = new BScroll(this.$refs.wrapper, {
    //   click: true,
    //   probeType: 3,
    //   pullUpLoad: this.pullUpLoad
    // })
    // 2.监听滚的位置
    // this.scroll.on('scroll',(position) => {
    //  this.$emit('scroll', position)
    // })
    // // 3.监听上拉加载事件
    // this.scroll.on('pullingUp', () => {
    //   this.$emit('pullingUp')
    // })
  },
  methods: {
    init() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        click: true,
        pullUpLoad: true,
      });
      // 3.监听上拉加载事件
      this.scroll.on("pullingUp", () => {
        this.$emit('pullingUp')
      });
      // 2.监听滚的位置
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
      console.log('scroll');
    },
      scrollTo(x, y, time){
       this.scroll &&  this.scroll.scrollTo(x, y, 300)
      },
    finishPullUp() {
      console.log(this.scroll);
      this.scroll && this.scroll.finishPullUp();
            console.log('finishPullUp');

    },
    refresh() {
      console.log("刷新scroll");
      this.scroll && this.scroll.refresh();
    },
      getCurrentY() {
        console.log(getCurrentY);
        return this.scroll.y ? this.scroll.y : 0
      }
  },
};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
</style>