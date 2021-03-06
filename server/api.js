// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/


// 修改首页
router.post('/api/index/create', (req, res) => {
    console.log(req.body.form)

    // 原数据字段值
    var oldValue = { title: "index" };
    // 多条件更新
    var newData = {
        $set: {
            bannerImg01: req.body.form.bannerImg01,// 轮播图
            bannerImg02: req.body.form.bannerImg02,// 轮播图
            bannerImg03: req.body.form.bannerImg03,// 轮播图

            boxImg01: req.body.form.boxImg01,// 剧照图
            boxImg02: req.body.form.boxImg02,// 剧照图
            boxImg03: req.body.form.boxImg03,// 剧照图
            boxImg04: req.body.form.boxImg04,// 剧照图
            boxImg05: req.body.form.boxImg05,// 剧照图
            boxImg06: req.body.form.boxImg06,// 剧照图
            boxImg07: req.body.form.boxImg07,// 剧照图
            boxImg08: req.body.form.boxImg08,// 剧照图
            boxImg09: req.body.form.boxImg09,// 剧照图
            boxImg10: req.body.form.boxImg10,// 剧照图
            boxImg11: req.body.form.boxImg11,// 剧照图
            boxImg12: req.body.form.boxImg12,// 剧照图
            boxImg13: req.body.form.boxImg13,// 剧照图
            boxImg14: req.body.form.boxImg14,// 剧照图
            boxImg15: req.body.form.boxImg15,// 剧照图
            boxImg16: req.body.form.boxImg16,// 剧照图
            boxImg17: req.body.form.boxImg17,// 剧照图
            boxImg18: req.body.form.boxImg18,// 剧照图
            boxImg19: req.body.form.boxImg19,// 剧照图
            boxImg20: req.body.form.boxImg20,// 剧照图

            boxTitle01: req.body.form.boxTitle01,
            boxTitle02: req.body.form.boxTitle02,
            boxTitle03: req.body.form.boxTitle03,
            boxTitle04: req.body.form.boxTitle04,
            boxText01: req.body.form.boxText01,
            boxText02: req.body.form.boxText02,
            boxText03: req.body.form.boxText03,
            boxText04: req.body.form.boxText04,

            music: req.body.form.music,// 音乐
            video: req.body.form.video,// 视频    
            title: req.body.form.title,// 标题    
        }
    };
    models.INDEX_DATA.update(oldValue, newData, { upsert: true }, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data
            });
        }
    });
});
// 读取首页
router.get('/api/index/get', (req, res) => {
    models.INDEX_DATA.find((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data
            });
        }
    });
});
// 修改公众号轮播图
router.post('/api/wechatimg/create', (req, res) => {
    console.log('进来了')
    // 原数据字段值
    var oldValue = { title: "index" };
    // 多条件更新
    var newData = {
        $set: {
            bannerImg01: req.body.form.bannerImg01,// 轮播图
            bannerImg02: req.body.form.bannerImg02,// 轮播图
            bannerImg03: req.body.form.bannerImg03,// 轮播图
        }
    };
    models.WECHAT_IMG_DATA.update(oldValue, newData, { upsert: true }, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data
            });
        }
    });
});
// 读取公众号轮播图
router.get('/api/wechatimg/get', (req, res) => {
    models.WECHAT_IMG_DATA.find((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data
            });
        }
    });
});
// 创建微信公众号
router.post('/api/wechat/create', (req, res) => {
    let NEWS_ADD_DATA = new models.WECHAT_DATA(req.body.form);
    NEWS_ADD_DATA.save((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data
            });
        }
    });
});
// 读取微信公众号
router.get('/api/wechat/get', (req, res) => {
    var s = parseInt(req.query.s);
    var n = parseInt(req.query.n);
    var l;
    models.WECHAT_DATA.count((err, data) => {
        if (err) {
            res.send(err);
        } else {
            l = data
        }
    });
    models.WECHAT_DATA.find().sort({ 'date': -1 }).skip(s * (n - 1)).limit(s).exec((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data,
                page: {
                    size: s,
                    num: n,
                    length: l,
                }
            });
        }
    });
});
// 删除微信公众号
router.get('/api/wechat/delete', (req, res) => {
    models.WECHAT_DATA.findOneAndRemove({ _id: req.query.id }).exec((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                id: req.query.id,
                message: '删除数据成功'
            });
        }
    });
});

// 创建新闻
router.post('/api/news/create', (req, res) => {
    let NEWS_ADD_DATA = new models.NEWS_DATA(req.body.form);
    NEWS_ADD_DATA.save((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data
            });
        }
    });
});
// 读取新闻
router.get('/api/news/get', (req, res) => {
    var s = parseInt(req.query.s);
    var n = parseInt(req.query.n);
    var l;
    var t = {};
    var sort = { 'date': -1 }
    if (req.query.t) {
        t = { "type": req.query.t }
    }
    if (req.query.index) {
        sort = { 'index': -1 }
    }
    models.NEWS_DATA.find(t).count((err, data) => {
        if (err) {
            res.send(err);
        } else {
            l = data
        }
    });
    models.NEWS_DATA.find(t).sort(sort).skip(s * (n - 1)).limit(s).exec((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data,
                page: {
                    size: s,
                    num: n,
                    length: l,
                }
            });
        }
    });

});
// 删除新闻
router.get('/api/news/delete', (req, res) => {
    models.NEWS_DATA.findOneAndRemove({ _id: req.query.id }).exec((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                id: req.query.id,
                message: '删除数据成功'
            });
        }
    });
});

