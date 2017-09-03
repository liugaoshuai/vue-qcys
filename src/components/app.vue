<template>
	<div id="app">
		<div class="app-header">
			<h1>Mahayana</h1>
		</div>
		<div class="app-nav">
			<el-menu class="el-menu-vertical-demo"
			         theme="dark"
			         :router="true">
				<el-menu-item index="/node/index">首页</el-menu-item>
				<el-menu-item index="/node/work">影视作品</el-menu-item>
				<el-menu-item index="/node/wechat">公众号精选</el-menu-item>
				<el-menu-item index="/node/news">新闻聚焦</el-menu-item>
				<el-menu-item index="/node/invest">投资者关系</el-menu-item>
				<el-menu-item index="/node/about">关于我们</el-menu-item>
				<el-menu-item index="/node/contact">联系我们</el-menu-item>
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

