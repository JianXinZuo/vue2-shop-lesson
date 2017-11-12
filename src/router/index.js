import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GoodList from '@/views/GoodsList.vue'
import goodcart from '@/views/cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path:'/goodlist',
      name:'GoodList',
      component: GoodList
    },
    {
      path :'/goodCart',
      name:'goodcart',
      component:goodcart
    }
  ]
})
