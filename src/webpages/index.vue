<template lang="pug">
    div.app
        div.slide
            transition-group(tag="ul",class="slide-ul clearfix" name="list")
                li(:key="1" v-show="1===currentIndex")
                    div(
                        style="height: 640px;width: 100%;",
                        :style="{background: 'url('+indexData.bannerImg01+') no-repeat center'}"
                    )
                li(:key="2" v-show="2===currentIndex")
                    div(
                        style="height: 640px;width: 100%;",
                        :style="{background: 'url('+indexData.bannerImg02+') no-repeat center'}"
                    )
                li(:key="3" v-show="3===currentIndex")
                    div(
                        style="height: 640px;width: 100%;",
                        :style="{background: 'url('+indexData.bannerImg03+') no-repeat center'}"
                    )
                li(:key="4" v-show="4===currentIndex")
                    div(
                        style="height: 640px;width: 100%;",
                        :style="{background: 'url('+indexData.bannerImg01+') no-repeat center'}"
                    )
                li(:key="5" v-show="5===currentIndex")
                    div(
                        style="height: 640px;width: 100%;",
                        :style="{background: 'url('+indexData.bannerImg02+') no-repeat center'}"
                    )
                li(:key="6" v-show="6===currentIndex")
                    div(
                        style="height: 640px;width: 100%;",
                        :style="{background: 'url('+indexData.bannerImg03+') no-repeat center'}"
                    )
        div.work
            ul.clearfix.common
                    li(v-for="(item,index) in workData",@click="getWorkDetail(item)",v-if="index<6")
                        img.news-left-item-img(:src='item.indexImg',style="height: 200px;width: 160px;")
        div.video.mobile(
                style='background: url("http://oupvnjvzs.bkt.clouddn.com/1623942879.jpg") center center no-repeat;'
            )
            div.video-box
                <iframe frameborder="0" width="800" height="320" :src="indexData.video" allowfullscreen></iframe>
        div.video.pc(
                style='background: url("http://oumlc5t88.bkt.clouddn.com/%E9%A6%96%E9%A1%B5%E8%A7%86%E9%A2%91%E8%83%8C%E6%99%AF%E7%B2%BE%E5%BD%A9%E7%89%87%E8%8A%B1.png") center center no-repeat;'
            )
            div.video-box
                <iframe frameborder="0" width="800" height="320" :src="indexData.video" allowfullscreen></iframe>
        div.news
            div.common.clearfix
                div.left
                    span 最新新闻
                    ul
                        li(v-for="(item,index) in newsData",v-if="index<2",@click="getNewsDetail(item)")
                            img.news-img(style="height: 120px;width: 200px;background: #25232b;",:src='item.indexImg')
                            p.news-nav {{item.title}}
                            p.news-con {{item.about}}
                div.right
                    span 公众号精选
                    ul
                        li(v-for="(item,index) in wechatData",v-if="index<2",@click="getWechatDetail(item)")
                            img.news-img(style="height: 120px;width: 200px;background: #25232b;",:src='item.img03')
                            p.news-nav {{item.title}}
                            p.news-con {{item.about}}
        div.photo
            div.common
                div.photo-a.clearfix(style="position: relative;")
                    div.photo-slide.clearfix
                        transition-group(tag="div",name="list",style="width:400px;height: 600px;")
                            img.photo-a-top(:src='indexData.boxImg03',style="width: 400px; height: 600px;",:key="0",v-show="0===slideIndex01")
                            img.photo-a-top(:src='indexData.boxImg07',style="width: 400px; height: 600px;",:key="1",v-show="1===slideIndex01")
                            img.photo-a-top(:src='indexData.boxImg11',style="width: 400px; height: 600px;",:key="2",v-show="2===slideIndex01")
                            img.photo-a-top(:src='indexData.boxImg15',style="width: 400px; height: 600px;",:key="3",v-show="3===slideIndex01",v-if="indexData.boxImg15")
                            img.photo-a-top(:src='indexData.boxImg19',style="width: 400px; height: 600px;",:key="4",v-show="4===slideIndex01",v-if="indexData.boxImg19")
                        i.photo-slide-right.iconfont(@click="back01") &#xe6a7;
                    div.photo-a-bottom(style="width: 400px; height: 160px;background: rgba(0,0,0,0.3);position: absolute;left: 0;bottom: 0;padding: 20px;")
                        h3 {{indexData.boxTitle03}}
                        p {{indexData.boxText03}}
                div.photo-b.clearfix
                    div.photo-b-right(style="width: 320px; height: 300px;padding: 100px 60px 20px 20px;")
                        h3 {{indexData.boxTitle01}}
                        p {{indexData.boxText01}}
                    div.photo-slide.clearfix
                        transition-group(tag="div",name="list",style="width:480px;height: 300px;")
                            img.photo-b-left(:src='indexData.boxImg01',style="width: 480px; height: 300px;",:key="0",v-show="0===slideIndex02")
                            img.photo-b-left(:src='indexData.boxImg05',style="width: 480px; height: 300px;",:key="1",v-show="1===slideIndex02")
                            img.photo-b-left(:src='indexData.boxImg09',style="width: 480px; height: 300px;",:key="2",v-show="2===slideIndex02")
                            img.photo-b-left(:src='indexData.boxImg13',style="width: 480px; height: 300px;",:key="3",v-show="3===slideIndex02",v-if="indexData.boxImg13")
                            img.photo-b-left(:src='indexData.boxImg17',style="width: 480px; height: 300px;",:key="4",v-show="4===slideIndex02",v-if="indexData.boxImg17")
                        i.photo-slide-right.iconfont(@click="back02") &#xe6a7;
                div.photo-c.clearfix
                    div.photo-slide.clearfix.photo-c-left
                        transition-group(tag="div",name="list",style="width:480px;height: 300px;")
                            img.photo-c-left(:src='indexData.boxImg02',style="width: 480px; height: 300px;",:key="0",v-show="0===slideIndex03")
                            img.photo-c-left(:src='indexData.boxImg06',style="width: 480px; height: 300px;",:key="1",v-show="1===slideIndex03")
                            img.photo-c-left(:src='indexData.boxImg10',style="width: 480px; height: 300px;",:key="2",v-show="2===slideIndex03")
                            img.photo-c-left(:src='indexData.boxImg14',style="width: 480px; height: 300px;",:key="3",v-show="3===slideIndex03",v-if="indexData.boxImg14")
                            img.photo-c-left(:src='indexData.boxImg18',style="width: 480px; height: 300px;",:key="4",v-show="4===slideIndex03",v-if="indexData.boxImg18")
                        i.photo-slide-right.iconfont(@click="back03") &#xe6a7;
                    div.photo-c-right(style="width: 320px; height: 300px;padding: 100px 20px 20px 60px;")
                        h3 {{indexData.boxTitle02}}
                        p {{indexData.boxText02}}
                div.photo-d.clearfix
                    div.photo-d-right(style="width: 480px; height: 300px;padding: 100px 60px 20px 20px;")
                        h3 {{indexData.boxTitle04}}
                        p {{indexData.boxText04}}
                    div.photo-slide.clearfix
                        transition-group(tag="div",name="list",style="width:720px;height: 300px;")
                            img.photo-d-left(:src='indexData.boxImg04',style="width: 720px; height: 300px;",:key="0",v-show="0===slideIndex04")
                            img.photo-d-left(:src='indexData.boxImg08',style="width: 720px; height: 300px;",:key="1",v-show="1===slideIndex04")
                            img.photo-d-left(:src='indexData.boxImg12',style="width: 720px; height: 300px;",:key="2",v-show="2===slideIndex04")
                            img.photo-d-left(:src='indexData.boxImg16',style="width: 720px; height: 300px;",:key="3",v-show="3===slideIndex04",v-if="indexData.boxImg16")
                            img.photo-d-left(:src='indexData.boxImg20',style="width: 720px; height: 300px;",:key="4",v-show="4===slideIndex04",v-if="indexData.boxImg20")
                        i.photo-slide-right.iconfont(@click="back04") &#xe6a7;
