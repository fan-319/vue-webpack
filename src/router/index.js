import Vue from 'vue'
import Router from 'vue-router'
import { Search } from 'vant';
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Popular from '@/components/Popular'
import Shopcar from '@/components/Shopcar'
import Mine from '@/components/Mine'
import Details from '@/components/details/Details'
import { Lazyload, Swipe, SwipeItem, Icon, SubmitBar } from 'vant';

Vue.use(Router)
Vue.use(Search)
Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.use(Swipe).use(SwipeItem);
Vue.use(Icon)
Vue.use(SubmitBar)

export default new Router({
  // 去除地址栏/#/
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      // component: HelloWorld
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/popular',
      name: 'Popular',
      component: Popular
    },
    {
      path: '/shopcar',
      name: 'Shopcar',
      component: Shopcar
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
