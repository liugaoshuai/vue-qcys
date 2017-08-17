<template lang="pug">
div
    div.header 1920x130
    div.nav
        div.common.clearfix
            router-link(to='/web/index') 首页
            router-link(to='/web/index') 影视作品
            router-link(to='/web/index') 公众号精选
            router-link(to='/web/news') 新闻聚集
            router-link(to='/web/invest') 投资者关系
            router-link(to='/web/index') 关于千乘
            router-link(to='/web/index') 联系我们
            div.music
                <embed class="" autoplay="true" src="http://oumlc5t88.bkt.clouddn.com/%E9%A3%8E%E4%B8%AD%E8%8A%AD%E8%95%BE+Mix003+MMM.mp3"  width="200" height="60" />
    router-view
    div.footer
    div.footer-top
        p 和千乘影视在一起煲剧，分享最新行业资讯。
    div.footer-main
        div.common
            div.footer-main-left
                p 联系我们
                    span.orange Contact Us
                p 千乘影视股份有限公司 MAHAYANA Media
                p 地址：浙江省杭州市拱墅区密渡桥路15号新世纪大厦
                p 电话：0571 85159721
                p E-mail：240659227@qq.com
            div.footer-main-right
                div.footer-main-right-ewm
                p 联系我们
                    span.orange Follow Us
                p 麻小酱煲剧
    div.footer-bottom
        p copyright © 2017 by MAHAYANA MEDIA. ALL Rights Reserved 千乘影视股份有限公司 保留所有权利     
</template>

