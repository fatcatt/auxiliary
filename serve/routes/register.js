var express = require('express');
var router = express.Router();
const pool = require('../config/db.js');
const {SuccessModel, ErrorModel} = require('../model/resModel');
const {generateToken} = require('./authorization');
/* GET users listing. */
router.post('/', function (req, res, next) {
    // 首先查询 是否已经有注册过，有注册过提示直接登录
    // 没有注册过，注册
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(err);
        } else {
            console.log(req.body.number);
            connection.query(`SELECT * FROM registered WHERE phoneNumber = ${req.body.number}`, (err, users) => {
                if (err) {
                    res.json(new ErrorModel(err.sqlMessage));
                } else {
                    if (users.length) {
                        res.json(new ErrorModel('已注册，请直接登录'));
                    } else {
                        connection.query(
                            `INSERT INTO registered (username, password, phoneNumber) VALUES ('${req.body.user}',${req.body.password},${req.body.number})`,
                            (err, users) => {
                                if (err) {
                                    res.json(new ErrorModel(err));
                                } else {
                                    res.json(new SuccessModel('注册成功'));
                                }
                            }
                        );
                    }
                }
            });
        }
    });
});

module.exports = router;
