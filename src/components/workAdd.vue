<template>
    <div id="news">
        <h2>影视作品-新增</h2>
        <el-form :model="WORK_ADD_FORM"
                 label-width="120px">
            <el-form-item label="作品名称">
                <el-input v-model="WORK_ADD_FORM.name"></el-input>
            </el-form-item>
            <el-form-item label="发布日期">
                <el-date-picker type="date"
                                placeholder="选择日期"
                                v-model="WORK_ADD_FORM.date"></el-date-picker>
            </el-form-item>
            <el-form-item label="标签">
                <el-input v-model="WORK_ADD_FORM.tag"></el-input>
            </el-form-item>
            <el-form-item label="出品人">
                <el-input v-model="WORK_ADD_FORM.producer"></el-input>
            </el-form-item>
            <el-form-item label="编剧">
                <el-input v-model="WORK_ADD_FORM.scenario"></el-input>
            </el-form-item>
            <el-form-item label="导演">
                <el-input v-model="WORK_ADD_FORM.director"></el-input>
            </el-form-item>
            <el-form-item label="主演">
                <el-input v-model="WORK_ADD_FORM.starring"></el-input>
            </el-form-item>
            <el-form-item label="制片人">
                <el-input v-model="WORK_ADD_FORM.filmer"></el-input>
            </el-form-item>
            <el-form-item label="首播时间">
                <el-date-picker type="date"
                                placeholder="选择日期"
                                v-model="WORK_ADD_FORM.time"></el-date-picker>
            </el-form-item>
            <el-form-item label="集数">
                <el-input v-model="WORK_ADD_FORM.num"></el-input>
            </el-form-item>
            <el-form-item label="每集长度">
                <el-input v-model="WORK_ADD_FORM.length"></el-input>
            </el-form-item>
            <el-form-item label="在线播放平台">
                <el-input v-model="WORK_ADD_FORM.platform"></el-input>
            </el-form-item>
            <el-form-item label="原著">
                <el-input v-model="WORK_ADD_FORM.original"></el-input>
            </el-form-item>
            <el-form-item label="作者">
                <el-input v-model="WORK_ADD_FORM.author"></el-input>
            </el-form-item>
            <el-form-item label="播出平台">
                <el-input v-model="WORK_ADD_FORM.broadcasting"></el-input>
            </el-form-item>
            <el-form-item label="剧情简介">
                <el-input v-model="WORK_ADD_FORM.introduction"></el-input>
            </el-form-item>
            <el-form-item label="主演01名字">
                <el-input v-model="WORK_ADD_FORM.starName01"></el-input>
            </el-form-item>
            <el-form-item label="主演01角色">
                <el-input v-model="WORK_ADD_FORM.starRole01"></el-input>
            </el-form-item>
            <el-form-item label="主演01照片(80x80)">
                <el-input v-model="WORK_ADD_FORM.starImg01"></el-input>
            </el-form-item>
            <el-form-item label="主演02名字">
                <el-input v-model="WORK_ADD_FORM.starName02"></el-input>
            </el-form-item>
            <el-form-item label="主演02角色">
                <el-input v-model="WORK_ADD_FORM.starRole02"></el-input>
            </el-form-item>
            <el-form-item label="主演02照片(80x80)">
                <el-input v-model="WORK_ADD_FORM.starImg02"></el-input>
            </el-form-item>
            <el-form-item label="主演03名字">
                <el-input v-model="WORK_ADD_FORM.starName03"></el-input>
            </el-form-item>
            <el-form-item label="主演03角色">
                <el-input v-model="WORK_ADD_FORM.starRole03"></el-input>
            </el-form-item>
            <el-form-item label="主演03照片(80x80)">
                <el-input v-model="WORK_ADD_FORM.starImg03"></el-input>
            </el-form-item>
            <el-form-item label="主演04名字">
                <el-input v-model="WORK_ADD_FORM.starName04"></el-input>
            </el-form-item>
            <el-form-item label="主演04角色">
                <el-input v-model="WORK_ADD_FORM.starRole04"></el-input>
            </el-form-item>
            <el-form-item label="主演04照片(80x80)">
                <el-input v-model="WORK_ADD_FORM.starImg04"></el-input>
            </el-form-item>
            <el-form-item label="主演05名字">
                <el-input v-model="WORK_ADD_FORM.starName05"></el-input>
            </el-form-item>
            <el-form-item label="主演05角色">
                <el-input v-model="WORK_ADD_FORM.starRole05"></el-input>
            </el-form-item>
            <el-form-item label="主演05照片(80x80)">
                <el-input v-model="WORK_ADD_FORM.starImg05"></el-input>
            </el-form-item>
            <el-form-item label="主演06名字">
                <el-input v-model="WORK_ADD_FORM.starName06"></el-input>
            </el-form-item>
            <el-form-item label="主演06角色">
                <el-input v-model="WORK_ADD_FORM.starRole06"></el-input>
            </el-form-item>
            <el-form-item label="主演06照片(80x80)">
                <el-input v-model="WORK_ADD_FORM.starImg06"></el-input>
            </el-form-item>
            <el-form-item label="主演07名字">
                <el-input v-model="WORK_ADD_FORM.starName07"></el-input>
            </el-form-item>
            <el-form-item label="主演07角色">
                <el-input v-model="WORK_ADD_FORM.starRole07"></el-input>
            </el-form-item>
            <el-form-item label="主演07照片(80x80)">
                <el-input v-model="WORK_ADD_FORM.starImg07"></el-input>
            </el-form-item>
            <el-form-item label="主演08名字">
                <el-input v-model="WORK_ADD_FORM.starName08"></el-input>
            </el-form-item>
            <el-form-item label="主演08角色">
                <el-input v-model="WORK_ADD_FORM.starRole08"></el-input>
            </el-form-item>
            <el-form-item label="主演08照片(80x80)">
                <el-input v-model="WORK_ADD_FORM.starImg08"></el-input>
            </el-form-item>
            <el-form-item label="视频(380x240)">
                <el-input v-model="WORK_ADD_FORM.videoUrl01"></el-input>
            </el-form-item>
            <el-form-item label="视频url">
                <el-input v-model="WORK_ADD_FORM.videoHref01"></el-input>
            </el-form-item>
            <el-form-item label="视频(380x240)">
                <el-input v-model="WORK_ADD_FORM.videoUrl02"></el-input>
            </el-form-item>
            <el-form-item label="视频url">
                <el-input v-model="WORK_ADD_FORM.videoHref02"></el-input>
            </el-form-item>
            <el-form-item label="视频(380x240)">
                <el-input v-model="WORK_ADD_FORM.videoUrl03"></el-input>
            </el-form-item>
            <el-form-item label="视频url">
                <el-input v-model="WORK_ADD_FORM.videoHref03"></el-input>
            </el-form-item>
            <el-form-item label="剧照(380x240)">
                <el-input v-model="WORK_ADD_FORM.workImg01"></el-input>
            </el-form-item>
            <el-form-item label="剧照(380x240)">
                <el-input v-model="WORK_ADD_FORM.workImg02"></el-input>
            </el-form-item>
            <el-form-item label="剧照(380x240)">
                <el-input v-model="WORK_ADD_FORM.workImg03"></el-input>
            </el-form-item>
            <el-form-item label="剧照(380x240)">
                <el-input v-model="WORK_ADD_FORM.workImg04"></el-input>
            </el-form-item>
            <el-form-item label="剧照(380x240)">
                <el-input v-model="WORK_ADD_FORM.workImg05"></el-input>
            </el-form-item>
            <el-form-item label="剧照(380x240)">
                <el-input v-model="WORK_ADD_FORM.workImg06"></el-input>
            </el-form-item>
            <el-form-item label="列表剧照(270x320)">
                <el-input v-model="WORK_ADD_FORM.listImg"></el-input>
            </el-form-item>
            <el-form-item label="详情剧照(320x450)">
                <el-input v-model="WORK_ADD_FORM.bigImg"></el-input>
            </el-form-item>
            <el-form-item label="首页剧照(160x200)">
                <el-input v-model="WORK_ADD_FORM.indexImg"></el-input>
            </el-form-item>
            <el-form-item label="权重指数">
                <el-input v-model="WORK_ADD_FORM.index"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                           @click="addWork">立即创建</el-button>
                <el-button @click="$router.push('/qcys2017node/work')">取消</el-button>
            </el-form-item>
        </el-form>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            WORK_ADD_FORM: {
                name: '',// 作品名称
                date: '',// 作品名称
                tag: '',// 标签
                producer: '',// 出品人
                scenario: '',// 编剧
                director: '',// 导演
                starring: '',// 主演
                filmer: '',// 制片人
                time: '',// 首播时间
                num: '',// 集数
                length: '',// 每集长度
                platform: '',// 在线播放平台
                original: '',// 原著
                author: '',// 作者
                broadcasting: '',// 播出平台

                introduction: '',// 剧情简介
                actor: [],// 主演
                videoUrl01: '',// 视频
                videoUrl02: '',// 视频
                videoUrl03: '',// 视频
                videoHref01: '',// 视频
                videoHref02: '',// 视频
                videoHref03: '',// 视频
                workImg01: '',// 剧照
                workImg02: '',// 剧照
                workImg03: '',// 剧照
                workImg04: '',// 剧照
                workImg05: '',// 剧照
                workImg06: '',// 剧照
                

                starImg01: '',
                starName01: '',
                starRole01: '',
                starImg02: '',
                starName02: '',
                starRole02: '',
                starImg03: '',
                starName03: '',
                starRole03: '',
                starImg04: '',
                starName04: '',
                starRole04: '',
                starImg05: '',
                starName05: '',
                starRole05: '',
                starImg06: '',
                starName06: '',
                starRole06: '',
                starImg07: '',
                starName07: '',
                starRole07: '',
                starImg08: '',
                starName08: '',
                starRole08: '',


                listImg: '',// 列表剧照
                bigImg: '',// 详情剧照
                indexImg: '',
                index: '',// 权重
            }
        }
    },
    mounted: function () {
        console.log(this.$route)
        if (this.$route.params.form) {
            console.log('for')
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
            console.log(self.WORK_ADD_FORM)
            var params = {
                form: self.WORK_ADD_FORM,
            };
            this.$http.post('/api/work/create', params).then(function (res) {
                if (res.data.code == 0) {
                    self.$message({
                        type: 'success',
                        message: '添加成功!'
                    });
                    self.$router.push('/qcys2017node/work')
                }
            });

        },

    }
}
</script>
