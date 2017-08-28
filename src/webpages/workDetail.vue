<template lang="pug">
    //- h1 {{title}
    div
        div.app-works-detail
            div.app-works-detail-bg
            div.common
                div.app-works-detail-a.clearfix
                    div.app-works-detail-a-img.boxshadow
                        img(style="height: 450px;",:src='workDetailData.bigImg')
                    div.app-works-detail-a-msg
                        h2.app-works-detail-a-msg-name {{workDetailData.name}}
                        div.app-works-detail-a-msg-left.app-works-detail-a-msg-item
                            p(v-if="workDetailData.tag") 标签：{{workDetailData.tag}}
                            p(v-if="workDetailData.producer") 出品人：{{workDetailData.producer}}
                            p(v-if="workDetailData.scenario") 编剧：{{workDetailData.scenario}}
                            p(v-if="workDetailData.starring") 主演：{{workDetailData.starring}}
                            p(v-if="workDetailData.director") 导演：{{workDetailData.director}}
                            p(v-if="workDetailData.filmer") 制片人：{{workDetailData.filmer}}
                        div.app-works-detail-a-msg-right.app-works-detail-a-msg-item
                            p(v-if="workDetailData.time") 首播时间：{{workDetailData.time | date-filter}}
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
                            li.clearfix(v-if="workDetailData.starName01")
                                img.app-works-detail-b-right-img(style="height: 60px;width:60px;",:src='workDetailData.starImg01')
                                div.app-works-detail-b-right-text
                                    p.orange {{workDetailData.starName01}}
                                    p 饰 {{workDetailData.starRole01}}
                            li.clearfix(v-if="workDetailData.starName02")
                                img.app-works-detail-b-right-img(style="height: 60px;width:60px;",:src='workDetailData.starImg02')
                                div.app-works-detail-b-right-text
                                    p.orange {{workDetailData.starName02}}
                                    p 饰 {{workDetailData.starRole02}}
                            li.clearfix(v-if="workDetailData.starName03")
                                img.app-works-detail-b-right-img(style="height: 60px;width:60px;",:src='workDetailData.starImg03')
                                div.app-works-detail-b-right-text
                                    p.orange {{workDetailData.starName03}}
                                    p 饰 {{workDetailData.starRole03}}
                            li.clearfix(v-if="workDetailData.starName04")
                                img.app-works-detail-b-right-img(style="height: 60px;width:60px;",:src='workDetailData.starImg04')
                                div.app-works-detail-b-right-text
                                    p.orange {{workDetailData.starName04}}
                                    p 饰 {{workDetailData.starRole04}}
                            li.clearfix(v-if="workDetailData.starName05")
                                img.app-works-detail-b-right-img(style="height: 60px;width:60px;",:src='workDetailData.starImg05')
                                div.app-works-detail-b-right-text
                                    p.orange {{workDetailData.starName05}}
                                    p 饰 {{workDetailData.starRole05}}
                            li.clearfix(v-if="workDetailData.starName06")
                                img.app-works-detail-b-right-img(style="height: 60px;width:60px;",:src='workDetailData.starImg06')
                                div.app-works-detail-b-right-text
                                    p.orange {{workDetailData.starName06}}
                                    p 饰 {{workDetailData.starRole06}}
                            li.clearfix(v-if="workDetailData.starName07")
                                img.app-works-detail-b-right-img(style="height: 60px;width:60px;",:src='workDetailData.starImg07')
                                div.app-works-detail-b-right-text
                                    p.orange {{workDetailData.starName07}}
                                    p 饰 {{workDetailData.starRole07}}
                            li.clearfix(v-if="workDetailData.starName08")
                                img.app-works-detail-b-right-img(style="height: 60px;width:60px;",:src='workDetailData.starImg08')
                                div.app-works-detail-b-right-text
                                    p.orange {{workDetailData.starName08}}
                                    p 饰 {{workDetailData.starRole08}}
                div.app-works-detail-c(v-if="workDetailData.videoUrl01 || workDetailData.videoUrl02 || workDetailData.videoUrl03")
                    h3.orange 视频：
                    ul.clearfix
                        li(v-if="workDetailData.videoUrl01")
                            a(:href="workDetailData.videoHref01",target="_blank")
                                img(style="height: 240px;",:src='workDetailData.videoUrl01')
                        li(v-if="workDetailData.videoUrl02")
                            a(:href="workDetailData.videoHref02",target="_blank")
                                img(style="height: 240px;",:src='workDetailData.videoUrl02')
                        li(v-if="workDetailData.videoUrl03")
                            a(:href="workDetailData.videoHref03",target="_blank")
                                img(style="height: 240px;",:src='workDetailData.videoUrl03')
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
        }
    },
    mounted: function () {
        this.getNews();
        if (this.$route.params.form) {
            this.workDetailData = this.$route.params.form
        }
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
            this.$router.push({ name: 'webWorkDetail', params: { form: item } })
        }
    }
}
</script>
