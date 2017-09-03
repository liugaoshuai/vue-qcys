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

app.use(bodyParser.json({limit: '100000kb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(api);
//handle request entity too large


// 访问静态资源文件 这里是访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '/vue-qcys/dist')))
// 因为是单页应用 所有请求都走/dist/index.html
app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '/vue-qcys/dist/index.html'), 'utf-8')
    res.send(html)
})

// 监听8088端口
app.listen(8080);
console.log('success listen 8088');