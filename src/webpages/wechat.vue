<template lang="pug">
    //- h1 {{title}
    div
        div.app-wechat
            div.common.clearfix
                div.app-wechat-header(
                    :style="{background: 'url(http://ovdz4whc3.bkt.clouddn.com/%E5%85%AC%E4%BC%97%E5%8F%B7%E6%9C%80%E6%96%B0%E9%A1%B6%E9%83%A8%E5%9B%BE.jpg) no-repeat center'}"
                )
                div.app-wechat-left
                    div.app-wechat-item-a(v-if="wechatData01.length>0",@click="getDetail(wechatData01[0])")
                        img(style="height: 180px;width: 270px;",:src="wechatData01[0].img01")
                        h3.orange {{wechatData01[0].title}}
                        p.con {{wechatData01[0].about}}
                        p.orange.date {{wechatData01[0].date | date-filter}}
                    img.app-wechat-item-b(style="height: 340px;width: 580px;",:src="wechatData02[0].img02",v-if="wechatData02.length>0",@click="getDetail(wechatData02[0])")
                    img.app-wechat-item-b(style="height: 340px;width: 580px;",:src="wechatData02[1].img02",v-if="wechatData02.length>1",@click="getDetail(wechatData02[1])")
                    div.app-wechat-item-a.right(v-if="wechatData01.length>1",@click="getDetail(wechatData01[1])")
                        img(style="height: 180px;width: 270px;",:src="wechatData01[1].img01")
                        h3.orange {{wechatData01[1].title}}
                        p.con {{wechatData01[1].about}}
                        p.orange.date {{wechatData01[1].date | date-filter}}
                    div.app-wechat-item-a(v-if="wechatData01.length>2",@click="getDetail(wechatData01[2])")
                        img(style="height: 180px;width: 270px;",:src="wechatData01[2].img01")
                        h3.orange {{wechatData01[2].title}}
                        p.con {{wechatData01[2].about}}
                        p.orange.date {{wechatData01[2].date | date-filter}}
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
                        img(style="height: 270px;width: 270px;",src="http://ovdz4whc3.bkt.clouddn.com/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg")
                        p 阅读更多文章
                        p 请关注微信公众号
                            span.orange 麻小酱煲剧
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

    },
    methods: {
        autoPlay() {
            this.currentIndex++
            if (this.currentIndex > this.slideList.length) {
                this.currentIndex = 0
            }
        },
        // 获取
        getNews: function () {
            var self = this;
            this.$http.get('/api/wechat/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    var arr = res.data.data;
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].type == 1) {
                            self.wechatData01.push(arr[i]);
                        } else if (arr[i].type == 2) {
                            self.wechatData02.push(arr[i]);
                        } else {
                            self.wechatData03.push(arr[i]);
                        }
                    }
                }
            });
        },

        getDetail: function (item) {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            this.$router.push({ name: 'webWechatDetail', params: { form: item } })
        }
    }
}
</script>
