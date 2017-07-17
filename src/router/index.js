import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import loginpage from '@/components/loginpage'
import news from '@/components/news'
import newsAdd from '@/components/newsAdd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',//主页
      name: 'index',
      component: index
    },{
      path: '/loginpage',//登录页
      name: 'loginpage',
      component: loginpage
    },{
      path: '/news',//新闻列表页
      name: 'news',
      component: news
    },{
      path: '/news/add',//新闻新增页
      name: 'newsAdd',
      component: newsAdd
    },
  ]
})
