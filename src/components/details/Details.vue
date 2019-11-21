<template>
  <div class="details-content">
    <div>
      详情页
    </div>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value: ''
    }
  },
  methods: {
    mounted () {
      console.log('hhahahah');
    }
  }
}
</script>

  <style lang="less" scoped="" type="text/css"> 
    .details-content{
      width: 100%;
      height: 100%;
      overflow: hidden;
      max-width: 7.5rem;
      margin: 0 auto;
      font-size: .14rem;
    }
  </style>
