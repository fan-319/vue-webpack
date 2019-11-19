<template>
  <div class="header-content">
    <van-search class="search-keyword" placeholder="请输入搜索关键词" v-model="value" 
      @search="onSearch"
      @cancel="onCancel"/>
    <img src="../../assets/img/pai.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: ''
    }
  },
  methods: {
    onSearch () {

    },
    onCancel () {

    }
  }
}
</script>

  <style lang="less" scoped="" type="text/css"> 
    .header-content{
      display: flex;
      .search-keyword{
        flex: 1;
      }
      img{
          width: 0.3rem;
          height: 0.3rem;
          margin: .1rem .12rem 0 0;
      }
    }
  </style>
