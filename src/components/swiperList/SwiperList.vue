<template>
  <div class="swiper-content">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.url" @click="toDetails(images.id)" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'SwiperList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      images: [
        {
          id: '1001',
          url: require('../swiperList/img/y1.jpg')
        },
        {
          id: '1002',
          url: require('../swiperList/img/y4.jpg')
        }
      ]
    }
  },
  methods: {
    toDetails () {
      // window.location.href = '../details/Details';
      this.$router.push({path:'/details'})
    }    
  }
}
</script>

  <style lang="less" scoped="" type="text/css"> 
    .swiper-content{
      width: 100%;
      height: auto;
      .van-swipe, img{
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        max-height: 3rem;
      }
    }
  </style>
