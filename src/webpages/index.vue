<template lang="pug">
    //- h1 #{title}
    div.app
        div.slide
            transition-group(tag="ul",class="slide-ul" name="list")
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
                    li(v-for="item in workData",@click="getWorkDetail(item)")
                        img.news-left-item-img(:src='item.indexImg',style="height: 200px;width: 160px;")
        div.video
            div.video-box
                //- <iframe frameborder="0" width="800" height="320" src="https://v.qq.com/iframe/player.html?vid=l00201haat8&tiny=0&auto=0" allowfullscreen></iframe>
                <embed :src="indexData.video" allowFullScreen="true" quality="high" width="800" height="320" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
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
                    img.photo-a-top(:src='indexData.boxImg03',style="width: 400px; height: 600px;")
                    div.photo-a-bottom(style="width: 400px; height: 160px;background: rgba(0,0,0,0.3);position: absolute;left: 0;bottom: 0;padding: 20px;")
                        h3 {{indexData.boxTitle03}}
                        p {{indexData.boxText03}}
                div.photo-b.clearfix
                    div.photo-b-right(style="width: 320px; height: 300px;padding: 100px 60px 20px 20px;")
                        h3 {{indexData.boxTitle01}}
                        p {{indexData.boxText01}}
                    img.photo-b-left(:src='indexData.boxImg01',style="width: 480px; height: 300px;")
                div.photo-c.clearfix
                    img.photo-c-left(:src='indexData.boxImg02',style="width: 480px; height: 300px;")
                    div.photo-c-right(style="width: 320px; height: 300px;padding: 100px 20px 20px 60px;")
                        h3 {{indexData.boxTitle02}}
                        p {{indexData.boxText02}}
                div.photo-d.clearfix
                    div.photo-d-right(style="width: 480px; height: 300px;padding: 100px 60px 20px 20px;")
                        h3 {{indexData.boxTitle04}}
                        p {{indexData.boxText04}}
                    img.photo-d-left(:src='indexData.boxImg04',style="width: 720px; height: 300px;")
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
				if (this.currentIndex > 3 ) {
					this.currentIndex = 1
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
            this.$router.push({ name: 'webNewsDetail', params: { form: item } })
        },
        getWechatDetail: function (item) {
            this.$router.push({ name: 'webWechatDetail', params: { form: item } })
        },
        getWorkDetail: function (item) {
            this.$router.push({ name: 'webWorkDetail', params: { form: item } })
        }
    }
}
</script>
