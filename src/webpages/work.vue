<template lang="pug">
    //- h1 {{title}
    div
        div.app-works
            div.common
                div.works-headimgDiv.boxshadow
                    transition-group(tag="ul",class="slide-ul" name="list")
                        li(:key="1" v-show="1===currentIndex")
                            div(
                                style="height: 450px;width: 100%;",
                                :style="{background: 'url('+wechatImgData.bannerImg01+') no-repeat center'}"
                            )
                        li(:key="2" v-show="2===currentIndex")
                            div(
                                style="height: 450px;width: 100%;",
                                :style="{background: 'url('+wechatImgData.bannerImg02+') no-repeat center'}"
                            )
                        li(:key="3" v-show="3===currentIndex")
                            div(
                                style="height: 450px;width: 100%;",
                                :style="{background: 'url('+wechatImgData.bannerImg03+') no-repeat center'}"
                            )
                        li(:key="4" v-show="4===currentIndex")
                            div(
                                style="height: 450px;width: 100%;",
                                :style="{background: 'url('+wechatImgData.bannerImg01+') no-repeat center'}"
                            )
                        li(:key="5" v-show="5===currentIndex")
                            div(
                                style="height: 450px;width: 100%;",
                                :style="{background: 'url('+wechatImgData.bannerImg02+') no-repeat center'}"
                            )
                        li(:key="6" v-show="6===currentIndex")
                            div(
                                style="height: 450px;width: 100%;",
                                :style="{background: 'url('+wechatImgData.bannerImg03+') no-repeat center'}"
                            )
                div.works-list.clearfix
                    div.works-list-item.boxshadow(v-for="item in workData",@click="getDetail(item)")
                        img.works-list-item-img(style="height: 320px;background: #25232b;",:src='item.bigImg')
                        div.works-list-item-name.orange {{item.name}}
                        div.works-list-item-actor
                            span.orange 主演:
                            span {{item.starring}}
                        div.works-list-item-account
                            span.orange 剧情简介:
                            span {{item.introduction}}
                el-pagination(@current-change="getNews",:page-size="8",layout="total, prev, pager, next",:total="workPage.length",style="text-align: center;padding-bottom: 20px;")
</template>

<script>
export default {
    data() {
        return {
            workData: [],
            workDetailData: {

            },
            wechatImgData: {
                bannerImg01: '',
                bannerImg02: '',
                bannerImg03: '',

            },
            currentIndex: 1,
            timer: '',
            workPage:{}
        }
    },
    mounted: function () {
        this.getNews();
        this.getNewsImg();
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 5000)
        })
    },
    methods: {
        autoPlay: function () {
            this.currentIndex++
            if (this.currentIndex > 3) {
                this.currentIndex = 1
            }
        },
        // 获取
        getNews: function (n) {
            var self = this;
            var s = 8;
            var n = n ? n : '1';
            this.$http.get("/api/work/get?n=" + n + "&s=" + s + "&index=true").then(function (res) {
                self.workData = res.data.data;
                self.workPage = res.data.page;
            });
        },
        getNewsImg: function () {
            var self = this;
            this.$http.get('/api/wechatimg/get').then(function (res) {
                self.wechatImgData = res.data.data[0];
            });
        },
        getDetail: function (item) {
            this.$router.push({ name: 'webWorkDetail', params: { form: item } })
        }
    }
}
</script>
