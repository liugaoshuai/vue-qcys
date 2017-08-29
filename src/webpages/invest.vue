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
            div.news-right
</template>

<script>
export default {
    data() {
        return {
            newsData: [],
            newsDetailData: {

            },
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
       
        getDetail: function (item) {
                                    this.$router.push({ name: 'webInvestDetail', params: {form: item}})
        }
    }
}
</script>
