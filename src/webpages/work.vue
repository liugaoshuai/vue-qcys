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
                            p 标签：{{workDetailData.tag}}
                            p 出品人：{{workDetailData.producer}}
                            p 编剧：{{workDetailData.scenario}}
                            p 导演：{{workDetailData.director}}
                            p 制片人：{{workDetailData.filmer}}
                            p 首播时间：{{workDetailData.time}}
                        div.app-works-detail-a-msg-right
                            p 集数：{{workDetailData.num}}集
                            p 每集长度：{{workDetailData.length}}分钟                        
                            p 在线播放平台：{{workDetailData.platform}}                        
                            p 原著：{{workDetailData.original}}                        
                            p 作者：{{workDetailData.author}}                        
                            p 播出平台：{{workDetailData.broadcasting}}                        
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
                        li
                        li
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
