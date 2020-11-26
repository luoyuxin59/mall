<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Vue from 'vue'
export default {
  name: 'Scroll',
  data() {
    return {
       scroll:null,
        pullUpLoad: {
        type: Boolean,
        default: false
      }
    }
  },  
  // 1.组件创建完成后调用
  mounted() {
      
      this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      click: true,
      pullUpLoad: this.pullUpLoad,
    })
    // 2.监听滚的位置
    this.scroll.on('scroll',(position) => {
     this.$emit('scroll', position)
     
    })
    // 3.监听上拉加载事件
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
      console.log('scroll创建完成');
      console.log(this.scroll);

  },
  methods:{
      scrollTo(x, y, time=300){
       this.scroll &&  this.scroll.scrollTo(x, y, 300) 
      },
      finishPullUp(){
        this.scroll &&  this.scroll.finishPullUp() 
      },
      refresh() {
        console.log('scroll');
        this.scroll && this.scroll.refresh()
      },
      getCurrentY() {
        // console.log(getCurrentY);
        return this.scroll.y ? this.scroll.y : 0
      }
  }
}
</script>

<style scoped>
  .wrapper{
     height: 100%; 
  }
</style>