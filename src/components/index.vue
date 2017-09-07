<template>
  <div id="news">
    <h2>主页-新增</h2>
    <el-form :model="INDEX_ADD_FORM"
             label-width="160px">
      <el-form-item label="轮播图01(1920*640)">
        <el-input v-model="INDEX_ADD_FORM.bannerImg01"></el-input>
      </el-form-item>
      <el-form-item label="轮播图02(1920*640)">
        <el-input v-model="INDEX_ADD_FORM.bannerImg02"></el-input>
      </el-form-item>
      <el-form-item label="轮播图03(1920*640)">
        <el-input v-model="INDEX_ADD_FORM.bannerImg03"></el-input>
      </el-form-item>
  
      <el-form-item label="剧照图01(800*300)">
        <el-input v-model="INDEX_ADD_FORM.boxImg01"></el-input>
      </el-form-item>
      <el-form-item label="剧照图05(800*300)">
        <el-input v-model="INDEX_ADD_FORM.boxImg05"></el-input>
      </el-form-item>
      <el-form-item label="剧照图09(800*300)">
        <el-input v-model="INDEX_ADD_FORM.boxImg09"></el-input>
      </el-form-item>
      <el-form-item label="剧照图13(800*300)">
        <el-input v-model="INDEX_ADD_FORM.boxImg13"></el-input>
      </el-form-item>
      <el-form-item label="剧照图17(800*300)">
        <el-input v-model="INDEX_ADD_FORM.boxImg17"></el-input>
      </el-form-item>
      <el-form-item label="剧照图01标题">
        <el-input v-model="INDEX_ADD_FORM.boxTitle01"></el-input>
      </el-form-item>
      <el-form-item label="剧照图01文字">
        <el-input v-model="INDEX_ADD_FORM.boxText01"></el-input>
      </el-form-item>
      <el-form-item label="剧照图02(800*300)">
        <el-input v-model="INDEX_ADD_FORM.boxImg02"></el-input>
      </el-form-item>
      <el-form-item label="剧照图06(800*300)">
        <el-input v-model="INDEX_ADD_FORM.boxImg06"></el-input>
      </el-form-item>
      <el-form-item label="剧照图10(800*300)">
        <el-input v-model="INDEX_ADD_FORM.boxImg10"></el-input>
      </el-form-item>
      <el-form-item label="剧照图14(800*300)">
        <el-input v-model="INDEX_ADD_FORM.boxImg14"></el-input>
      </el-form-item>
      <el-form-item label="剧照图18(800*300)">
        <el-input v-model="INDEX_ADD_FORM.boxImg18"></el-input>
      </el-form-item>
      <el-form-item label="剧照图02标题">
        <el-input v-model="INDEX_ADD_FORM.boxTitle02"></el-input>
      </el-form-item>
      <el-form-item label="剧照图02文字">
        <el-input v-model="INDEX_ADD_FORM.boxText02"></el-input>
      </el-form-item>
      <el-form-item label="剧照图03(400*600)">
        <el-input v-model="INDEX_ADD_FORM.boxImg03"></el-input>
      </el-form-item>
      <el-form-item label="剧照图03(400*600)">
        <el-input v-model="INDEX_ADD_FORM.boxImg07"></el-input>
      </el-form-item>
      <el-form-item label="剧照图03(400*600)">
        <el-input v-model="INDEX_ADD_FORM.boxImg11"></el-input>
      </el-form-item>
      <el-form-item label="剧照图15(400*600)">
        <el-input v-model="INDEX_ADD_FORM.boxImg15"></el-input>
      </el-form-item>
      <el-form-item label="剧照图19(400*600)">
        <el-input v-model="INDEX_ADD_FORM.boxImg19"></el-input>
      </el-form-item>
      <el-form-item label="剧照图03标题">
        <el-input v-model="INDEX_ADD_FORM.boxTitle03"></el-input>
      </el-form-item>
      <el-form-item label="剧照图03文字">
        <el-input v-model="INDEX_ADD_FORM.boxText03"></el-input>
      </el-form-item>
      <el-form-item label="剧照图04(1200*300)">
        <el-input v-model="INDEX_ADD_FORM.boxImg04"></el-input>
      </el-form-item>
      <el-form-item label="剧照图04(1200*300)">
        <el-input v-model="INDEX_ADD_FORM.boxImg08"></el-input>
      </el-form-item>
      <el-form-item label="剧照图16(1200*300)">
        <el-input v-model="INDEX_ADD_FORM.boxImg16"></el-input>
      </el-form-item>
      <el-form-item label="剧照图20(1200*300)">
        <el-input v-model="INDEX_ADD_FORM.boxImg20"></el-input>
      </el-form-item>
      <el-form-item label="剧照图04标题">
        <el-input v-model="INDEX_ADD_FORM.boxTitle04"></el-input>
      </el-form-item>
      <el-form-item label="剧照图04文字">
        <el-input v-model="INDEX_ADD_FORM.boxText04"></el-input>
      </el-form-item>
  
      <el-form-item label="音乐">
        <el-input v-model="INDEX_ADD_FORM.music"></el-input>
      </el-form-item>
      <el-form-item label="视频">
        <el-input v-model="INDEX_ADD_FORM.video"></el-input>
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
      INDEX_ADD_FORM: {
        bannerImg01: '',// 轮播图
        bannerImg02: '',// 轮播图
        bannerImg03: '',// 轮播图


        boxImg01: '',// 剧照图
        boxImg02: '',// 剧照图
        boxImg03: '',// 剧照图
        boxImg04: '',// 剧照图
        boxImg05: '',// 剧照图
        boxImg06: '',// 剧照图
        boxImg07: '',// 剧照图
        boxImg08: '',// 剧照图
        boxImg09: '',// 剧照图
        boxImg10: '',// 剧照图
        boxImg11: '',// 剧照图
        boxImg12: '',// 剧照图
        boxImg13: '',// 剧照图
        boxImg14: '',// 剧照图
        boxImg15: '',// 剧照图
        boxImg16: '',// 剧照图
        boxImg17: '',// 剧照图
        boxImg18: '',// 剧照图
        boxImg19: '',// 剧照图
        boxImg20: '',// 剧照图

        boxTitle01: '',
        boxTitle02: '',
        boxTitle03: '',
        boxTitle04: '',
        boxText01: '',
        boxText02: '',
        boxText03: '',
        boxText04: '',

        music: '',// 音乐
        video: '',// 视频   
        title: 'index'
      }
    }
  },
  mounted: function () {
    this.getIndex();
  },
  methods: {
    // 获取
    getIndex: function () {
      var self = this;
      this.$http.get('/api/index/get').then(function (res) {
        if (res.data.code == 0 && res.data.data.length > 0) {
          self.INDEX_ADD_FORM = res.data.data[0];
        }
      });
    },
    // 修改
    addIndex: function () {
      var self = this;
      var params = {
        form: self.INDEX_ADD_FORM,
      };
      this.$http.post('/api/index/create', params).then(function (res) {
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
