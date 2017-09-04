<template lang="pug">
    //- h1 #{title}
    div
        div.app-news.common.clearfix
            div.news-left.news-left-detail
                img.news-left-headimg(style="width: 100%;background: #25232b;",:src="newsDetailData.topImg",v-if="newsDetailData.topImg")
                div.news-left-title {{newsDetailData.title}}
                div.news-left-subtitle
                    span.orange {{newsDetailData.date | date-filter}}
                    span.news-left-subtitle-span 责任编辑：
                    span.orange 千乘影视
                div.news-left-con
                    div(v-html="newsDetailData.content")
                img.news-left-footimg(style="width: 100%;background: #25232b;",:src="newsDetailData.bottomImg",v-if="newsDetailData.bottomImg")
            div.news-right
                div.news-right-new
                    h3 最新新闻
                    ul
                        li(v-for="(item,index) in newsData",@click="getDetail(item)",v-if="index < 6")
                            div.boxshadow
                                img.news-right-new-img(style="height: 150px;width: 150px;background: #25232b;",:src='item.smallImg')
                            span {{item.title}}
</template>

<script>
export default {
    data() {
        return {
            newsData: [],
            newsType: [
                {
                    value: 1,
                    label: '新剧新鲜事',
                }, {
                    value: 2,
                    label: '娱乐星动向',
                }, {
                    value: 3,
                    label: '评论与专访',
                }, {
                    value: 4,
                    label: '行业新资讯',
                },
            ],
            newsDetailData: {

            },
        }
    },
    mounted: function () {
        this.getNews();
        if (this.$route.params.form) {
            this.newsDetailData = this.$route.params.form
        }
    },
    methods: {
        // 获取
        getNews: function () {
            var self = this;
            this.$http.get('/api/news/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.newsData = res.data.data;
                }
            });
        },
        // 获取
        getNewsType: function (type) {
            var self = this;
            this.$http.get('/api/news/get/type?type=' + type).then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.newsData = res.data.data;
                    self.newsDetailShow = false;
                }
            });
        },
        getDetail: function (item) {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            this.newsDetailData = item
            
        }
    }
}
</script>
