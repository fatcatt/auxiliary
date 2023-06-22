var express = require('express');
var mysql = require('mysql');
var router = express.Router();
const pool = require('../config/db.js');
const {SuccessModel, ErrorModel} = require('../model/resModel');
const {generateToken} = require('./authorization');
const {genPassword} = require('../utils/cryp.js');
const escape = mysql.escape;
/* GET users listing. */
router.post('/', function (req, res, next) {
    // console.log(req.body);
    const number = escape(req.body.number);
    const password = genPassword(req.body.password);
    const password_esc = escape(req.body.password);
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(err);
        } else {
            connection.query(`SELECT * FROM registered WHERE phoneNumber = ${number} and password = ${password_esc}`, (err, users) => {
                if (err) {
                    res.json(new ErrorModel(err.sqlMessage));
                } else {
                    if (users.length) {
                        const token = generateToken({username: JSON.parse(JSON.stringify(users))[0].username});
                        res.json(new SuccessModel(token));
                    } else {
                        res.json(new ErrorModel('用户名/密码错误，请重新输入'));
                    }
                }
            });
        }
    });
});
router.post('/verified', function (req, res, next) {
    // console.log(req.body);
    const number = escape(req.body.number);
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(err);
        } else {
            connection.query(`SELECT * FROM registered WHERE phoneNumber = ${number}`, (err, users) => {
                if (err) {
                    res.json(new ErrorModel(err.sqlMessage));
                } else {
                    if (users.length) {
                        const token = generateToken({username: JSON.parse(JSON.stringify(users))[0].username});
                        res.json(new SuccessModel(token));
                    } else {
                        res.json(new ErrorModel('用户未注册，请先注册'));
                    }
                }
            });
        }
    });
});

module.exports = router;
