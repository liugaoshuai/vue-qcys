<template lang="pug">
div
    div.header(style='height: 120px; width: 100%; background: url("http://oumlc5t88.bkt.clouddn.com/%E9%A1%B6%E9%83%A8logo.jpg") center center no-repeat;')
    div.nav
        div.common.clearfix
            router-link(to='/web/index') 首页
            router-link(to='/web/work') 影视作品
            router-link(to='/web/wechat') 公众号精选
            router-link(to='/web/news') 新闻聚焦
            router-link(to='/web/invest') 投资者关系
            router-link(to='/web/about') 关于千乘
            router-link(to='/web/contact') 联系我们
            div.music
                //- <embed src="http://oumlc5t88.bkt.clouddn.com/S-01%20%E4%B8%BB%E9%A2%98%E6%9B%B2.mp3" autostart=true loop=true width=200 height=60>
                <audio controls="controls" height="100" width="60" autostart=true loop=true>
                    <source src="http://oumlc5t88.bkt.clouddn.com/S-01%20%E4%B8%BB%E9%A2%98%E6%9B%B2.mp3" type="audio/mp3" autostart=true loop=true/>
                    <embed height="100" width="100" src="http://oumlc5t88.bkt.clouddn.com/S-01%20%E4%B8%BB%E9%A2%98%E6%9B%B2.mp3" autostart=true loop=true/>
                </audio>
    router-view
    div.footer
    div.footer-top
        p 好戏连台
    div.footer-main
        div.common.clearfix
            div.footer-main-left
                p 联系我们
                    span.orange Contact Us
                p 千乘影视股份有限公司 MAHAYANA Media
                p 地址：浙江省杭州市拱墅区密渡桥路15号新世纪大厦
                p 电话：0571 85159721
                p E-mail：mahayanamedia@126.com
            div.footer-main-right
                div.footer-main-right-ewm(style='height: 120px; width: 120px; background: url("http://oumlc5t88.bkt.clouddn.com/%E5%BA%95%E9%83%A8%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg") center center no-repeat;')
                p 联系我们
                    span.orange Follow Us
                p 麻小酱煲剧
    div.footer-bottom
        p copyright © 2017 by MAHAYANA MEDIA. ALL Rights Reserved 千乘影视股份有限公司 保留所有权利     
</template>

