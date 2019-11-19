<template>
  <div class="category-content">
    <div class="category-item">
      <ul v-for="(category, index) in categoryList" :key="index">
        <img :src="category.url">
        <!-- <img v-if="index == 0" src="./img/m7.jpg" alt="">
        <img v-if="index == 1" src="./img/g3.jpg" alt=""> -->
        <li>{{category.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      categoryList: [{
        id: 1,
        name: '猫',
        url: require('../category/img/m7.jpg')
        // url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573537693484&di=8c7a2a5db282b376d33f3202bb532c9d&imgtype=0&src=http%3A%2F%2Flogos.logoinlogo.com%2FPet-logo-5645294n.png'
      },{
        id: 2,
        name: '狗',
        url: require('../category/img/g3.jpg')
        // url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573537693484&di=8c7a2a5db282b376d33f3202bb532c9d&imgtype=0&src=http%3A%2F%2Flogos.logoinlogo.com%2FPet-logo-5645294n.png'
      }]
    }
  }
}
</script>

  <style lang="less" scoped="" type="text/css"> 
    .category-content{
      .category-item{
        display: flex;
        ul{
          padding: 0 .05rem;
          img{
            width: .5rem;
            height: .5rem;
            display: inline-block;
            border: 1px solid #eee;
            border-radius: 50%;
          }
          li{
            font-size: .12rem;
          }
        }
      }
    }
  </style>
