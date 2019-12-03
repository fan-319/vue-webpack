<template>
  <div class="mine-wrapper">
    <div class="un-login">
      <img src="" alt="">
      <span>请&nbsp;<a href="">登录</a>&nbsp;/&nbsp;<a href="">注册</a></span>
    </div>
    <div class="order-wrapper">
      <div class="order-item">
        <span>我的订单</span>
        <span class="view-all">查看全部<van-icon name="arrow" /></span>
      </div>
      <div class="order-category">
        <div>
          <van-icon name="pending-payment" />
          待付款
        </div>
        <div>
          <van-icon name="records" />
          待发货
        </div>
        <div>
          <van-icon name="tosend" />
          待收货
        </div>
        <div>
          <van-icon name="logistics" />
          待评价
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mine',
  components: { },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="less">
  *{
    -webkit-overflow-scrolling: touch;
  }
  .mine-wrapper{
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;
    background: #eee;
    .un-login{
      text-align: left;
      text-align: left;
      padding: 0.2rem .2rem 0;
      background: #fe2d0c;
      color: #fff;
      height: 1rem;
      background-image: linear-gradient(to bottom right, #faaaaa , #fe2d0c);
      img{
        width: .6rem;
        height: .6rem;
        display: inline-block;
        border-radius: 50%;
        border: 1px solid #eee;
        vertical-align: middle;
        margin-right: .1rem;
      }
      a{
        color: #fff;
      }
    }
    .order-wrapper{
      width: 100%;
      height: 1.5rem;
      background: #fff;
      display: inline-block;
      box-sizing: border-box;
      position: relative;
      top: -.1rem;
      border-radius: .1rem;
      .order-item{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: .2rem;
        border-bottom: .01rem solid #eee;
        .view-all{
          color: #999;
        }
        .van-icon{
          vertical-align: middle;
        }
      }
    }
    .order-category{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: .2rem .2rem 0;
      .van-icon{
        display: block;
        font-size: .24rem;
      }
    }
  }
</style>
