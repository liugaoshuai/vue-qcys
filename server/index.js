// 引入编写好的api
const api = require('./api');
// 引入文件模块
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
// 引入处理post数据的模块
const bodyParser = require('body-parser');
// 引入Express
const express = require('express');
const app = express();
const models = require('./db');

// web网址地址
app.set('views', '../src/views/pages')
app.set('view engine', 'jade')
app.use(express.static(__dirname + '/public'))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(api);

// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
// app.use(express.static(path.resolve(__dirname, '../dist')))
// // 因为是单页应用 所有请求都走/dist/index.html
// app.get('*', function(req, res) {
//     const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
//     res.send(html)
// })

// 首页
app.get('/', function (req, res) {
    models.INDEX_DATA.findOne({ 'title': 'index' }, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.render('index', {
                title: '千乘影视官网首页',
                data: data,
                news: [
                    {
                        id: 1,
                        nav: "中国年度新锐榜 电视剧《麻雀》与李易峰摘冠",
                        con: "年度电视剧被新型谍战剧《麻雀》和《小别离》共同摘取，在《麻雀》中出演男主角的李易峰获得了年度艺人，对于电视创作及演员本身，也都有不同寻常的价值和意义。"
                    }, {
                        id: 1,
                        nav: "中国年度新锐榜 电视剧《麻雀》与李易峰摘冠",
                        con: "年度电视剧被新型谍战剧《麻雀》和《小别离》共同摘取，在《麻雀》中出演男主角的李易峰获得了年度艺人，对于电视创作及演员本身，也都有不同寻常的价值和意义。"
                    }
                ],
                wx: [
                    {
                        id: 1,
                        nav: "中国年度新锐榜 电视剧《麻雀》与李易峰摘冠",
                        con: "年度电视剧被新型谍战剧《麻雀》和《小别离》共同摘取，在《麻雀》中出演男主角的李易峰获得了年度艺人，对于电视创作及演员本身，也都有不同寻常的价值和意义。"
                    }, {
                        id: 1,
                        nav: "中国年度新锐榜 电视剧《麻雀》与李易峰摘冠",
                        con: "年度电视剧被新型谍战剧《麻雀》和《小别离》共同摘取，在《麻雀》中出演男主角的李易峰获得了年度艺人，对于电视创作及演员本身，也都有不同寻常的价值和意义。"
                    }
                ]
                    ``
            })
        }
    });
})
// 新闻页
app.get('/news', function (req, res) {
    models.NEWS_DATA.find((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.render('news', {
                title: '千乘影视官网新闻展示页',
                news_data_arr: data,
                news: [
                    {
                        id: 1,
                        nav: "中国年度新锐榜 电视剧《麻雀》与李易峰摘冠",
                        con: "年度电视剧被新型谍战剧《麻雀》和《小别离》共同摘取，在《麻雀》中出演男主角的李易峰获得了年度艺人，对于电视创作及演员本身，也都有不同寻常的价值和意义。"
                    }, {
                        id: 1,
                        nav: "中国年度新锐榜 电视剧《麻雀》与李易峰摘冠",
                        con: "年度电视剧被新型谍战剧《麻雀》和《小别离》共同摘取，在《麻雀》中出演男主角的李易峰获得了年度艺人，对于电视创作及演员本身，也都有不同寻常的价值和意义。"
                    }
                ],
                wx: [
                    {
                        id: 1,
                        nav: "中国年度新锐榜 电视剧《麻雀》与李易峰摘冠",
                        con: "年度电视剧被新型谍战剧《麻雀》和《小别离》共同摘取，在《麻雀》中出演男主角的李易峰获得了年度艺人，对于电视创作及演员本身，也都有不同寻常的价值和意义。"
                    }, {
                        id: 1,
                        nav: "中国年度新锐榜 电视剧《麻雀》与李易峰摘冠",
                        con: "年度电视剧被新型谍战剧《麻雀》和《小别离》共同摘取，在《麻雀》中出演男主角的李易峰获得了年度艺人，对于电视创作及演员本身，也都有不同寻常的价值和意义。"
                    }
                ]
            })
        }
    });

})
// 新闻详情页
app.get('/news/detail/:id', function (req, res) {
    var arr = [];
    models.NEWS_DATA.find((err, data) => {
        if (err) {
            res.send(err);
        } else {
            arr = data;
        }
    });
    models.NEWS_DATA.findOne({ '_id': req.params.id }, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            console.log(data)
            res.render('newsDetail', {
                title: '千乘影视官网新闻展示页',
                news_detail_obj: data,
                cla: ['最新新闻', '新剧新鲜事', '明星娱乐', '行业聚焦'],
                news_datail_arr: arr
            })
        }
    });
})
// 作品页
app.get('/works', function (req, res) {
    res.render('works', {
        title: '千乘影视官网作品展示页',
        list: [
            {
                name: '麻雀',
                actor: '李易峰，周冬雨',
                account: '汪伪组件由前国民党军官毕忠良（张鲁一饰）担任处长的特别行动处为虎作伥一直潜伏在毕忠良身边，代号麻雀的中共党员陈深，与组织暂时失去联系。'
            },
            {
                name: '麻雀',
                actor: '李易峰，周冬雨',
                account: '汪伪组件由前国民党军官毕忠良（张鲁一饰）担任处长的特别行动处为虎作伥一直潜伏在毕忠良身边，代号麻雀的中共党员陈深，与组织暂时失去联系。'
            },
            {
                name: '麻雀',
                actor: '李易峰，周冬雨',
                account: '汪伪组件由前国民党军官毕忠良（张鲁一饰）担任处长的特别行动处为虎作伥一直潜伏在毕忠良身边，代号麻雀的中共党员陈深，与组织暂时失去联系。'
            },
            {
                name: '麻雀',
                actor: '李易峰，周冬雨',
                account: '汪伪组件由前国民党军官毕忠良（张鲁一饰）担任处长的特别行动处为虎作伥一直潜伏在毕忠良身边，代号麻雀的中共党员陈深，与组织暂时失去联系。'
            },
            {
                name: '麻雀',
                actor: '李易峰，周冬雨',
                account: '汪伪组件由前国民党军官毕忠良（张鲁一饰）担任处长的特别行动处为虎作伥一直潜伏在毕忠良身边，代号麻雀的中共党员陈深，与组织暂时失去联系。'
            },
            {
                name: '麻雀',
                actor: '李易峰，周冬雨',
                account: '汪伪组件由前国民党军官毕忠良（张鲁一饰）担任处长的特别行动处为虎作伥一直潜伏在毕忠良身边，代号麻雀的中共党员陈深，与组织暂时失去联系。'
            },
            {
                name: '麻雀',
                actor: '李易峰，周冬雨',
                account: '汪伪组件由前国民党军官毕忠良（张鲁一饰）担任处长的特别行动处为虎作伥一直潜伏在毕忠良身边，代号麻雀的中共党员陈深，与组织暂时失去联系。'
            },
            {
                name: '麻雀',
                actor: '李易峰，周冬雨',
                account: '汪伪组件由前国民党军官毕忠良（张鲁一饰）担任处长的特别行动处为虎作伥一直潜伏在毕忠良身边，代号麻雀的中共党员陈深，与组织暂时失去联系。'
            },
        ]
    })
})
// 作品详情页
app.get('/works/detail/:id', function (req, res) {
    res.render('worksDetail', {
        title: '千乘影视官网作品详情页',
        data: {
            workMessageData: {
                name: "麻雀(Sparrow)",
                tag: '民国',
                producer: '周之光',
                scenario: '海飞',
                director: '周远舟',
                starring: '李易峰',
                filmer: '钟聪海',
                time: '2016-09-05',
                num: '69',
                length: '45',
                platform: '优酷、土豆、腾讯视频',
                original: '麻雀',
                author: '海飞',
                broadcasting: '湖南卫视',
            },
            introduction: '1940年3月，汪伪政府宣布成立。侵华日军在上海大肆搜捕抗日志士，汪伪组建由前国民党军官毕忠良（张鲁一饰）担任处长的“特别行动处”为虎作伥。一直潜伏在毕忠良身边，代号“麻雀”的中共党员陈深（李易峰饰），与组织暂时失去联系。置身虎视狼顾的险境中，陈深信仰坚定，冒死营救上线“宰相”及抗日志士。毕忠良老奸巨猾，虽与救命恩人陈深“情同兄弟”，却对其产生怀疑，设重重陷阱步步紧逼。“宰相”牺牲后，陈深终于找到新上线“医生”并受命拿到日军代号为“归零”的重要作战计划。陈深的昔日恋人徐碧城（周冬雨饰），与另一国军情报人员唐山海（张若昀饰）假扮夫妻潜伏进特别行动处，在多次行动中给陈深制造麻烦和危机。智计过人的陈深身处连环杀机之中，巧妙利用日本侵略者、汪伪分子等各派势力之间的微妙缝隙，同时也付出了巨大的代价，最终成功地获取了“归零”计划，挫败了日本侵略者的阴谋。',
            actorData: [
                {
                    name: '李易峰',
                    war: 'liyifeng',
                    role: '陈深',
                },
                {
                    name: '李易峰',
                    war: 'liyifeng',
                    role: '陈深',
                },
                {
                    name: '李易峰',
                    war: 'liyifeng',
                    role: '陈深',
                },
                {
                    name: '李易峰',
                    war: 'liyifeng',
                    role: '陈深',
                }
            ]

        }
    })
})
// 后台列表页
app.get('/node', function (req, res) {
    res.render('nodeList', {
        title: '后台列表页'
    })
})
// 后台详情页
app.get('/node/detail/:id', function (req, res) {
    res.render('nodeDetail', {
        title: '后台详情页'
    })
})
// 投资者关系列表页
app.get('/relations', function (req, res) {
    res.render('relations', {
        title: '投资者关系列表页',
        list: [{
            title: '千乘影视进入创业板IPO初审名单',
            createTime: '2016-12-21',
            editName: '千乘影视',
            con: '根据证监会公布的IPO在审名企业基本信息情况表，千乘影视公司首次出现在创业板初审名单。'
        }, {
            title: '千乘影视进入创业板IPO初审名单',
            createTime: '2016-12-21',
            editName: '千乘影视',
            con: '根据证监会公布的IPO在审名企业基本信息情况表，千乘影视公司首次出现在创业板初审名单。'
        }, {
            title: '千乘影视进入创业板IPO初审名单',
            createTime: '2016-12-21',
            editName: '千乘影视',
            con: '根据证监会公布的IPO在审名企业基本信息情况表，千乘影视公司首次出现在创业板初审名单。'
        },],
        cla: ['最新新闻', '新剧新鲜事', '明星娱乐', '行业聚焦'],
        news: [
            '谍战剧再掀热潮，麻雀“异军突起”树立新标杆。',
            '谍战剧再掀热潮，麻雀“异军突起”树立新标杆。',
            '谍战剧再掀热潮，麻雀“异军突起”树立新标杆。',
            '谍战剧再掀热潮，麻雀“异军突起”树立新标杆。',
            '谍战剧再掀热潮，麻雀“异军突起”树立新标杆。',
            '谍战剧再掀热潮，麻雀“异军突起”树立新标杆。'
        ]
    })
})
// 投资者关系详情页
app.get('/relations/detail/:id', function (req, res) {
    res.render('relationsDetail', {
        title: '千乘影视官网投资者关系详情页',
        data: {
            title: '千乘影视进入创业板IPO初审名单',
            createTime: '2016-12-21',
            editName: '千乘影视',
            con: '根据证监会公布的IPO在审名企业基本信息情况表，千乘影视公司首次出现在创业板初审名单。'
        },
        cla: ['最新新闻', '新剧新鲜事', '明星娱乐', '行业聚焦'],
        news: [
            '千乘影视进入创业板IPO初审名单',
            '千乘影视进入创业板IPO初审名单',
            '千乘影视进入创业板IPO初审名单',
            '千乘影视进入创业板IPO初审名单',
            '千乘影视进入创业板IPO初审名单',
            '千乘影视进入创业板IPO初审名单'
        ]
    })
})

