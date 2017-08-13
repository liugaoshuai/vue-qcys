// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

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