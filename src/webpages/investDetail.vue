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
                img.news-right-work.boxshadow(v-for="item in workData",:src="item.bigImg",@click="getWorkDetail(item)")
</template>

<script>
export default {
    data() {
        return {
            newsData: [],
            newsDetailData: {

            },
            workData: [],
        }
    },
    mounted: function () {
        this.getNews();
        this.getWork();
        if (this.$route.params.form) {
            this.newsDetailData = this.$route.params.form
        }
    },
    methods: {
        // 获取
        getNews: function () {
            var self = this;
            this.$http.get('http://localhost:8088/api/invest/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.newsData = res.data.data;
                }
            });
        },
        // 获取
        getWork: function (n) {
            var self = this;
            var s = 4;
            var n = n ? n : '1';
            this.$http.get("http://localhost:8088/api/work/get?n=" + n + "&s=" + s).then(function (res) {
                self.workData = res.data.data;
            });
        },
        getWorkDetail: function (item) {
            this.$router.push({ name: 'webWorkDetail', params: { form: item } })
        }
    }
}
</script>
