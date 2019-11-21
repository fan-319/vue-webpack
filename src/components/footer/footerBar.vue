<template>
  <div>
    <van-tabbar v-model="active" :fixed="true" @change="tabBarActive">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="popular" icon="fire-o">热门</van-tabbar-item>
      <van-tabbar-item name="shopcar" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item name="mine" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)
export default {
  name: 'FooterBar',
  data() {
    return {
      active: 'home'
    }
  },
  methods: {
    tabBarActive (type) {
      console.log('type', type);
      switch (type) {
        case 'home':
          this.$router.push({path:'/'})
          break;
        
        case 'popular':
          this.$router.push({path:'/popular'})
          break;

        case 'shopcar':
          this.$router.push({path:'/shopcar'})
          break;

        case 'mine':
          this.$router.push({path:'/mine'})
          break;

        default:
          break;
      }
    }
  }
}
</script>

<style scoped>

</style>
