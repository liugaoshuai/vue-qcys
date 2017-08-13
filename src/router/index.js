import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import loginpage from '@/components/loginpage'
import news from '@/components/news'
import newsAdd from '@/components/newsAdd'
import invest from '@/components/invest'
import investAdd from '@/components/investAdd'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',//主页
      name: 'index',
      component: index
    }, {
      path: '/loginpage',//登录页
      name: 'loginpage',
      component: loginpage
    }, {
      path: '/news',//新闻列表页
      name: 'news',
      component: news
    }, {
      path: '/news/add',//新闻新增页
      name: 'newsAdd',
      component: newsAdd
    }, {
      path: '/invest',//新闻列表页
      name: 'invest',
      component: invest
    }, {
      path: '/invest/add',//新闻新增页
      name: 'investAdd',
      component: investAdd
    },
  ]
})
