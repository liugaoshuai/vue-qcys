<template>
	<div id="app">
		<div class="app-header">
			<h1>Mahayana</h1>
		</div>
		<div class="app-nav">
				<el-menu class="el-menu-vertical-demo"
				         theme="dark"
						 :router="true"
						 >
					<el-menu-item index="/">首页</el-menu-item >
					<el-menu-item index="/news">新闻中心</el-menu-item>
					<el-menu-item index="/work">影视作品</el-menu-item>
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
	data(){
		return{
		}
	}
}
</script>

