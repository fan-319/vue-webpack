<template>
  <div class="recommend-content">
    <div>推荐小宠物</div>
    <van-list
      v-model="loading"
      :finished="finished"
      :error.sync="error"
      finished-text="没有更多了"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item"
      />
    </van-list>
  </div>
</template>

<script>
// import ToHref from '@/assets/url/toHref.js'
import Vue from 'vue'
import { List } from 'vant'
Vue.use(List)
export default {
  name: 'Recommend',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: '',
      list: [],
      recommendList: [{
        id: 0,
        name: '纯种茶杯玩具泰迪',
        price: '2000',
        url: require('../recommend/img/g4.jpg')
      }, {
        id: 1,
        name: '花花犬舍-法国卷毛比熊犬高品质幼犬',
        price: '3500',
        url: require('../recommend/img/g5.jpg')
      }, {
        id: 2,
        name: '纯种波斯猫橘眼加菲猫活体幼猫异国短毛猫长毛猫加菲猫活体',
        price: '3000',
        url: require('../recommend/img/m9.jpg')
      }]
    }
  },
  methods: {
    onLoad() {

    }
  }
}
</script>

  <style lang="less" scoped="" type="text/css">
    .recommend-content{
      text-align: left;
      // font-weight: bold;
      .recommend-item{
          display: flex;
          flex-direction: row;
          padding: .1rem 0;
          border-bottom: 0.5px solid #f3f5f9;
        img{
          width: auto;
          height: 1rem;
          border-radius: .05rem;
          border: 1px solid #eee;
          margin-right: .1rem;
        }
        .design{
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .name{
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          .price{
            font-weight: bold;
          }
        }
      }
    }
  </style>
