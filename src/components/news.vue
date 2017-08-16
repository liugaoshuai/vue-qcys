<template>
    <div id="news">
        <h2>新闻聚焦</h2>
        <div class="common-btn">
            <el-button @click="$router.push('/node/news/add')">新增</el-button>
        </div>
        <el-table :data="NEWS_LIST"
                  border
                  style="width: 100%">
            <el-table-column type="index"
                             width="80">
            </el-table-column>
            <el-table-column prop="title"
                             label="新闻标题">
            </el-table-column>
            <el-table-column prop="date"
                             label="发布日期"
                             width="220">
            </el-table-column>
            <el-table-column label="新闻类型"
                             width="120">
                <template scope="scope">
                    <el-tag v-if="scope.row.type == 1">新剧新鲜事</el-tag>
                    <el-tag v-if="scope.row.type == 2">明星娱乐</el-tag>
                    <el-tag v-if="scope.row.type == 3">行业聚焦</el-tag>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column prop="address"
                             label="操作">
                <template scope="scope">
                    <el-button type="text" @click="openNews(scope.row._id)">查看</el-button>
                    <!--<el-button type="text">修改</el-button>-->
                    <el-button type="text"
                               @click="deleteNews(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            NEWS_LIST: [],
        }
    },
    mounted: function () {
        this.getNews();
    },
    methods: {
        // 获取新闻
        getNews: function () {
            var self = this;
            this.$http.get('/api/news/get').then(function (res) {
                self.NEWS_LIST = res.data.data;
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
                this.$http.get('/api/news/delete?id=' + id).then(function (res) {
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
        // 查看新闻
        openNews: function (id){
            window.open('localhost:9000/news/detail/' + id)
        }
    }
}
</script>
