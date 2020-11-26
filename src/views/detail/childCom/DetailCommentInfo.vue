<template>
  <div>
    <div  v-if="Object.keys(commentInfo).length !== 0"   class="comment-info">
      <div  class="info-hader">
        <span class="hader-title">用户评价</span
        ><span class="hader-more">更多</span>
      </div>
      <div class="info-user">
        <!-- <img :src="commentInfo.user.avatar" alt=""> -->
        <!-- <span class="user-nanme">{{commentInfo.user.uname}}</span> -->
         <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{commentInfo.content}}</p>
      <div class="info-img" >
        <img v-for="(img,index) in commentInfo.images" :src="img" alt="" :key="index">
      </div>
        <div class="info-other1">
          <span>{{commentInfo.created | showDate}}</span>
          <span class="detail-style">{{commentInfo.style}}</span>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils'
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {},
  },
  filters: {
    showDate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
};
</script>

<style scoped>
.comment-info {
  padding: 0 10px;
  border-bottom: 5px solid #f2f5f8;

}
.info-hader {
  line-height: 60px;
  border-bottom: 1px solid rgba(0,0,0,.1);
}
.hader-title {
  font-size: 18px;
}
.hader-more {
  float: right;
  font-size: 14px;
}
.info-user {
  margin-top: 10px;
}
.info-user img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
}
.info-user .user-nanme {
  padding-left: 10px;
  font-size: 18px;
}
.info-detail {
  font-size: 15px;
  margin-top: 10px;
  color: #666;
  line-height: 25px;
}
.info-other1 {
  line-height: 25px;
  margin-top: 5px;
  font-size: 13px;
  color: #c3c3c3;
}
.info-other1 .detail-style {
  margin-left: 10px;
}
.info-img img {
  width: 80px;
  height: 80px;
}
</style>