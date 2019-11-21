<template>
  <div class="category-content">
    <div class="category-item">
      <ul v-for="(category, index) in categoryList" :key="index">
        <img v-lazy="category.url">
        
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
        name: '出门纱',
        url: require('../category/img/chumensha.jpg')
        // url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573537693484&di=8c7a2a5db282b376d33f3202bb532c9d&imgtype=0&src=http%3A%2F%2Flogos.logoinlogo.com%2FPet-logo-5645294n.png'
      },{
        id: 2,
        name: '长拖尾',
        url: require('../category/img/changtuowei.jpg')
        // url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573537693484&di=8c7a2a5db282b376d33f3202bb532c9d&imgtype=0&src=http%3A%2F%2Flogos.logoinlogo.com%2FPet-logo-5645294n.png'
      },{
        id: 2,
        name: '晚礼服',
        url: require('../category/img/wanlifu.jpg')
        // url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573537693484&di=8c7a2a5db282b376d33f3202bb532c9d&imgtype=0&src=http%3A%2F%2Flogos.logoinlogo.com%2FPet-logo-5645294n.png'
      },{
        id: 2,
        name: '旗袍',
        url: require('../category/img/qipao.jpg')
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
        justify-content: space-between;
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
