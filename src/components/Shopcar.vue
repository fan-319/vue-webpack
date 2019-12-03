<template>
  <div class="shopcar-wrapper">
    <van-list
      class="list-wrapper"
      v-model="loading"
      :finished="finished"
      :error.sync="error"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <!-- error-text="请求失败，点击重新加载" -->
    <!-- <van-card
      class="card-wrapper"
        v-for="item in productList"
        :key="item.productId"
        :num="item.productNum"
        price="2.00"
        desc=""
        :title="item.commonName"
        :thumb="item.productImg"
      /> -->
      <van-checkbox-group class="card-goods" v-model="checkedGoods">
        <van-checkbox
          class="card-goods__item"
          v-for="item in productList"
          :key="item.id"
          :name="item.id"
        >
          <van-card
            :title="item.title"
            :num="item.productNum"
            :price="formatPrice(item.price)"
            :thumb="item.productImg"
          />
        </van-checkbox>
      </van-checkbox-group>
      <van-submit-bar
        :price="totalPrice"
        :disabled="!checkedGoods.length"
        :button-text="submitBarText"
        @submit="onSubmit"
      />
    </van-list>
  </div>
</template>

<script>
import Vue from 'vue'
import {Checkbox, CheckboxGroup, Toast} from 'vant'
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Toast)
export default {
  name: 'Shopcar',
  data() {
    return {
      loading: false,
      finished: false,
      error: '',
      checkedGoods: [],
      productList: [{
        id: 1,
        productId: 1001,
        productNum: 0,
        price: 99,
        title: '纱裙',
        productImg: require('@/components/recommend/img/j1.jpg')
      }]
    }
  },
  mounted () {
    this.finished = true;
  },
  methods: {
    onLoad () {
      this.loading = false;
    },
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
    onSubmit() {
      Toast('点击结算');
    }
  },
   computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },
    totalPrice() {
      return this.productList.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
    }
  },
}
</script>

<style scoped lang="less">
  *{
    -webkit-overflow-scrolling: touch;
  }
  .shopcar-wrapper{
    width: 100%;
    min-height: 100%;
    padding: .1rem;
    box-sizing: border-box;
    .list-wrapper{
      height: 100%;
      .card-wrapper{
        width: 100%;
        text-align: left;
        justify-content: space-around;
        img{
          object-fit: fill;
        }
      }
      .card-goods {
        padding: 10px 0;
        background-color: #fff;
      }
    }
  }
</style>
