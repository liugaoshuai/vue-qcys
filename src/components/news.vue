<template>
    <div id="news">
        <h2>新闻中心</h2>
        <div class="common-btn">
            <el-button @click="$router.push('/news/add')">新增</el-button>
        </div>
        <el-table :data="newsList"
                  border
                  style="width: 100%">
            <el-table-column type="index"
                             width="50">
            </el-table-column>
            <el-table-column prop="title"
                             label="新闻标题">
            </el-table-column>
            <el-table-column prop="date"
                             label="发布日期"
                             width="180">
            </el-table-column>
            
            <el-table-column prop="type"
                             label="新闻类型"
                             width="180">
            </el-table-column>
            <el-table-column prop="address"
                             label="操作">
                <template scope="scope">
                    <el-button type="text">查看</el-button>
                    <el-button type="text">修改</el-button>
                    <el-button type="text">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            newsList: [
                {
                    title: '新闻测试标题',
                    date: '2017-08-09',
                    type: 1,
                }
            ], 

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">

</style>