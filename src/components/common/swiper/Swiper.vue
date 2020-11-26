<template>
    <div id="hy-swiper"
          @touchstart="touchStart"  
          @touchmove="touchMove"  
           @touchend="touchEnd" >
    <div class="swiper" >
      <!-- <div  class="slide" v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </div> -->
      <slot></slot>
    </div>
    <slot name="indicator"> </slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div
          v-for="(item, index) in slideCount"
          class="indi-item"
          :class="{ active: index === currentIndex - 1 }"
          :key="index"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    banners: Array,
    interval: { //时间间隔
      type: Number,
      default:3000
    },
    animDuration: {  //切换的动画时间
      type: Number,
      default:300
    },
    moveRatio: {    //移动比例
      type: Number,
      default: 0.25
    },
    showIndicator: {  //显示原点
      type: Boolean,
      default: true,
    }
  },
  data() {
    return{
      slideCount:  0,//元素个数
      totalWidth: 0,   //Swiper宽度
      swiperStyle: {}, // swiper样式
      currentIndex: 1, // 当前的index
      scrolling: false, //是否在滚动
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      this.startTimer()
    },200)
  },
  methods: {
    /* 操作DOM */
      handleDom() {
        // 1.获取要操作的元素
        let swiperEl =  document.querySelector(".swiper");
        let slidesEls = swiperEl.getElementsByClassName("slide")

        // 2.保存图片元素个数 
      this.slideCount = slidesEls.length
        // 3.如果大于一个，在前后面分别添加一个slide
        if(this.slideCount > 1) {
          let cloneFirst = slidesEls[0].cloneNode(true)
          let cloneLast= slidesEls[this.slideCount -1].cloneNode(true)
          swiperEl.insertBefore(cloneLast, slidesEls[0])
          swiperEl.appendChild(cloneFirst)

          this.totalWidth = swiperEl.offsetWidth; // 距离外层元素的宽
          this.swiperStyle = swiperEl.style

          // 4.让swiper元素显示第一个（目前第一个是前面添加的元素）
          this.setTransform(-this.totalWidth)
        }
      },

    /* 设置滚动的位置 */
      setTransform(position) {
        this.swiperStyle.transform = `translate3d(${position}px, 0 ,0)`;
        this.swiperStyle["-webkit-transform"] = `translate3d(${position}px), 0 , 0`;
        this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;

      },
      
      
    /* 校验正确的位置 */
      checkPosition(){
        setTimeout(() => {
          // 1.检验正确的位置 
          this.swiperStyle.transition = "0ms";
          if(this.currentIndex >= this.slideCount + 1) {//判断移动到最后一张图片时候 移动到第一张
            this.currentIndex = 1;
            this.setTransform(-this.currentIndex * this.totalWidth); 
          }else if(this.currentIndex <= 0) {  //  
            this.currentIndex = this.slideCount;
            this.setTransform(-this.currentIndex * this.totalWidth); 
          }
          // 结束移动后的回调
          this.$emit("transitionEnd", this.currentIndex - 1)
        },this.animDuration)
      },
    /* 定时器 */
    startTimer() {
       this.playTimer = setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
      }, this.interval);
    },
    stopTimer() {
      clearInterval(this.playTimer);
    },


    /* 滚动到正确位置的函数 */
    scrollContent(currentPosition) {
      //  1.设置正在滚动
      this.scrolling = true
      
      //  2.开始滚动动画
      // this.swiperStyle.transition = "transform " + this.animDuration + "ms";
      this.swiperStyle.transition = "transform " + this.animDuration + "ms";

      this.setTransform(currentPosition);

      //  3.判断滚动到的位置 
      this.checkPosition();

      // 4.滚动完成
      this.scrolling = false
    },
    // 鼠标按下
    touchStart(e) {
      // console.log('鼠标按下');
      // 1.如通正在滚动着不可以拖动
      if(this.scrolling) return;  
      // 2.停止定时器
      this.stopTimer()
      // 3.保存开始滚动的位置 
      this.startX = e.touches[0].pageX;
      // console.log(this.startX);
    },
    // 鼠标移动
    touchMove(e) {
      // console.log('鼠标移动');
      // 1.计算出用户移动了多少距离
      this.currentX = e.touches[0].pageX;  // 鼠标距离页面左边的距离
      // console.log(  this.currentX);
      this.distance = this.currentX - this.startX; // 鼠标移动的距离
      // console.log(this.distance); 
      let currentPosition = - this.currentIndex * this.totalWidth ;
      let moveDistance =  this.distance + currentPosition;
      // console.log('当前图片index：' + this.currentIndex);
      // console.log('当前图片宽度：'+ this.totalWidth);
      // console.log('需要滚动距离：'+this.currentPosition); 
      // console.log(moveDistance);
      // 2.设置当前的位置
      this.setTransform(moveDistance)
      // 
    },
    // 鼠标离开
    touchEnd(e) {
      // console.log('鼠标离开');

      // 1.获取移动的距离
      let currentMove = Math.abs(this.distance)
      // console.log('distance:' + this.distance);
      // console.log(currentMove,this.totalWidth * 0.25);
      // 2.判断最终的距离
      if(this.distance === 0) {
        return;
      }else if(this.distance > 0 && currentMove > this.totalWidth * this.moveRatio ) {
        // 向右边移动超过0.25
        this.currentIndex--;
      }else if(this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
        // 向左边移动超过0.25
        this.currentIndex++;
       }
      // 3.移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth)

      // 4.移动完成重新开启定时器
        this.startTimer()
     
    },
    /* 控制上一个，下一个 */
    previous() {
      this.changeItem(-1);
    },
    next(){
      this.changeItem(1);
    },
    changeItem(num){
      // 1.移除定时器
      this.stopTimer();

      // 2.修改index和位置
      this.currentIndex += num;
      this.scrollContent(-this.currentIndex * this.totalWidth);

      // 3.添加定时器
      this.startTimer();
    }
  }
}
</script>

<style lang="scss" scoped>
#hy-swiper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .swiper{
    display: flex;
    .slide{
      width: 100%;
      flex-shrink: 0;
      img{
        width: 100%;
      }
    }
  }
  .indicator{
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
    .indi-item{
      float: left;
      box-sizing: border-box;
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background-color: #fff;
      line-height: 8px;
      text-align: center;
      font-size: 12px;
      margin: 0 5px;
    }
    .indi-item.active{
      background-color: rgba(212,62,46, 1);
    }
  }
}

</style>
