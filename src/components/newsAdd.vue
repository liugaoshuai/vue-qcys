<template>
    <div id="news">
        <h2>新闻中心/新增</h2>
        <el-form ref="form"
                 :model="form"
                 label-width="80px">
            <el-form-item label="新闻标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="新闻类型">
                <el-select v-model="form.type"
                           placeholder="请选择新闻类型">
                    <el-option v-for="item in newsType"
                               :key="item.value"
                               :label="item.label"
                               :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="发布日期">
                <el-date-picker type="date"
                                placeholder="选择日期"
                                v-model="form.date"
                                style="width: 200px;"></el-date-picker>
            </el-form-item>
            <el-form-item label="新闻内容">
                <quill-editor v-model="form.con"></quill-editor>
            </el-form-item>
            <el-form-item label-width="80px">
                <el-button type="primary"
                           @click="submitForm">立即创建</el-button>
                <el-button @click="$router.push('/news')">取消</el-button>
            </el-form-item>
        </el-form>
    
    </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            newsType: [
                {
                    value: 1,
                    label: '新剧新鲜事',
                },{
                    value: 2,
                    label: '明星娱乐',
                },{
                    value: 3,
                    label: '行业聚焦',
                },
            ],
            form: {
                title: '',
                date: '',
                type: '',
                con: '',
            }
        }
    },
    methods: {
        submitForm: function () {
            console.log(this.form.con)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
