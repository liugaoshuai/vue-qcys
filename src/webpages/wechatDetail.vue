<template lang="pug">
    //- h1 {{title}
    div
        div.app-wechat-detail
            div.common.clearfix
                div.app-wechat-left
                    div.news-left-title {{wechatDetailData.title}}
                    div.news-left-subtitle
                        span.orange {{wechatDetailData.date | date-filter}}
                        span.news-left-subtitle-span 责任编辑：
                        span.orange 千乘影视
                    div.news-left-con
                        div(v-html="wechatDetailData.content")
                div.app-wechat-right
                    div.app-wechat-right-item
                        img.app-wechat-right-item-img(style="height: 180px;width: 270px;",:src="wechatData03[0].img01")
                        ul
                            li(v-for="item in wechatData03",@click="getDetail(item)")
                                h3.orange {{item.title}}
                                p.con {{item.about}}
                                p.orange.date {{item.date | date-filter}}
                    div.app-wechat-right-item-ewm
                        img(style="height: 270px;width: 270px;",src="http://ovdz4whc3.bkt.clouddn.com/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg")
                        p Follow Us
                        p 联系我们
</template>

<script>
export default {
    data() {
        return {
            wechatData01: [],
            wechatData02: [],
            wechatData03: [],
            wechatDetailData: {

            },
        }
    },
    mounted: function () {
        this.getNews();
        if (this.$route.params.form) {
            this.wechatDetailData = this.$route.params.form
        }
    },
    methods: {
        // 获取
        getNews: function () {
            var self = this;
            this.$http.get('/api/wechat/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    var arr = res.data.data;
                    for(var i=0;i<arr.length;i++){
                        if(arr[i].type == 1){
                            self.wechatData01.push(arr[i]);
                        }else if(arr[i].type == 2){
                            self.wechatData02.push(arr[i]);
                        }else{
                            self.wechatData03.push(arr[i]);
                        }
                    }
                    console.log(self.wechatData02)

                }
            });
        },
        getDetail: function (item) {
             this.wechatDetailData = item
        }
    }
}
</script>