</template>

<script>
export default {
    data() {
        return {
            indexData: {
                bannerImg01: '',// 轮播图
                bannerImg02: '',// 轮播图
                bannerImg03: '',// 轮播图

                boxImg01: '',// 剧照图
                boxImg02: '',// 剧照图
                boxImg03: '',// 剧照图
                boxImg04: '',// 剧照图
                boxImg05: '',// 剧照图
                boxImg06: '',// 剧照图
                boxImg07: '',// 剧照图
                boxImg08: '',// 剧照图
                boxImg09: '',// 剧照图
                boxImg10: '',// 剧照图
                boxImg11: '',// 剧照图
                boxImg12: '',// 剧照图
                boxImg13: '',// 剧照图
                boxImg14: '',// 剧照图
                boxImg15: '',// 剧照图
                boxImg16: '',// 剧照图
                boxImg17: '',// 剧照图
                boxImg18: '',// 剧照图
                boxImg19: '',// 剧照图
                boxImg20: '',// 剧照图

                boxTitle01: '',
                boxTitle02: '',
                boxTitle03: '',
                boxTitle04: '',
                boxText01: '',
                boxText02: '',
                boxText03: '',
                boxText04: '',

                music: '',// 音乐
                video: '',// 视频   
                title: 'index'
            },
            currentIndex: 1,
            timer: '',
            newsData: [],
            wechatData: [],
            workData: [],
            slideIndex01: 0,
            slideIndex02: 0,
            slideIndex03: 0,
            slideIndex04: 0,
            


        }
    },
    mounted: function () {
        this.getIndex();
        this.$nextTick(() => {
            this.timer = setInterval(() => {
                this.autoPlay()
            }, 5000)
        })

    },
    methods: {
        autoPlay() {
            this.currentIndex++
            if (this.currentIndex > 3) {
                this.currentIndex = 1
            }
        },
        go01: function () {
            console.log('go')
            this.slideIndex01++
            if (this.slideIndex01 > 2) {
                this.slideIndex01 = 0
            }
        },
        back01: function () {
            console.log('back')
            this.slideIndex01--
            if (this.slideIndex01 < 0) {
                this.slideIndex01 = 4
            }
        },
        go02: function () {
            console.log('go')
            this.slideIndex02++
            if (this.slideIndex02 > 2) {
                this.slideIndex02 = 0
            }
        },
        back02: function () {
            console.log('back')
            this.slideIndex02--
            if (this.slideIndex02 < 0) {
                this.slideIndex02 = 4
            }
        },
        go03: function () {
            console.log('go')
            this.slideIndex03++
            if (this.slideIndex03 > 2) {
                this.slideIndex03 = 0
            }
        },
        back03: function () {
            console.log('back')
            this.slideIndex03--
            if (this.slideIndex03 < 0) {
                this.slideIndex03 = 4
            }
        },
        go04: function () {
            console.log('go')
            this.slideIndex04++
            if (this.slideIndex04 > 2) {
                this.slideIndex04 = 0
            }
        },
        back04: function () {
            console.log('back')
            this.slideIndex04--
            if (this.slideIndex04 < 0) {
                this.slideIndex04 = 4
            }
        },
        // 获取
        getIndex: function () {
            var self = this;
            this.$http.get('/api/index/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.indexData = res.data.data[0];
                }
            });
            this.$http.get('/api/news/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.newsData = res.data.data;
                }
            });
            this.$http.get('/api/wechat/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.wechatData = res.data.data;
                }
            });
            this.$http.get('/api/work/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.workData = res.data.data;
                }
            });


        },
        getNewsDetail: function (item) {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            this.$router.push({ name: 'webNewsDetail', params: { form: item } })
        },
        getWechatDetail: function (item) {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            this.$router.push({ name: 'webWechatDetail', params: { form: item } })
        },
        getWorkDetail: function (item) {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
            this.$router.push({ name: 'webWorkDetail', params: { form: item } })
        }
    }
}
</script>
