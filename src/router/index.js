import Vue from 'vue'
import Router from 'vue-router'
import { Search } from 'vant';
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Details from '@/components/details/Details'
import { Lazyload, Swipe, SwipeItem } from 'vant';

Vue.use(Router)
Vue.use(Search)
Vue.use(Lazyload, {
  lazyComponent: true
})
Vue.use(Swipe).use(SwipeItem);

export default new Router({
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
      // component: HelloWorld
    }
  ]
})
