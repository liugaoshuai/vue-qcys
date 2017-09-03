<template>
    <div id="news">
        <h2>关于我们 - 新增</h2>
        <el-form :model="WORK_ADD_FORM"
                 label-width="120px">
            <el-form-item label="获奖日期">
                <el-date-picker type="date"
                                placeholder="选择日期"
                                v-model="WORK_ADD_FORM.date"></el-date-picker>
            </el-form-item>
            <el-form-item label="获奖作品">
                <el-input v-model="WORK_ADD_FORM.name"></el-input>
            </el-form-item>
            <el-form-item label="所获奖项">
                <el-input v-model="WORK_ADD_FORM.award"></el-input>
            </el-form-item>
            <el-form-item label="颁奖单位">
                <el-input v-model="WORK_ADD_FORM.bjdw"></el-input>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary"
                           @click="addWork">立即创建</el-button>
                <el-button @click="$router.push('/node/about')">取消</el-button>
            </el-form-item>
        </el-form>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            WORK_ADD_FORM: {
                date: '',
                name: '',
                award: '',
                bjdw: '',
            }
        }
    },
    mounted: function () {
        if (this.$route.params.form) {
            for (var key in this.WORK_ADD_FORM) {
                if (this.$route.params.form[key]) {
                    this.WORK_ADD_FORM[key] = this.$route.params.form[key];
                }
            }
        }

    },
    methods: {
        // 新增新闻
        addWork: function () {
            var self = this;
            var params = {
                form: self.WORK_ADD_FORM,
            };
            this.$http.post('/api/about/table/create', params).then(function (res) {
                if (res.data.code == 0) {
                    self.$message({
                        type: 'success',
                        message: '添加成功!'
                    });
                    self.$router.push('/node/about')
                }
            });

        },

    }
}
</script>
