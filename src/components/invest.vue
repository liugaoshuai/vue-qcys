<template>
    <div id="news">
        <h2>新闻聚焦</h2>
        <div class="common-btn">
            <el-button @click="$router.push('/node/invest/add')">新增</el-button>
        </div>
        <el-table :data="NEWS_LIST"
                  border
                  style="width: 100%">
            <el-table-column type="index"
                             width="80"
                             align="center">
            </el-table-column>
            <el-table-column prop="title"
                             label="文章标题"
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
                    <el-button type="text">
                        <router-link type="text"
                                     :to="{ name: 'nodeInvestAdd', params: {form: scope.row}}">编辑</router-link>
                    </el-button>
                    <el-button type="text"
                               @click="deleteNews(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @current-change="getNews"
                       :page-size="10"
                       layout="total, prev, pager, next"
                       :total="NEWS_PAGE.length"
                       style="margin-top: 20px;">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            NEWS_LIST: [],
            NEWS_PAGE: {},
        }
    },
    mounted: function () {
        this.getNews();
    },
    methods: {
        // 获取新闻
        getNews: function (n) {
            var self = this;
            var s = 10;
            var n = n ? n : '1';
            this.$http.get("/api/invest/get?n=" + n + "&s=" + s).then(function (res) {
                self.NEWS_LIST = res.data.data;
                self.NEWS_PAGE = res.data.page;
            });
        },
        // 删除新闻
        deleteNews: function (id) {
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
                        self.getNews();
                    }
                });

            }).catch(() => {

            });

        },
       
    }
}
</script>
