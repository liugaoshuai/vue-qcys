import Vue from 'vue'
import Router from 'vue-router'
// 后台管理
import nodeApp from '@/components/app'
import nodeIndex from '@/components/index'
import nodeNews from '@/components/news'
import nodeNewsAdd from '@/components/newsAdd'
import nodeInvest from '@/components/invest'
import nodeInvestAdd from '@/components/investAdd'

// pc端
import webApp from '@/webpages/app'
import webIndex from '@/webpages/index'
import webNews from '@/webpages/news'
import webInvest from '@/webpages/invest'




Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',//主页
    //   name: 'index',
    //   component: index
    // }, {
    //   path: '/loginpage',//登录页
    //   name: 'loginpage',
    //   component: loginpage
    // }, {
    //   path: '/news',//新闻列表页
    //   name: 'news',
    //   component: news
    // }, {
    //   path: '/news/add',//新闻新增页
    //   name: 'newsAdd',
    //   component: newsAdd
    // }, {
    //   path: '/invest',//新闻列表页
    //   name: 'invest',
    //   component: invest
    // }, {
    //   path: '/invest/add',//新闻新增页
    //   name: 'investAdd',
    //   component: investAdd
    // },

    // {
    //   path: '/web/index',//PC主页
    //   name: 'webIndex',
    //   component: webIndex
    // },

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
        }
      ]
    },

  ]
})
