<template>
    <div id="news">
        <h2>投资者关系-新增</h2>
        <el-form :model="NEWS_ADD_FORM"
                 label-width="120px">
            <el-form-item label="文章标题">
                <el-input v-model="NEWS_ADD_FORM.title"></el-input>
            </el-form-item>
            <el-form-item label="文章简介">
                <el-input v-model="NEWS_ADD_FORM.about"></el-input>
            </el-form-item>
            <el-form-item label="发布日期">
                <el-date-picker type="date"
                                placeholder="选择日期"
                                v-model="NEWS_ADD_FORM.date"
                                style="width: 200px;"></el-date-picker>
            </el-form-item>
            <el-form-item label="文章内容">
                <quill-editor v-model="NEWS_ADD_FORM.content"></quill-editor>
            </el-form-item>
            <el-form-item label="头部图(740*300)">
                <el-input v-model="NEWS_ADD_FORM.topImg"></el-input>
            </el-form-item>
            <el-form-item label="尾部图(740*200)">
                <el-input v-model="NEWS_ADD_FORM.bottomImg"></el-input>
            </el-form-item>
            <el-form-item label="列表图(370*230)">
                <el-input v-model="NEWS_ADD_FORM.listImg"></el-input>
            </el-form-item>
            <el-form-item label="缩略图(150*150)">
                <el-input v-model="NEWS_ADD_FORM.smallImg"></el-input>
            </el-form-item>
            <el-form-item label="权重指数">
                <el-input v-model="NEWS_ADD_FORM.index"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                           @click="addNews">立即创建</el-button>
                <el-button @click="$router.push('/node/invest')">取消</el-button>
            </el-form-item>
        </el-form>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            NEWS_ADD_FORM: {
                title: '',// 标题
                index: '',// 权重
                about: '',// 简介
                date: '',// 日期
                type: '',// 类型
                content: '',// 内容
                topImg: '',// 顶部
                bottomImg: '',// 底部
                listImg: '',// 列表
                smallImg: '',// 缩略
                indexImg: '',// 首页
            }
        }
    },
    mounted: function () {
        if (this.$route.params.form) {
            for (var key in this.NEWS_ADD_FORM) {
                if (this.$route.params.form[key]) {
                    this.NEWS_ADD_FORM[key] = this.$route.params.form[key];
                }
            }
        }
    },
    methods: {
        // 新增新闻
        addNews: function () {
            var self = this;
            if (self.NEWS_ADD_FORM.date) {
                //时间转换
            }
            var params = {
                form: self.NEWS_ADD_FORM,
            };
            this.$http.post('/api/invest/create', params).then(function (res) {
                if (res.data.code == 0) {
                    self.$message({
                        type: 'success',
                        message: '添加成功!'
                    });
                    self.$router.push('/node/invest')
                }
            });

        },

    }
}
</script>
