<template>
    <div id="news">
        <h2>影视作品</h2>
        <div class="common-btn">
            <el-button @click="$router.push('/node/work/add')">新增</el-button>
        </div>
        <el-table :data="WORK_LIST"
                  border
                  style="width: 100%">
            <el-table-column type="index"
                             width="80">
            </el-table-column>
            <el-table-column prop="name"
                             label="作品名称">
            </el-table-column>
            <el-table-column prop="director"
                             label="导演">
            </el-table-column>
            <el-table-column prop="tag"
                             label="标签">
            </el-table-column>
            <el-table-column prop="address"
                             label="操作">
                <template scope="scope">
                    <el-button type="text" @click="openWork(scope.row._id)">查看</el-button>
                    <!--<el-button type="text">修改</el-button>-->
                    <el-button type="text"><router-link type="text" :to="{ name: 'nodeWorkAdd', params: {form: scope.row}}">编辑</router-link></el-button>
                    <el-button type="text"
                               @click="deleteWork(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            WORK_LIST: [],
        }
    },
    mounted: function () {
        this.getWork();
    },
    methods: {
        // 获取新闻
        getWork: function () {
            var self = this;
            this.$http.get('/api/work/get').then(function (res) {
                self.WORK_LIST = res.data.data;
            });
        },
        // 删除新闻
        deleteWork: function (id) {
            var self = this;

            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$http.get('/api/work/delete?id=' + id).then(function (res) {
                    if (res.data.code == 0) {
                        self.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        self.getWork();
                    }
                });

            }).catch(() => {

            });

        },
        // 查看新闻
        openWork: function (id){
            window.open('localhost:9000/work/detail/' + id)
        }
    }
}
</script>
