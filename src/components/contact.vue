<template>
    <div id="news">
        <h2>联系我们</h2>
        <div class="common-btn">
            <el-button @click="$router.push('/node/contact/add')">新增</el-button>
        </div>
        <el-table :data="CONTACT_LIST"
                  border
                  style="width: 100%">
            <el-table-column type="index"
                             width="80">
            </el-table-column>
            <el-table-column prop="name"
                             label="职位名称">
            </el-table-column>
            <el-table-column prop="address"
                             label="操作">
                <template scope="scope">
                    <el-button type="text"><router-link type="text" :to="{ name: 'nodeContactAdd', params: {form: scope.row}}">编辑</router-link></el-button>
                    <el-button type="text"
                               @click="deleteContact(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            CONTACT_LIST: [],
        }
    },
    mounted: function () {
        this.getContact();
    },
    methods: {
        // 获取新闻
        getContact: function () {
            var self = this;
            this.$http.get('/api/contact/get').then(function (res) {
                self.CONTACT_LIST = res.data.data;
            });
        },
        // 删除新闻
        deleteContact: function (id) {
            var self = this;
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$http.get('/api/contact/delete?id=' + id).then(function (res) {
                    if (res.data.code == 0) {
                        self.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        self.getContact();
                    }
                });

            }).catch(() => {

            });

        },
    }
}
</script>
