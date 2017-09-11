<template lang="pug">
    //- h1 {{title}
    div
        div.app-contact
        div.app-contact-header(
                :style="{background: 'url(http://oumlc5t88.bkt.clouddn.com/%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC%E9%A1%B6%E5%9B%BE4.jpg) no-repeat center'}"
            )
        div.app-contact-con.common.clearfix
            h3 联系我们
            div.app-contact-con-nav
                ul.clearfix
                    li(v-for="(item,index) in contactData")
                        a(@click="contactActive = index",v-bind:class="{active: contactActive == index}") {{item.name}}
                        div.app-contact-con-post.clearfix(v-show="contactActive == index")
                            div.app-contact-con-post-div(v-html="item.content")
                            div.app-contact-con-post-div-topline
                            div.app-contact-con-post-div-bottomline
                
            h3 联系方式
            div.app-contact-con-tel
                p 电话：0571-85159721
                p 传真：0571-85159741
                p 官方微博：@千乘影视
                p 官方微信：mahayana01
                p 邮箱：mahayanamedia@126.com
                p 地址：浙江省杭州市拱墅区觅渡桥路15号新世纪大厦16层
</template>

<script>
export default {
    data() {
        return {
            contactData: [],
            contactActive: 0,
        }
    },
    mounted: function () {
        this.getContact();
    },
    methods: {
        // 获取
        getContact: function () {
            var self = this;
            this.$http.get('/api/contact/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.contactData = res.data.data;
                }
            });
        },
    }
}
</script>
