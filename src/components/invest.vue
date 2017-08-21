<template>
    <div id="news">
        <h2>投资者关系</h2>
        <div class="common-btn">
            <el-button @click="$router.push('/node/invest/add')">新增</el-button>
        </div>
        <el-table :data="INVEST_LIST"
                  border
                  style="width: 100%">
            <el-table-column type="index"
                             width="80"
                             align="center">
            </el-table-column>
            <el-table-column prop="title"
                             label="投资者关系标题"
                             width="500">
            </el-table-column>
            <el-table-column label="发布日期"
                             align="center">
                <template scope="scope">
                    {{scope.row.date | date-filter}}
                </template>
            </el-table-column>
            <el-table-column prop="address"
                             label="操作"
                             align="center">
                <template scope="scope">
                    <el-button type="text"
                               @click="openInvest(scope.row._id)">查看</el-button>
                    <!--<el-button type="text">修改</el-button>-->
                    <el-button type="text">
                        <router-link type="text"
                                     :to="{ name: 'nodeInvestAdd', params: {form: scope.row}}">编辑</router-link>
                    </el-button>
    
                    <el-button type="text"
                               @click="deleteInvest(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            INVEST_LIST: [],
        }
    },
    mounted: function () {
        this.getInvest();
    },
    methods: {
        // 获取新闻
        getInvest: function () {
            var self = this;
            this.$http.get('/api/invest/get').then(function (res) {
                self.INVEST_LIST = res.data.data;
            });
        },
        // 删除新闻
        deleteInvest: function (id) {
            var self = this;
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$http.get('/api/invest/delete?id=' + id).then(function (res) {
                    if (res.data.code == 0) {
                        self.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        self.getInvest();
                    }
                });

            }).catch(() => {

            });

        },
        // 查看新闻
        openInvest: function (id) {
            window.open('localhost:9000/invest/detail/' + id)
        }
    }
}
</script>
