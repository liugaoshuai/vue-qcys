<template lang="pug">
    //- h1 #{title}
    div
        div.app-news.common.clearfix(v-show="!newsDetailShow")
            div.news-left
                div.news-left-item.clearfix(v-for="item in newsData")
                    div.news-left-item-imgDiv.boxshadow
                        img.news-left-item-img(style="height: 230px;width: 370px;background: #25232b;",:src='item.listImg')
                    div.news-left-item-conDiv
                        div.news-left-item-title {{item.title}}
                        div.news-left-item-subtitle
                            span.orange {{item.date | date-filter}}
                            span.news-left-item-subtitle-span 责任编辑：
                            span.orange 千乘影视
                        div.news-left-item-con {{item.about}}
                        a.orange 阅读全文
                    <router-link type="text" :to="{ name: 'webInvestDetail', params: {newsDetailData: item}}" class="router-box"></router-link>
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
                }
            });
        },
    }
}
</script>
