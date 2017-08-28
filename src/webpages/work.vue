<template lang="pug">
    //- h1 {{title}
    div
        div.app-works
            div.common
                div.works-headimgDiv
                    div.works-headimg(style="height: 500px;background: #25232b;")
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
</template>

<script>
export default {
    data() {
        return {
            workData: {

            },
            workDetailData: {

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
            this.$http.get('/api/work/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.workData = res.data.data;
                    console.log(self.workData)
                }
            });
        },
        getDetail: function (item) {
            this.$router.push({ name: 'webWorkDetail', params: { form: item } })
        }
    }
}
</script>
