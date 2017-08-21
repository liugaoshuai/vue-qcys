<template lang="pug">
    //- h1 {{title}
    div
        div.app-works(v-show="!workDetailShow")
            div.common
                div.works-headimgDiv
                    div.works-headimg(style="height: 500px;background: #25232b;")
                div.works-list.clearfix
                    div.works-list-item.boxshadow(v-for="item in workData",@click="getDetail(item)")
                        img.works-list-item-img(style="height: 320px;background: #25232b;",:src='item.bigImg')
                        div.works-list-item-name.orange {{item.name}}
                        div.works-list-item-actor
                            span.orange 主演:
                            span {{item.starring}}
                        div.works-list-item-account
                            span.orange 剧情简介:
                            span {{item.introduction}}
        div.app-works-detail(v-show="workDetailShow")
            div.app-works-detail-bg
            div.common
                div.app-works-detail-a.clearfix
                    div.app-works-detail-a-img.boxshadow
                        img(style="height: 450px;",:src='workDetailData.bigImg')
                    div.app-works-detail-a-msg
                        h2.app-works-detail-a-msg-name {{workDetailData.name}}
                        div.app-works-detail-a-msg-right
                            p(v-if="workDetailData.tag") 标签：{{workDetailData.tag}}
                            p(v-if="workDetailData.producer") 出品人：{{workDetailData.producer}}
                            p(v-if="workDetailData.scenario") 编剧：{{workDetailData.scenario}}
                            p(v-if="workDetailData.director") 导演：{{workDetailData.director}}
                            p(v-if="workDetailData.filmer") 制片人：{{workDetailData.filmer}}
                            p(v-if="workDetailData.time") 首播时间：{{workDetailData.time | date-filter}}
                        div.app-works-detail-a-msg-right
                            p(v-if="workDetailData.num") 集数：{{workDetailData.num}}集
                            p(v-if="workDetailData.length") 每集长度：{{workDetailData.length}}分钟                        
                            p(v-if="workDetailData.platform") 在线播放平台：{{workDetailData.platform}}                        
                            p(v-if="workDetailData.original") 原著：{{workDetailData.original}}                        
                            p(v-if="workDetailData.author") 作者：{{workDetailData.author}}                        
                            p(v-if="workDetailData.broadcasting") 播出平台：{{workDetailData.broadcasting}}                        
                div.app-works-detail-b.clearfix
                    div.app-works-detail-b-left
                        h3.orange 剧情简介：
                        div.app-works-detail-b-left-con {{workDetailData.introduction}}
                    div.app-works-detail-b-right
                        h3.orange 主演：
                        ul
                            li.clearfix(v-for="item in workDetailData.actorData")
                                i.app-works-detail-b-right-img
                                div.app-works-detail-b-right-text
                                    p.orange {{item.name}}
                                    p.orange {{item.war}}
                                    p 饰 {{item.role}}
                                i.app-works-detail-b-right-img
                div.app-works-detail-c
                    h3.orange 视频：
                    ul.clearfix
                        li
                            a(:href="workDetailData.videoHref01",target="_blank")
                                img(style="height: 240px;",:src='workDetailData.videoUrl01')
                        li
                            a(:href="workDetailData.videoHref02",target="_blank")
                                img(style="height: 240px;",:src='workDetailData.videoUrl01')
                        li
                            a(:href="workDetailData.videoHref03",target="_blank")
                                img(style="height: 240px;",:src='workDetailData.videoUrl01')
                div.app-works-detail-c
                    h3.orange 剧照：
                    ul.clearfix
                        li
                            img(style="height: 240px;",:src='workDetailData.workImg01')
                        li
                            img(style="height: 240px;",:src='workDetailData.workImg02')
                        li
                            img(style="height: 240px;",:src='workDetailData.workImg03')
</template>

<script>
export default {
    data() {
        return {
            workData: {

            },
            workDetailData: {

            },
            workDetailShow: false,
        }
    },
    mounted: function () {
        this.getNews();
    },
    methods: {
        // 获取
        getNews: function () {
            var self = this;
            this.$http.get('/api/work/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.workData = res.data.data;
                    console.log(self.workData)
                }
            });
        },
        getDetail: function (item) {
            this.workDetailData = item;
            this.workDetailShow = true;
        }
    }
}
</script>
