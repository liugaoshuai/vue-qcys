<template>
    <div id="news">
        <h2>新闻中心</h2>
        <div class="common-btn">
            <el-button>新增</el-button>
        </div>
        <el-table :data="newsListData"
                  border
                  style="width: 100%">
            <el-table-column type="index"
                             width="50">
            </el-table-column>
            <el-table-column prop="newsListData"
                             label="发布日期"
                             width="180">
            </el-table-column>
            <el-table-column prop="title"
                             label="标题"
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
            newsListData: [], 
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
Î