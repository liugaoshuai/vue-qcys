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
import nodeWechat from '@/components/wechat'
import nodeWechatAdd from '@/components/wechatAdd'
import nodeAbout from '@/components/about'
import nodeAboutAdd from '@/components/aboutAdd'

// pc端
import webApp from '@/webpages/app'
import webIndex from '@/webpages/index'
import webNews from '@/webpages/news'
import webInvest from '@/webpages/invest'
import webWork from '@/webpages/work'
import webContact from '@/webpages/contact'
import webWechat from '@/webpages/wechat'
import webAbout from '@/webpages/about'

import webWechatDetail from '@/webpages/wechatDetail'
import webWorkDetail from '@/webpages/workDetail'
import webNewsDetail from '@/webpages/newsDetail'
import webInvestDetail from '@/webpages/investDetail'








Vue.use(Router)

export default new Router({
  routes: [

    // pc

    {
      path: '/',
      component: webApp,
      name: 'webApp',
      redirect: '/web/index',
      children: [
        {
          path: '/web/index',
          name: 'webIndex',
          component: webIndex
        }, {
          path: '/web/news',
          name: 'webNews',
          component: webNews
        }, {
          path: '/web/invest',
          name: 'webInvest',
          component: webInvest
        }, {
          path: '/web/work',
          name: 'webWork',
          component: webWork
        }, {
          path: '/web/contact',
          name: 'webContact',
          component: webContact
        }, {
          path: '/web/wechat',
          name: 'webWechat',
          component: webWechat
        }, {
          path: '/web/about',
          name: 'webAbout',
          component: webAbout
        }, {
          path: '/web/wechat/detail',
          name: 'webWechatDetail',
          component: webWechatDetail
        }, {
          path: '/web/news/detail',
          name: 'webNewsDetail',
          component: webNewsDetail
        }, {
          path: '/web/work/detail',
          name: 'webWorkDetail',
          component: webWorkDetail
        }, {
          path: '/web/invest/detail',
          name: 'webInvestDetail',
          component: webInvestDetail
        }
      ]
    },

    // node
    {
      path: '/qcys2017node',
      name: 'nodeApp',
      component: nodeApp,
      redirect: '/qcys2017node/index',
      children: [
        {
          path: '/qcys2017node/index',
          name: 'nodeIndex',
          component: nodeIndex
        }, {
          path: '/qcys2017node/news',
          name: 'webAnodeNewspp',
          component: nodeNews
        }, {
          path: '/qcys2017node/news/add',
          name: 'nodeNewsAdd',
          component: nodeNewsAdd
        }, {
          path: '/qcys2017node/invest',
          component: nodeInvest
        }, {
          path: '/qcys2017node/invest/add',
          name: 'nodeInvestAdd',
          component: nodeInvestAdd
        }, {
          path: '/qcys2017node/work',
          name: 'nodeWork',
          component: nodeWork
        }, {
          path: '/qcys2017node/work/add',
          name: 'nodeWorkAdd',
          component: nodeWorkAdd
        }, {
          path: '/qcys2017node/contact',
          component: nodeContact
        }, {
          path: '/qcys2017node/contact/add',
          name: 'nodeContactAdd',
          component: nodeContactAdd
        }, {
          path: '/qcys2017node/wechat',
          component: nodeWechat
        }, {
          path: '/qcys2017node/wechat/add',
          name: 'nodeWechatAdd',
          component: nodeWechatAdd
        }, {
          path: '/qcys2017node/about',
          component: nodeAbout
        }, {
          path: '/qcys2017node/about/add',
          name: 'nodeAboutAdd',
          component: nodeAboutAdd
        }
      ]
    },

  ]
})
