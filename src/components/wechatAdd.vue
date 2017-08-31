<template>
    <div id="wechat">
        <h2微信公众号-新增</h2>
            <el-form :model="WECHAT_ADD_FORM"
                     label-width="120px">
                <el-form-item label="文章标题">
                    <el-input v-model="WECHAT_ADD_FORM.title"></el-input>
                </el-form-item>
                <el-form-item label="文章简介">
                    <el-input v-model="WECHAT_ADD_FORM.about"></el-input>
                </el-form-item>
                <el-form-item label="文章类型">
                    <el-select v-model="WECHAT_ADD_FORM.type"
                               placeholder="请选择文章类型">
                        <el-option v-for="item in WECHAT_TYPE"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="发布日期">
                    <el-date-picker type="date"
                                    placeholder="选择日期"
                                    v-model="WECHAT_ADD_FORM.date"
                                    style="width: 200px;"></el-date-picker>
    
                </el-form-item>
                <el-form-item label="文章内容">
                    <vue-html5-editor :content="WECHAT_ADD_FORM.content"
                                      :height="500"
                                      @change="updateData"></vue-html5-editor>
                </el-form-item>
                <el-form-item label="图文类型图(270x180)">
                    <el-input v-model="WECHAT_ADD_FORM.img01"></el-input>
                </el-form-item>
                <el-form-item label="大图类型图(580x340)">
                    <el-input v-model="WECHAT_ADD_FORM.img02"></el-input>
                </el-form-item>
                <el-form-item label="首页图(200x120)">
                    <el-input v-model="WECHAT_ADD_FORM.img03"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"
                               @click="addWechat">立即创建</el-button>
                    <el-button @click="$router.push('/node/wechat')">取消</el-button>
                </el-form-item>
            </el-form>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            WECHAT_TYPE: [
                {
                    value: 1,
                    label: '图文类型',
                }, {
                    value: 2,
                    label: '大图类型',
                }, {
                    value: 3,
                    label: '列表类型',
                },
            ],
            WECHAT_ADD_FORM: {
                title: '',// 标题
                about: '',// 简介
                date: '',// 日期
                type: '',// 类型
                content: '',// 内容
                img01: '',// img01
                img02: '',// img02
                img03: '',// img03

            }
        }
    },
    mounted: function () {
        if (this.$route.params.form) {
            for (var key in this.WECHAT_ADD_FORM) {
                if (this.$route.params.form[key]) {
                    this.WECHAT_ADD_FORM[key] = this.$route.params.form[key];
                }
            }
        }
    },
    methods: {
        updateData: function (data) {
            this.WECHAT_ADD_FORM.content = data
        },
        // 新增新闻
        addWechat: function () {
            var self = this;
            if (self.WECHAT_ADD_FORM.date) {
                //时间转换
            }
            var params = {
                form: self.WECHAT_ADD_FORM,
            };
            this.$http.post('/api/wechat/create', params).then(function (res) {
                if (res.data.code == 0) {
                    self.$message({
                        type: 'success',
                        message: '添加成功!'
                    });
                    self.$router.push('/node/wechat')
                }
            });

        },

    }
}
</script>
