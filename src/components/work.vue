<template>
    <div id="news">
        <h2>影视作品</h2>
        <div class="common-btn">
            <el-button @click="$router.push('/qcys2017node/work/add')">新增</el-button>
        </div>
        <el-table :data="WORK_LIST"
                  border
                  style="width: 100%">
            <el-table-column type="index"
                             width="80"
                             align="center">
            </el-table-column>
            <el-table-column prop="name"
                             label="作品名称"
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
                    <el-button type="text"><router-link type="text" :to="{ name: 'nodeWorkAdd', params: {form: scope.row}}">编辑</router-link></el-button>
                    <el-button type="text"
                               @click="deleteWork(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
         <h2>作品-轮播图</h2>
        <el-form :model="WECHAT_IMG"
                 label-width="160px">
            <el-form-item label="轮播图01(1170*500)">
                <el-input v-model="WECHAT_IMG.bannerImg01"></el-input>
            </el-form-item>
            <el-form-item label="轮播图02(1170*500)">
                <el-input v-model="WECHAT_IMG.bannerImg02"></el-input>
            </el-form-item>
            <el-form-item label="轮播图03(1170*500)">
                <el-input v-model="WECHAT_IMG.bannerImg03"></el-input>
            </el-form-item>
    
            <el-form-item>
                <el-button type="primary"
                           @click="addIndex">确定修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            WORK_LIST: [],
            WECHAT_IMG: {
                bannerImg01: '',
                bannerImg02: '',
                bannerImg03: '',
                title: 'index'
            },
        }
    },
    mounted: function () {
        this.getWork();
                this.getIndex();
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
        // 获取
        getIndex: function () {
            var self = this;
            this.$http.get('/api/wechatimg/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.WECHAT_IMG = res.data.data[0];
                }
            });
        },
        // 修改
        addIndex: function () {
            var self = this;
            var params = {
                form: self.WECHAT_IMG,
            };
            this.$http.post('/api/wechatimg/create', params).then(function (res) {
                if (res.data.code == 0) {
                    self.$message({
                        type: 'success',
                        message: '添加成功!'
                    });
                }
            });
        },
    }
}
</script>
