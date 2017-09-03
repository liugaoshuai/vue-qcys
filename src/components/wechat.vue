<template>
    <div id="wechat">
        <h2>微信公众号</h2>
        <div class="common-btn">
            <el-button @click="$router.push('/node/wechat/add')">新增</el-button>
        </div>
        <el-table :data="WECHAT_LIST"
                  border
                  style="width: 100%">
            <el-table-column type="index"
                             width="80"
                             align="center">
            </el-table-column>
            <el-table-column prop="title"
                             label="微信公众号标题"
                             width="500">
            </el-table-column>
            <el-table-column label="发布日期"
                             align="center">
                <template scope="scope">
                    {{scope.row.date | date-filter}}
                </template>
            </el-table-column>
            <el-table-column label="新闻类型"
                             align="center">
                <template scope="scope">
                    <el-tag v-if="scope.row.type == 1">图文类型</el-tag>
                    <el-tag v-if="scope.row.type == 2">大图类型</el-tag>
                    <el-tag v-if="scope.row.type == 3">列表类型</el-tag>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column prop="address"
                             label="操作"
                             align="center">
                <template scope="scope">
                    <!--<el-button type="text">修改</el-button>-->
                    <el-button type="text">
                        <router-link type="text"
                                     :to="{ name: 'nodeWechatAdd', params: {form: scope.row}}">编辑</router-link>
                    </el-button>
                    <el-button type="text"
                               @click="deleteWechat(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
       <el-pagination @current-change="getWechat"
                       :page-size="10"
                       layout="total, prev, pager, next"
                       :total="WECHAT_PAGE.length"
                       style="margin-top: 20px;">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            WECHAT_LIST: [],
            WECHAT_PAGE: {},
        }
    },
    mounted: function () {
        this.getWechat();
    },
    methods: {
        // 获取新闻
        getWechat: function (n) {
            var self = this;
            var s = 10;
            var n = n ? n : '1';
            this.$http.get("http://localhost:8088/api/wechat/get?n=" + n + "&s=" + s).then(function (res) {
                self.WECHAT_LIST = res.data.data;
                self.WECHAT_PAGE = res.data.page;
            });
        },
        // 删除新闻
        deleteWechat: function (id) {
            var self = this;
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$http.get('http://localhost:8088/api/wechat/delete?id=' + id).then(function (res) {
                    if (res.data.code == 0) {
                        self.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        self.getWechat();
                    }
                });

            }).catch(() => {
            });
        },
        
    }
}
</script>
