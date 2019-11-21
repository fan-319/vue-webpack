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
      padding-top: 3%;
      .search-keyword{
        flex: 1;
      }
      img{
          width: auto;
          height: 100%;
          display: inline-block;
          margin-right: .12rem;
      }
    }
  </style>
