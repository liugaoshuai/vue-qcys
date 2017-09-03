<template lang="pug">
    //- h1 {{title}
    div
        div.app-about-header
        div.app-about-item
            div.common.clearfix
                div.app-about-item-name 公司介绍
                div.app-about-item-content {{aboutData.gsjs}}
        div.app-about-a
            h2.app-about-title 影视作品
            ul.clearfix.common
                li(v-for="item in workData")    
                    img(:src="item.bigImg",@click="getWorkDetail(item)")

        div.app-about-b
            h2.app-about-title 发展战略
            ul
                li
                    div.app-about-b-title
                    p
            div.app-about-item
                div.common.clearfix
                    div.app-about-item-name 公司介绍
                    div.app-about-item-content {{aboutData.gsjs}}
            div.app-about-item
                div.common.clearfix
                    div.app-about-item-name 公司宗旨
                    div.app-about-item-content {{aboutData.gszz}}
            div.app-about-item
                div.common.clearfix
                    div.app-about-item-name 业务范围
                    div.app-about-item-content {{aboutData.ywfw}}
            div.app-about-item
                div.common.clearfix
                    div.app-about-item-name 公司团队
                    div.app-about-item-content {{aboutData.gstd}}
        div.app-about-c
            h2.app-about-title 荣誉奖项
            table.common( border="1", cellspacing="1", cellpadding="0")
                tr
                    th 时间
                    th 获奖作品
                    th 所获奖项
                    th 获奖单位
                tr(v-for="item in aboutTableList")
                    td {{item.date | date-filter}}
                    td {{item.name}}
                    td {{item.award}}
                    td {{item.bjdw}}
</template>

<script>
export default {
    data() {
        return {
            aboutData: {},
            aboutTableList: [],
            workData: [],
        }
    },
    mounted: function () {
        this.getAboutTable();
        this.getAbout();
        this.getWork();
    },
    methods: {
         // 获取
        getAboutTable: function () {
            var self = this;
            this.$http.get("/api/about/get").then(function (res) {
                self.aboutData = res.data.data[0];
            });
        },
        getAbout: function () {
            var self = this;
            this.$http.get('/api/about/table/get').then(function (res) {
                self.aboutTableList = res.data.data;
            });
        },
         // 获取
        getWork: function (n) {
            var self = this;
            var s = 8;
            var n = n ? n : '1';
            this.$http.get("/api/work/get?n=" + n + "&s=" + s).then(function (res) {
                self.workData = res.data.data;
            });
        },
       
        getWorkDetail: function (item) {
                                    this.$router.push({ name: 'webWorkDetail', params: {form: item}})
        }
    }
}
</script>
