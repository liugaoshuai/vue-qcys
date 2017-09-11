<template>
	<div id="app">
		<div class="app-header">
			<h1>Mahayana</h1>
		</div>
		<div class="app-nav">
			<el-menu class="el-menu-vertical-demo"
			         theme="dark"
			         :router="true">
				<el-menu-item index="/qcys2017node/index">首页</el-menu-item>
				<el-menu-item index="/qcys2017node/work">影视作品</el-menu-item>
				<el-menu-item index="/qcys2017node/wechat">公众号精选</el-menu-item>
				<el-menu-item index="/qcys2017node/news">新闻聚焦</el-menu-item>
				<el-menu-item index="/qcys2017node/invest">投资者关系</el-menu-item>
				<el-menu-item index="/qcys2017node/about">关于我们</el-menu-item>
				<el-menu-item index="/qcys2017node/contact">联系我们</el-menu-item>
			</el-menu>
		</div>
		<div class="app-con">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
		}
	}
}
</script>

