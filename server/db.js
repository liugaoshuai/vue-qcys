// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/qcys',{useMongoClient:true});

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式newsList **************/

//主页
const INDEX_DATA = mongoose.Schema({
    bannerImg01: String,// 轮播图
    bannerImg02: String,// 轮播图
    bannerImg03: String,// 轮播图

    workImg01: String,// 作品图
    workImg02: String,// 作品图
    workImg03: String,// 作品图
    workImg04: String,// 作品图
    workImg05: String,// 作品图
    workImg06: String,// 作品图

    boxImg01: String,// 剧照图
    boxImg02: String,// 剧照图
    boxImg03: String,// 剧照图
    boxImg04: String,// 剧照图
    
    music: String,// 音乐
    video: String,// 视频    
    title: String,// 标题    
    
});
//新闻
const NEWS_DATA = mongoose.Schema({
    title: String,// 标题
    about: String,// 简介
    date: String,// 日期
    type: String,// 类型
    content: String,// 内容
    topImg: String,// 顶部
    bottomImg: String,// 底部
    listImg: String,// 列表
    smallImg: String,// 缩略
    indexImg: String,// 首页
});
//投资者关系
const INVEST_DATA = mongoose.Schema({
    title: String,// 标题
    about: String,// 简介
    date: String,// 日期
    content: String,// 内容
    topImg: String,// 顶部
    bottomImg: String,// 底部
    listImg: String,// 列表
    smallImg: String,// 缩略
});
//公众号
//影视作品

/************** 定义模型Model **************/
const Models = {
    INDEX_DATA : mongoose.model('INDEX_DATA',INDEX_DATA),
    NEWS_DATA : mongoose.model('NEWS_DATA',NEWS_DATA),
    INVEST_DATA : mongoose.model('INVEST_DATA',INVEST_DATA)
    
}

module.exports = Models;