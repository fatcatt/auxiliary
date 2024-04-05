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
    const dataToUpdate = req.body; // 假设数据格式是 {mu: 'value', huo: 'value', ...}
    console.log(dataToUpdate);

    pool.getConnection(function (err, connection) {
        if (err) {
            return res.json(new ErrorModel(err.message)); // 使用返回错误模型
        }

        // 构造INSERT INTO ... ON DUPLICATE KEY UPDATE语句
        let fieldsToUpdate = Object.keys(dataToUpdate)
            .map((key) => `${connection.escapeId(key)}=VALUES(${connection.escapeId(key)})`)
            .join(', ');
        let insertQuery = `INSERT INTO riyun (id, ${Object.keys(dataToUpdate)
            .map((k) => connection.escapeId(k))
            .join(', ')}) VALUES (1, ${Object.values(dataToUpdate)
            .map((v) => '?')
            .join(', ')}) ON DUPLICATE KEY UPDATE ${fieldsToUpdate}`;

        connection.query(insertQuery, Object.values(dataToUpdate), (err, result) => {
            connection.release();
            if (err) {
                return res.json(new ErrorModel(err.sqlMessage));
            }
            if (result.affectedRows > 0) {
                res.json(new SuccessModel('Data updated successfully'));
            } else {
                res.json(new ErrorModel('No data was updated'));
            }
        });
    });
});

module.exports = router;