// 微信公众号列表页
app.get('/wechat', function (req, res) {
    res.render('wechat', {
        title: '微信公众号列表页',
        data: {
            typeA: [
                {
                    title: "多少人以友情的名义爱着一个人？",
                    date: '2017-08-01',
                    con: '如果你身边也有这样一个人，友情以上恋人未满的角色，曾玩笑般的试探，到了几岁，你未嫁我未娶，那我们就在一起，不如打开彼此的心情。'
                }, {
                    title: "多少人以友情的名义爱着一个人？",
                    date: '2017-08-01',
                    con: '如果你身边也有这样一个人，友情以上恋人未满的角色，曾玩笑般的试探，到了几岁，你未嫁我未娶，那我们就在一起，不如打开彼此的心情。'
                }, {
                    title: "多少人以友情的名义爱着一个人？",
                    date: '2017-08-01',
                    con: '如果你身边也有这样一个人，友情以上恋人未满的角色，曾玩笑般的试探，到了几岁，你未嫁我未娶，那我们就在一起，不如打开彼此的心情。'
                }, {
                    title: "多少人以友情的名义爱着一个人？",
                    date: '2017-08-01',
                    con: '如果你身边也有这样一个人，友情以上恋人未满的角色，曾玩笑般的试探，到了几岁，你未嫁我未娶，那我们就在一起，不如打开彼此的心情。'
                },
            ],
            typeB: [
                {
                    title: "多少人以友情的名义爱着一个人？",
                    date: '2017-08-01',
                    con: '如果你身边也有这样一个人，友情以上恋人未满的角色，曾玩笑般的试探，到了几岁，你未嫁我未娶，那我们就在一起，不如打开彼此的心情。'
                }, {
                    title: "多少人以友情的名义爱着一个人？",
                    date: '2017-08-01',
                    con: '如果你身边也有这样一个人，友情以上恋人未满的角色，曾玩笑般的试探，到了几岁，你未嫁我未娶，那我们就在一起，不如打开彼此的心情。'
                }, {
                    title: "多少人以友情的名义爱着一个人？",
                    date: '2017-08-01',
                    con: '如果你身边也有这样一个人，友情以上恋人未满的角色，曾玩笑般的试探，到了几岁，你未嫁我未娶，那我们就在一起，不如打开彼此的心情。'
                }, {
                    title: "多少人以友情的名义爱着一个人？",
                    date: '2017-08-01',
                    con: '如果你身边也有这样一个人，友情以上恋人未满的角色，曾玩笑般的试探，到了几岁，你未嫁我未娶，那我们就在一起，不如打开彼此的心情。'
                },
            ]
        }
    })
})
// 微信公众号详情页
app.get('/wechat/detail/:id', function (req, res) {
    res.render('wechatDetail', {
        title: '微信公众号详情页',
    })
})
// 投资者关系详情页
app.get('/contact', function (req, res) {
    res.render('contact', {
        title: '千乘影视官网联系我们页',
        data: [
            {
                name: '美工设计'
            }, {
                name: '电视剧发行'
            }, {
                name: '新媒体策划'
            }
        ]
    })
})

// 监听8088端口
app.listen(8088);
console.log('success listen 8088');