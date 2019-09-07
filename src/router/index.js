import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import actionsheet from '@/components/actionsheet';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/actionsheet',
      name: 'actionsheet',
      component: actionsheet
    }
  ]
})
