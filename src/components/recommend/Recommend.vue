<template>
  <div class="recommend-content">
    <div class="title">推荐礼服</div>
    <van-list
      v-model="loading"
      :finished="finished"
      :error.sync="error"
      finished-text="没有更多了"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
    >

      <img v-for="(img, index) in recommendList" v-lazy="img.url" :key="index" >
      <!-- <van-card
        v-for="item in productList"
        :key="item.productId"
        :num="item.productNum"
        tag="标签"
        price="2.00"
        desc="描述信息"
        :title="item.commonName"
        thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        origin-price="10.00"
      /> -->
    </van-list>
  </div>
</template>

<script>
// import ToHref from '@/assets/url/toHref.js'
import Vue from 'vue'
import { List, Card } from 'vant'
Vue.use(List).use(Card)
export default {
  name: 'Recommend',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: '',
      productList: [],
      loading: false,
      finished: false,
      error: false,
      recommendList: [{
        id: 0,
        name: '纯种茶杯玩具泰迪',
        price: '2000',
        url: require('../recommend/img/j1.jpg')
      }, {
        id: 1,
        name: '花花犬舍-法国卷毛比熊犬高品质幼犬',
        price: '3500',
        url: require('../recommend/img/j2.jpg')
      }, {
        id: 2,
        name: '纯种波斯猫橘眼加菲猫活体幼猫异国短毛猫长毛猫加菲猫活体',
        price: '3000',
        url: require('../recommend/img/j3.jpg')
      }, {
        id: 3,
        name: '纯种波斯猫橘眼加菲猫活体幼猫异国短毛猫长毛猫加菲猫活体',
        price: '3000',
        url: require('../recommend/img/j4.jpg')
      }, {
        id: 4,
        name: '纯种波斯猫橘眼加菲猫活体幼猫异国短毛猫长毛猫加菲猫活体',
        price: '3000',
        url: require('../recommend/img/j5.jpg')
      }, {
        id: 5,
        name: '纯种波斯猫橘眼加菲猫活体幼猫异国短毛猫长毛猫加菲猫活体',
        price: '3000',
        url: require('../recommend/img/j6.jpg')
      }, {
        id: 6,
        name: '纯种波斯猫橘眼加菲猫活体幼猫异国短毛猫长毛猫加菲猫活体',
        price: '3000',
        url: require('../recommend/img/j7.jpg')
      }]
    }
  },
  created() {
    this.$http.get('getProductList').then((res) => {
      if (res.code === 0) {
        this.loading = false
        this.finished = true
        let list = this.productList
        list = Array.prototype.concat(list, res.result.list)
        this.productList = list
      } else {
        this.error = true
      }
    })
  },
  methods: {
    onLoad() {
      // 滚动触底触发
    }
  }
}
</script>

  <style lang="less" scoped="" type="text/css">
    .recommend-content{
      text-align: left;
      // font-weight: bold;
      .title{
        padding-bottom: .1rem;
      }
      img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        padding-bottom: .2rem;
      }
    }
  </style>
