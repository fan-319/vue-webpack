<template>
  <div class="home-wrapper">
    <div class="header-wrapper">
      <Header></Header>
    </div>
    <div class="swiper-wrapper">
      <swiper-list></swiper-list>
    </div>
    <div class="category-wrapper">
      <category></category>  
    </div>
    <div class="recommend-wrapper">
      <recommend></recommend>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import SwiperList from '@/components/swiperList/SwiperList'
import Category from '@/components/category/Category'
import Recommend from '@/components/recommend/Recommend'
export default {
  name: 'Home',
  components: {Header, SwiperList, Category, Recommend},
  data () {
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
  .home-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    max-width: 7.5rem;
    margin: 0 auto;
    font-size: .14rem;
    .swiper-wrapper{
      margin: 0 .12rem;
      overflow: hidden;
      display: flex;
      border-radius: .05rem;
    }
    .category-wrapper{
      padding: .1rem 0.12rem;
      border-bottom: .05rem solid #f3f5f9;
    }
    .recommend-wrapper{
      padding: .1rem .12rem;
    }
  }
</style>
