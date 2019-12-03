<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <footerBar/>
  </div>
</template>

<script>
import footerBar from '@/components/footer/footerBar'
export default {
  name: 'App',
  components: { footerBar },
}
</script>

<style lang="less">
@import '@/../common/less/reset.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: .14rem;
  height: 100%;
}

</style>
