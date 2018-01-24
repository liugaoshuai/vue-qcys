<template lang="pug">
    //- h1 #{title}
    div
        div.app-news.common.clearfix
            div.news-left
                div.news-left-item.clearfix(v-for="item in newsData",@click="getDetail(item)")
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
                el-pagination(@current-change="getNews",:page-size="5",layout="total, prev, pager, next",:total="newsPage.length",style="text-align: center;padding-top: 20px;")
            div.news-right
                img.news-right-work(v-for="item in workData",:src="item.bigImg",@click="getWorkDetail(item)")
</template>

<script>
export default {
    data() {
        return {
            newsData: [],
            newsPage: {},
            newsDetailData: {

            },
            workData: [],
        }
    },
    mounted: function () {
        this.getNews();
        this.getWork();
    },
    methods: {
        // 获取
        getNews: function (n) {
            var self = this;
            var s = 5;
            var n = n ? n : '1';
            this.$http.get("/api/invest/get?n=" + n + "&s=" + s).then(function (res) {
                self.newsData = res.data.data;
                self.newsPage = res.data.page;
                document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            });
        },
        // 获取
        getWork: function (n) {
            var self = this;
            var s = 4;
            var n = n ? n : '1';
            this.$http.get("/api/work/get?n=" + n + "&s=" + s).then(function (res) {
                self.workData = res.data.data;
            });
        },
       
        getDetail: function (item) {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
                                    this.$router.push({ name: 'webInvestDetail', params: {form: item}})
        },
        getWorkDetail: function (item) {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
                                    this.$router.push({ name: 'webWorkDetail', params: {form: item}})
        }
    }
}
</script>