// 创建投资者关系
router.post('/api/invest/create', (req, res) => {
    let addInvest = new models.INVEST_DATA(req.body.form);
    addInvest.save((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data
            });
        }
    });
});
// 读取投资者关系
router.get('/api/invest/get', (req, res) => {
    var s = parseInt(req.query.s);
    var n = parseInt(req.query.n);
    var l;
    models.INVEST_DATA.count((err, data) => {
        if (err) {
            res.send(err);
        } else {
            l = data
        }
    });
    models.INVEST_DATA.find().sort({ 'date': -1 }).skip(s * (n - 1)).limit(s).exec((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data,
                page: {
                    size: s,
                    num: n,
                    length: l,
                }
            });
        }
    });
});
// 删除投资者关系
router.get('/api/invest/delete', (req, res) => {
    models.INVEST_DATA.findOneAndRemove({ _id: req.query.id }).exec((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                id: req.query.id,
                message: '删除数据成功'
            });
        }
    });
});

// 创建作品
router.post('/api/work/create', (req, res) => {
    let addWork = new models.WORK_DATA(req.body.form);
    addWork.save((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data
            });
        }
    });
});
// 读取作品
router.get('/api/work/get', (req, res) => {
    var s = parseInt(req.query.s);
    var n = parseInt(req.query.n);
    var l;
    var sort = { 'date': -1 }
    if (req.query.index) {
        sort = { 'index': -1 }
    }
    models.WORK_DATA.count((err, data) => {
        if (err) {
            res.send(err);
        } else {
            l = data
        }
    });
    models.WORK_DATA.find().sort(sort).skip(s * (n - 1)).limit(s).exec((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data,
                page: {
                    size: s,
                    num: n,
                    length: l,
                }
            });
        }
    });
});
// 删除作品
router.get('/api/work/delete', (req, res) => {
    models.WORK_DATA.findOneAndRemove({ _id: req.query.id }).exec((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                id: req.query.id,
                message: '删除数据成功'
            });
        }
    });
});

// 创建招聘信息
router.post('/api/contact/create', (req, res) => {
    let addContact = new models.CONTACT_DATA(req.body.form);
    addContact.save((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data
            });
        }
    });
});
// 读取招聘信息
router.get('/api/contact/get', (req, res) => {
    models.CONTACT_DATA.find((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data
            });
        }
    });
});
// 删除招聘信息
router.get('/api/contact/delete', (req, res) => {
    models.CONTACT_DATA.findOneAndRemove({ _id: req.query.id }).exec((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                id: req.query.id,
                message: '删除数据成功'
            });
        }
    });
});
// 读取关于我们
router.get('/api/about/get', (req, res) => {
    models.ABOUT_DATA.find((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data
            });
        }
    });
});
// 修改关于我们
router.post('/api/about/create', (req, res) => {
    console.log(req.body.form.gsjs)
    // 原数据字段值
    var oldValue = { title: "index" };
    // 多条件更新
    var newData = {
        $set: {
            gsjs: req.body.form.gsjs,// 公司介绍
            gszz: req.body.form.gszz,// 公司宗旨
            ywfw: req.body.form.ywfw,// 业务范围
            gstd: req.body.form.gstd,// 公司团队
            fzzlTitle01: req.body.form.fzzlTitle01,
            fzzlContent01: req.body.form.fzzlContent01,
            fzzlTitle02: req.body.form.fzzlTitle02,
            fzzlContent02: req.body.form.fzzlContent02,
            fzzlTitle03: req.body.form.fzzlTitle03,
            fzzlContent03: req.body.form.fzzlContent03,
        }
    };
    models.ABOUT_DATA.update(oldValue, newData, { upsert: true }, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data
            });
        }
    });
});
// 读取微信公众号
router.get('/api/about/table/get', (req, res) => {
    models.ABOUT_TABLE_DATA.find().sort({ 'date': -1 }).exec((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data,
            });
        }
    });
});
// 创建微信公众号
router.post('/api/about/table/create', (req, res) => {
    let ABOUT_TABLE_DATA = new models.ABOUT_TABLE_DATA(req.body.form);
    ABOUT_TABLE_DATA.save((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                data: data
            });
        }
    });
});
// 删除微信公众号
router.get('/api/about/table/delete', (req, res) => {
    models.ABOUT_TABLE_DATA.findOneAndRemove({ _id: req.query.id }).exec((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send({
                code: 0,
                id: req.query.id,
                message: '删除数据成功'
            });
        }
    });
});

module.exports = router;