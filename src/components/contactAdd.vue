<template>
    <div id="news">
        <h2>联系我们-新增</h2>
        <el-form 
                 :model="CONTACT_ADD_FORM"
                 label-width="120px">
            <el-form-item label="职位名称">
                <el-input v-model="CONTACT_ADD_FORM.name"></el-input>
            </el-form-item>
            <el-form-item label="职位内容">
                <vue-html5-editor :content="CONTACT_ADD_FORM.content"
                                  :height="500"
                                  @change="updateData"></vue-html5-editor>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                           @click="addNews">立即创建</el-button>
                <el-button @click="$router.push('/qcys2017node/contact')">取消</el-button>
            </el-form-item>
        </el-form>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            CONTACT_ADD_FORM: {
                name: '',// 标题
                content: '',// 内容
            }
        }
    },
    mounted: function () {
        if (this.$route.params.form) {
            for (var key in this.CONTACT_ADD_FORM) {
                if (this.$route.params.form[key]) {
                    this.CONTACT_ADD_FORM[key] = this.$route.params.form[key];
                }
            }
        }
    },
    methods: {
        // 新增新闻
        updateData: function (data) {
            this.CONTACT_ADD_FORM.content = data
        },
        // 新增新闻
        addNews: function () {
            var self = this;
            var params = {
                form: self.CONTACT_ADD_FORM,
            };
            this.$http.post('/api/contact/create', params).then(function (res) {
                if (res.data.code == 0) {
                    self.$message({
                        type: 'success',
                        message: '添加成功!'
                    });
                    self.$router.push('/qcys2017node/contact')
                }
            });

        },

    }
}
</script>
