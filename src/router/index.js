import Vue from 'vue'
import Router from 'vue-router'
// 后台管理
import nodeApp from '@/components/app'
import nodeIndex from '@/components/index'
import nodeNews from '@/components/news'
import nodeNewsAdd from '@/components/newsAdd'
import nodeInvest from '@/components/invest'
import nodeInvestAdd from '@/components/investAdd'
import nodeWork from '@/components/work'
import nodeWorkAdd from '@/components/workAdd'
import nodeContact from '@/components/contact'
import nodeContactAdd from '@/components/contactAdd'

// pc端
import webApp from '@/webpages/app'
import webIndex from '@/webpages/index'
import webNews from '@/webpages/news'
import webInvest from '@/webpages/invest'
import webWork from '@/webpages/work'
import webContact from '@/webpages/contact'





Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    // pc

    {
      path: '/',
      component: webApp,
      redirect:'/web/index',
      children: [
        {
          path: '/web/index',
          component: webIndex
        },{
          path: '/web/news',
          component: webNews
        },{
          path: '/web/invest',
          component: webInvest
        },{
          path: '/web/work',
          component: webWork
        },{
          path: '/web/contact',
          component: webContact
        },
      ]
    },

    // node
    {
      path: '/node',
      component: nodeApp,
      redirect:'/node/index',
      children: [
        {
          path: '/node/index',
          component: nodeIndex
        },{
          path: '/node/news',
          component: nodeNews
        },{
          path: '/node/news/add',
          component: nodeNewsAdd
        },{
          path: '/node/invest',
          component: nodeInvest
        },{
          path: '/node/invest/add',
          component: nodeInvestAdd
        },{
          path: '/node/work',
          component: nodeWork
        },{
          path: '/node/work/add',
          name: 'nodeWorkAdd',
          component: nodeWorkAdd
        },{
          path: '/node/contact',
          component: nodeContact
        },{
          path: '/node/contact/add',
          name: 'nodeContactAdd',
          component: nodeContactAdd
        }
      ]
    },

  ]
})
