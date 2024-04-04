const {SuccessModel, ErrorModel} = require('../model/resModel');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const auxConfig = {
    host: '124.221.158.62',
    port: 3306, //端口号
    database: 'auxiliary',
    user: 'root',
    password: 'Gaocanyixue123.'
};
var pool = mysql.createPool(auxConfig);
/* GET home page. */
router.get('/', (request, res) => {
    pool.getConnection(function (err, connection) {
        if (err) {
            resizeBy.send(err);
        } else {
            connection.query(`SELECT * FROM riyun;`, (err, data) => {
                if (err) {
                    res.json(new ErrorModel(err.sqlMessage));
                } else {
                    res.json(new SuccessModel(data));
                }
            });
        }
    });
});

module.exports = router;
