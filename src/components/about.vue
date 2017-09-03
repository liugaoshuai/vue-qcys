<template>
    <div id="news">
        <h2>影视作品</h2>
        <div class="common-btn">
            <el-button @click="$router.push('/node/about/add')">新增</el-button>
        </div>
        <el-table :data="ABOUT_TABLE_LIST"
                  border
                  style="width: 100%">
            <el-table-column type="index"
                             width="80"
                             align="center">
            </el-table-column>
            <el-table-column prop="name"
                             label="获奖作品"
                             width="500">
            </el-table-column>
            <el-table-column prop="award"
                             label="所获奖项">
            </el-table-column>
            <el-table-column label="获奖日期"
                             align="date">
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
                                     :to="{ name: 'nodeWorkAdd', params: {form: scope.row}}">编辑</router-link>
                    </el-button>
                    <el-button type="text"
                               @click="deleteWork(scope.row._id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <h2>作品-轮播图</h2>
        <el-form :model="ABOUT_DATA"
                 label-width="160px">
            <el-form-item label="公司介绍">
                <el-input v-model="ABOUT_DATA.gsjs"></el-input>
            </el-form-item>
            <el-form-item label="公司宗旨">
                <el-input v-model="ABOUT_DATA.gszz"></el-input>
            </el-form-item>
            <el-form-item label="业务范围">
                <el-input v-model="ABOUT_DATA.ywfw"></el-input>
            </el-form-item>
            <el-form-item label="公司团队">
                <el-input v-model="ABOUT_DATA.gstd"></el-input>
            </el-form-item>
            <el-form-item label="发展战略01标题">
                <el-input v-model="ABOUT_DATA.fzzlTitle01"></el-input>
            </el-form-item>
            <el-form-item label="发展战略01内容">
                <el-input v-model="ABOUT_DATA.fzzlContent01"></el-input>
            </el-form-item>
            <el-form-item label="发展战略02标题">
                <el-input v-model="ABOUT_DATA.fzzlTitle02"></el-input>
            </el-form-item>
            <el-form-item label="发展战略02内容">
                <el-input v-model="ABOUT_DATA.fzzlContent02"></el-input>
            </el-form-item>
            <el-form-item label="发展战略03标题">
                <el-input v-model="ABOUT_DATA.fzzlTitle03"></el-input>
            </el-form-item>
            <el-form-item label="发展战略03内容">
                <el-input v-model="ABOUT_DATA.fzzlContent03"></el-input>
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
            ABOUT_TABLE_LIST: [],
            ABOUT_DATA: {
                gsjs: '',// 公司介绍
                gszz: '',// 公司宗旨
                ywfw: '',// 业务范围
                gstd: '',// 公司团队
                fzzlTitle01: '',
                fzzlContent01: '',
                fzzlTitle02: '',
                fzzlContent02: '',
                fzzlTitle03: '',
                fzzlContent03: '',
                title: 'index',
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
            this.$http.get('/api/about/table/get').then(function (res) {
                self.ABOUT_TABLE_LIST = res.data.data;
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
                this.$http.get('/api/about/table/delete?id=' + id).then(function (res) {
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
            this.$http.get('/api/about/get').then(function (res) {
                if (res.data.code == 0 && res.data.data.length > 0) {
                    self.ABOUT_DATA = res.data.data[0];
                }
            });
        },
        // 修改
        addIndex: function () {
            var self = this;
            var params = {
                form: self.ABOUT_DATA,
            };
            this.$http.post('/api/about/create', params).then(function (res) {
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
