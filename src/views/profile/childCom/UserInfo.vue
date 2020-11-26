<template>
  <div >
    <div class="user">
      <div class="img">
        <img src="../../../assets/img/profile/avatar.svg" alt="">
      </div>
      <div class="info">
        <div class="info-left">
          <div class="longin">登录/注册</div>
          <div class="phone">
            <img src="../../../assets/img/profile/phone.svg" alt="">
            <span>暂无绑定手机号</span>
          </div>
        </div>
        <div class="info-right">
          <img src="../../../assets/img/common/arrow-left.svg" alt="">
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="item">
        <div>
          <span class="num">0.00</span>
          <span>元</span>
        </div>
        <div>我的余额</div>
      </div>
     <div class="item ">
         <span class="num">0</span>
          <span>个</span>
          <div>我的优惠</div>
      </div>
        <div class="item">
         <span class="num">0</span>
          <span>分</span>
          <div>我的积分</div>
      </div>
    </div>
    <div class="spit">

    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",

}
</script>

<style lang="scss" scoped>
  .user{
    display: flex;
    width: 100%;
    padding: 15px;
    background-color: var(--color-tint);
    .img{
      img{
        width: 70px;
        height: 70px;
      }
    }
    .info{
      width: 100%;
      display: flex;
      color: #fff;
      justify-content: space-between;
      padding: 0 0 0 20px;
      .info-left{
        .longin {
          padding: 10px 0 0 5px;
        }
        .phone{
          display: flex;
          font-size: 14px;
           img {
            width: 20px;
            height: 30px; 
            }
            span{
              line-height: 30px;
            }
        }
      }
      .info-right{
        padding-top: 20px;
        img{
          width: 25px;
          height: 25px;
        }
        
      }
    }
  }
  .bottom{
  display: flex;
  height: 65px;
  text-align: center;
  .item{
    flex: 1;
    padding-top: 15px;
    font-size: 14px;
    .num{
      color: #ff5f3e;
      font-size: 20px;
      font-weight: 700;
      padding-bottom: 2px;
    }
  }
  .item:nth-child(2){
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  }
  .spit{
    height: 15px;
    background: #eee;
  }
</style>