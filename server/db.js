// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/qcys', { useMongoClient: true });

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error', () => console.log('Mongo connection error'));
db.once('open', () => console.log('Mongo connection successed'));
/************** 定义模式newsList **************/

//主页
const INDEX_DATA = mongoose.Schema({
    bannerImg01: String,// 轮播图
    bannerImg02: String,// 轮播图
    bannerImg03: String,// 轮播图

    boxImg01: String,// 剧照图
    boxImg02: String,// 剧照图
    boxImg03: String,// 剧照图
    boxImg04: String,// 剧照图
    boxImg05: String,// 剧照图
    boxImg06: String,// 剧照图
    boxImg07: String,// 剧照图
    boxImg08: String,// 剧照图
    boxImg09: String,// 剧照图
    boxImg10: String,// 剧照图
    boxImg11: String,// 剧照图
    boxImg12: String,// 剧照图

    boxTitle01: String,
    boxTitle02: String,
    boxTitle03: String,
    boxTitle04: String,
    boxText01: String,
    boxText02: String,
    boxText03: String,
    boxText04: String,

    music: String,// 音乐
    video: String,// 视频    
    title: String,// 标题    

});

//作品
const WORK_DATA = mongoose.Schema({
    index: Number,// 权重
    name: String,// 作品名称
    date: String,//发布日期
    tag: String,// 标签
    producer: String,// 出品人
    scenario: String,// 编剧
    director: String,// 导演
    starring: String,// 主演
    filmer: String,// 制片人
    time: String,// 首播时间
    num: String,// 集数
    length: String,// 每集长度
    platform: String,// 在线播放平台
    original: String,// 原著
    author: String,// 作者
    broadcasting: String,// 播出平台

    introduction: String,// 剧情简介
    // actor: [
    //     {
    //         headerImg: String,// 头像
    //         name: String,// 姓名
    //         role: String,// 角色
    //     }
    // ],// 主演
    actor: String,// 主演
    videoUrl01: String,// 视频
    videoUrl02: String,// 视频
    videoUrl03: String,// 视频
    videoHref01: String,// 视频url
    videoHref02: String,// 视频url
    videoHref03: String,// 视频url
    workImg01: String,// 剧照
    workImg02: String,// 剧照
    workImg03: String,// 剧照
    workImg04: String,// 剧照
    workImg05: String,// 剧照
    workImg06: String,// 剧照
    

    starImg01: String,
    starName01: String,
    starRole01: String,
    starImg02: String,
    starName02: String,
    starRole02: String,
    starImg03: String,
    starName03: String,
    starRole03: String,
    starImg04: String,
    starName04: String,
    starRole04: String,
    starImg05: String,
    starName05: String,
    starRole05: String,
    starImg06: String,
    starName06: String,
    starRole06: String,
    starImg07: String,
    starName07: String,
    starRole07: String,
    starImg08: String,
    starName08: String,
    starRole08: String,

    listImg: String,// 列表剧照
    bigImg: String,// 详情剧照
    indexImg: String,
})
//微信公众号
const WECHAT_DATA = mongoose.Schema({
    title: String,// 标题
    about: String,// 简介
    date: String,// 日期
    type: String,// 类型
    content: String,// 内容
    img01: String,// img01
    img02: String,// img02
    img03: String,// img03

});
const WECHAT_IMG_DATA = mongoose.Schema({
    bannerImg01: String,// 轮播图
    bannerImg02: String,// 轮播图
    bannerImg03: String,// 轮播图
    title: String,// 标题    
});
//新闻
const NEWS_DATA = mongoose.Schema({
    index: Number,// 权重
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
    index: Number,// 权重
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

//联系我们
const CONTACT_DATA = mongoose.Schema({
    name: String,// 职位名称
    content: String,// 内容
});
//联系我们
const ABOUT_DATA = mongoose.Schema({
    gsjs: String,// 公司介绍
    gszz: String,// 公司宗旨
    ywfw: String,// 业务范围
    gstd: String,// 公司团队
    fzzlTitle01: String,
    fzzlContent01: String,
    fzzlTitle02: String,
    fzzlContent02: String,
    fzzlTitle03: String,
    fzzlContent03: String,
    title: String,
});
const ABOUT_TABLE_DATA = mongoose.Schema({
    date: String,
    name: String,
    award: String,
    bjdw: String,
});

/************** 定义模型Model **************/
const Models = {
    INDEX_DATA: mongoose.model('INDEX_DATA', INDEX_DATA),
    NEWS_DATA: mongoose.model('NEWS_DATA', NEWS_DATA),
    INVEST_DATA: mongoose.model('INVEST_DATA', INVEST_DATA),
    WORK_DATA: mongoose.model('WORK_DATA', WORK_DATA),
    CONTACT_DATA: mongoose.model('CONTACT_DATA', CONTACT_DATA),
    WECHAT_DATA: mongoose.model('WECHAT_DATA', WECHAT_DATA),
    WECHAT_IMG_DATA: mongoose.model('WECHAT_IMG_DATA', WECHAT_IMG_DATA),
    ABOUT_DATA: mongoose.model('ABOUT_DATA', ABOUT_DATA),
    ABOUT_TABLE_DATA: mongoose.model('ABOUT_TABLE_DATA', ABOUT_TABLE_DATA),
    
}

module.exports = Models;