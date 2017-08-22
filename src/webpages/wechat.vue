<template lang="pug">
    //- h1 {{title}
    div
        div.app-wechat(v-show="!wechatDetailShow")
            div.common.clearfix
                div.app-wechat-header
                div.app-wechat-left
                    div.app-wechat-item-a(v-if="wechatData01.length>0",@click="getDetail(wechatData01[0])")
                        img(style="height: 180px;width: 270px;",:src="wechatData01[0].img01")
                        h3.orange {{wechatData01[0].title}}
                        p.con {{wechatData01[0].about}}
                        p.orange.date {{wechatData01[0].date | date-filter}}
                    img.app-wechat-item-b(style="height: 340px;width: 580px;",:src="wechatData02[0].img02",v-if="wechatData02.length>0",@click="getDetail(wechatData02[0])")
                    img.app-wechat-item-b(style="height: 340px;width: 580px;",:src="wechatData02[1].img02",v-if="wechatData02.length>1",@click="getDetail(wechatData02[1])")
                    div.app-wechat-item-a.right(v-if="wechatData01.length>1")
                        img(style="height: 180px;width: 270px;",:src="wechatData01[1].img01",@click="getDetail(wechatData01[1])")
                        h3.orange {{wechatData01[1].title}}
                        p.con {{wechatData01[1].about}}
                        p.orange.date {{wechatData01[1].date | date-filter}}
                    div.app-wechat-item-a(v-if="wechatData01.length>2")
                        img(style="height: 180px;width: 270px;",:src="wechatData01[2].img01",@click="getDetail(wechatData01[2])")
                        h3.orange {{wechatData01[0].title}}
                        p.con {{wechatData01[0].about}}
                        p.orange.date {{wechatData01[0].date | date-filter}}
                    img.app-wechat-item-b(style="height: 340px;width: 580px;",:src="wechatData02[2].img02",v-if="wechatData02.length>2",@click="getDetail(wechatData02[2])")
                div.app-wechat-right
                    div.app-wechat-right-item
                        img.app-wechat-right-item-img(style="height: 180px;width: 270px;",:src="wechatData03[0].img01")
                        ul
                            li(v-for="item in wechatData03",@click="getDetail(item)")
                                h3.orange {{item.title}}
                                p.con {{item.about}}
                                p.orange.date {{item.date | date-filter}}
                    div.app-wechat-right-item-ewm
                        img
                        p Follow Us
                        p 联系我们
        div.app-wechat-detail(v-show="wechatDetailShow")
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
                        img
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
            wechatDetailShow: false,
        }
    },
    mounted: function () {
        this.getNews();
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
            this.wechatDetailData = item;
            this.wechatDetailShow = true;
        }
    }
}
</script>
