<template>
  <div class="popular-wrapper">
    热门
  </div>
</template>

<script>
export default {
  name: 'Popular',
  components: { },
  data() {
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
  .popular-wrapper{
    width: 100%;
    min-height: 100%;
    padding: .1rem;
    box-sizing: border-box;
  }
</style>
