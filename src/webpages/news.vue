<template lang="pug">
    //- h1 #{title}
    div
        div.app-news.common.clearfix
            div.news-left
                div.news-left-item.clearfix(v-for="item in newsIndexData",@click="getDetail(item)")
                    div.news-left-item-imgDiv.boxshadow
                        img.news-left-item-img(style="height: 230px;width: 370px;background: #25232b;",:src='item.listImg')
                    div.news-left-item-conDiv
                        div.news-left-item-title {{item.title}}
                        div.news-left-item-subtitle
                            span.orange {{item.date | date-filter}}
                            span.news-left-item-subtitle-span 责任编辑：
                            span.orange 千乘影视
                        div.news-left-item-con {{item.about}}
                        a.orange(@click="") 阅读全文
                el-pagination(@current-change="getNewsIndex",:page-size="5",layout="total, prev, pager, next",:total="newsPage.length",style="text-align: center;padding-top: 20px;")
            div.news-right
                div.news-right-cla
                    h3 新闻分类
                    ul
                        li.news-right-cla-li(v-for='item in newsType',@click="getNewsType(item.value)")
                            i.iconfont &#xe647;
                            a {{item.label}}
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
            newsIndexData: [],
                        newsPage:{},
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
        this.getNewsIndex();
    },
    methods: {
        // 获取
        getNews: function (n) {
            var self = this;
            var s = 6;
            var n = n ? n : '1';
            this.$http.get("/api/news/get?n=" + n + "&s=" + s).then(function (res) {
                self.newsData = res.data.data;
                document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            });
        },
        // 获取
        getNewsIndex: function (n) {
            var self = this;
            var s = 5;
            var n = n ? n : '1';
            this.$http.get("/api/news/get?n=" + n + "&s=" + s + "&index=true").then(function (res) {
                self.newsIndexData = res.data.data;
                self.newsPage = res.data.page;
                document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            });
        },
        // 获取
        getNewsType: function (type) {
            var self = this;
            var s = 5;
            var t = type;
            var n = n ? n : '1';
            this.$http.get("/api/news/get?n=" + n + "&s=" + s + "&t=" + t).then(function (res) {
                self.newsIndexData = res.data.data;
                self.newsPage = res.data.page;
                document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            });
        },
        getDetail: function (item) {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
                                    this.$router.push({ name: 'webNewsDetail', params: {form: item}})
        }
    }
}
</script>
