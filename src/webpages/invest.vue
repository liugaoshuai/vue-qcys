<template lang="pug">
    //- h1 #{title}
    div
        div.app-news.common.clearfix(v-show="!newsDetailShow")
            div.news-left
                div.news-left-item.clearfix(v-for="item in newsData")
                    div.news-left-item-imgDiv
                        img.news-left-item-img(style="height: 230px;width: 370px;background: #25232b;",:src='item.listImg')
                    div.news-left-item-conDiv
                        div.news-left-item-title {{item.title}}
                        div.news-left-item-subtitle
                            span.orange {{item.date}}
                            span.news-left-item-subtitle-span 责任编辑：
                            span.orange 千乘影视
                        div.news-left-item-con {{item.about}}
                        a.orange(@click="getDetail(item)") 阅读全文
            div.news-right
                div.news-right-new
                    h3 最新新闻
                    ul
                        li(v-for="item in newsData",@click="getDetail(item)")
                            div
                                img.news-right-new-img(style="height: 150px;width: 150px;background: #25232b;",:src='item.smallImg')
                            span {{item.title}}
        div.app-news.common.clearfix(v-show="newsDetailShow")
            div.news-left.news-left-detail
                img.news-left-headimg(style="width: 100%;background: #25232b;",:src="newsDetailData.topImg",v-if="newsDetailData.topImg")
                div.news-left-title {{newsDetailData.title}}
                div.news-left-subtitle
                    span.orange {{newsDetailData.date}}
                    span.news-left-subtitle-span 责任编辑：
                    span.orange 千乘影视
                div.news-left-con
                    div(v-html="newsDetailData.content")
                img.news-left-footimg(style="width: 100%;background: #25232b;",:src="newsDetailData.bottomImg",v-if="newsDetailData.bottomImg")
            div.news-right
                div.news-right-new
                    h3 最新新闻
                    ul
                        li(v-for="item in newsData",@click="getDetail(item)")
                            div
                                img.news-right-new-img(style="height: 150px;width: 150px;background: #25232b;",:src='item.smallImg')
                            span {{item.title}}
</template>

<script>
export default {
    data() {
        return {
            newsData: {

            },
            newsDetailData: {

            },
            newsDetailShow: false,
        }
    },
    mounted: function () {
        this.getNews();
    },
    methods: {
        // 获取
        getNews: function () {
            var self = this;
            this.$http.get('/api/invest/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.newsData = res.data.data;
                    console.log(self.newsData)
                }
            });
        },
        getDetail: function (item) {
            this.newsDetailData = item;
            this.newsDetailShow = true;
        }
    }
}
</script>
