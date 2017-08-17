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

            workImg01: req.body.form.workImg01,// 作品图
            workImg02: req.body.form.workImg02,// 作品图
            workImg03: req.body.form.workImg03,// 作品图
            workImg04: req.body.form.workImg04,// 作品图
            workImg05: req.body.form.workImg05,// 作品图
            workImg06: req.body.form.workImg06,// 作品图

            boxImg01: req.body.form.boxImg01,// 剧照图
            boxImg02: req.body.form.boxImg02,// 剧照图
            boxImg03: req.body.form.boxImg03,// 剧照图
            boxImg04: req.body.form.boxImg04,// 剧照图

            music: req.body.form.music,// 音乐
            video: req.body.form.video,// 视频    
            title: req.body.form.title,// 标题    
        }
    };
    models.INDEX_DATA.update(oldValue, newData, function (err, data) {
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
    models.NEWS_DATA.find((err, data) => {
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
// 读取类别新闻
router.get('/api/news/get/type', (req, res) => {
    console.log(req.query.type)
    models.NEWS_DATA.find({"type": req.query.type},(err, data) => {
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
    models.INVEST_DATA.find((err, data) => {
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


module.exports = router;