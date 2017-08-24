<template lang="pug">
    //- h1 #{title}
    div.app
        div.slide
            div(
                style="height: 640px;width: 100%;",
                :style="{background: 'url('+indexData.bannerImg01+') no-repeat center'}"
            )
        div.work
            ul.clearfix.common
                    li 
                        img.news-left-item-img(:src='indexData.workImg01',style="height: 200px;width: 160px;")
                    li 
                        img.news-left-item-img(:src='indexData.workImg02',style="height: 200px;width: 160px;")
                    li 
                        img.news-left-item-img(:src='indexData.workImg03',style="height: 200px;width: 160px;")
                    li 
                        img.news-left-item-img(:src='indexData.workImg04',style="height: 200px;width: 160px;")
                    li 
                        img.news-left-item-img(:src='indexData.workImg05',style="height: 200px;width: 160px;")
                    li 
                        img.news-left-item-img(:src='indexData.workImg06',style="height: 200px;width: 160px;")
        div.video
            div.video-box
                //- <iframe frameborder="0" width="800" height="320" src="https://v.qq.com/iframe/player.html?vid=l00201haat8&tiny=0&auto=0" allowfullscreen></iframe>
                <embed :src="indexData.video" allowFullScreen="true" quality="high" width="800" height="320" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
        div.news
            div.common.clearfix
                div.left
                    span 最新新闻
                    ul
                        li(v-for="(item,index) in newsData",v-if="index<2")
                            img.news-img(style="height: 120px;width: 200px;background: #25232b;",:src='item.indexImg')
                            p.news-nav {{item.title}}
                            p.news-con {{item.about}}
                div.right
                    span 公众号精选
                    ul
                        li(v-for="(item,index) in newsData",v-if="index<2")
                            img.news-img(style="height: 120px;width: 200px;background: #25232b;",:src='item.indexImg')
                            p.news-nav {{item.title}}
                            p.news-con {{item.about}}
        div.photo
            div.common
                div.photo-a.clearfix(style="position: relative;")
                    img.photo-a-top(:src='indexData.boxImg03',style="width: 400px; height: 600px;")
                    div.photo-c-right(style="width: 400px; height: 160px;background: rgba(0,0,0,0.3);position: absolute;left: 0;bottom: 0;padding: 20px;")
                        h3 {{indexData.boxTitle03}}
                        p {{indexData.boxText03}}
                div.photo-b.clearfix
                    div.photo-b-right(style="width: 320px; height: 300px;background: #fff;padding: 20px;")
                        h3 {{indexData.boxTitle01}}
                        p {{indexData.boxText01}}
                    img.photo-b-left(:src='indexData.boxImg01',style="width: 480px; height: 300px;")
                div.photo-c.clearfix
                    img.photo-c-left(:src='indexData.boxImg02',style="width: 480px; height: 300px;")
                    div.photo-c-right(style="width: 320px; height: 300px;background: #fff;padding: 20px;")
                        h3 {{indexData.boxTitle02}}
                        p {{indexData.boxText02}}
                div.photo-d.clearfix
                    div.photo-d-right(style="width: 480px; height: 300px;background: #fff;padding: 20px;")
                        h3 {{indexData.boxTitle04}}
                        p {{indexData.boxText04}}
                    img.photo-d-left(:src='indexData.boxImg04',style="width: 720px; height: 300px;")
</template>

<script>
export default {
    data() {
        return {
            indexData: {
                bannerImg01: '',// 轮播图
                bannerImg02: '',// 轮播图
                bannerImg03: '',// 轮播图

                workImg01: '',// 作品图
                workImg02: '',// 作品图
                workImg03: '',// 作品图
                workImg04: '',// 作品图
                workImg05: '',// 作品图
                workImg06: '',// 作品图

                boxImg01: '',// 剧照图
                boxImg02: '',// 剧照图
                boxImg03: '',// 剧照图
                boxImg04: '',// 剧照图

                boxTitle01: '',
                boxTitle02: '',
                boxTitle03: '',
                boxTitle04: '',
                boxText01: '',
                boxText02: '',
                boxText03: '',
                boxText04: '',

                music: '',// 音乐
                video: '',// 视频   
                title: 'index'
            },
            newsData: [],

        }
    },
    mounted: function () {
        this.getIndex();
    },
    methods: {
        // 获取
        getIndex: function () {
            var self = this;
            this.$http.get('/api/index/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.indexData = res.data.data[0];
                }
            });
            this.$http.get('/api/news/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.newsData = res.data.data;
                }
            });
            
        },
    }
}
</script>
