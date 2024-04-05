var express = require('express');
var mysql = require('mysql');
var router = express.Router();
const {SuccessModel, ErrorModel} = require('../model/resModel');

// 假设你的数据库配置文件和响应模型已经设置好
const prodConfig = {
    host: '124.221.158.62',
    port: 3306, //端口号
    database: 'auxiliary',
    user: 'root',
    password: 'Gaocanyixue123.'
};
var pool = mysql.createPool(prodConfig);

router.post('/', function (req, res, next) {
    pool.getConnection(function (err, connection) {
        if (err) {
            return res.json(new ErrorModel(err.message)); // 使用返回错误模型
        }

        const query = `SELECT * FROM riyun WHERE id = 1`; // 根据实际情况调整SQL语句
        connection.query(query, (err, result) => {
            connection.release(); // 释放连接
            if (err) {
                res.json(new ErrorModel(err.sqlMessage));
            } else {
                // 假设我们只期待返回一行数据
                if (result.length > 0) {
                    res.json(new SuccessModel(result[0])); // 发送第一行数据
                } else {
                    res.json(new ErrorModel('No data found'));
                }
            }
        });
    });
});

module.exports = router;
