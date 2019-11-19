<template>
  <div class="recommend-content">
    <div>推荐小宠物</div>
    <div class="recommend-item" v-for="(item, index) in recommendList" :key="index"
      @click="toDesign">
    <lazy-component>
      <img :src="item.url" alt="">
    </lazy-component>
      <div class="design">
        <span class="name">{{item.name}}</span>
        <span class="price">￥{{item.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import ToHref from '@/assets/url/toHref.js'
export default {
  name: 'Recommend',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: '',
      recommendList: [{
        id: 0,
        name: '纯种茶杯玩具泰迪', 
        price: '2000',
        url:  require('../recommend/img/g4.jpg')
      },{
        id: 1,
        name: '花花犬舍-法国卷毛比熊犬高品质幼犬', 
        price: '3500',
        url:  require('../recommend/img/g5.jpg')
      },{
        id: 2,
        name: '纯种波斯猫橘眼加菲猫活体幼猫异国短毛猫长毛猫加菲猫活体', 
        price: '3000',
        url:  require('../recommend/img/m9.jpg')
      }]
    }
  },
  methods: {
    toDesign () {
      // alert(ToHref);
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
