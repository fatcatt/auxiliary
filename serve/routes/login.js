var express = require('express');
var router = express.Router();
const pool = require('../config/db.js');
const {SuccessModel, ErrorModel} = require('../model/resModel');
const {generateToken} = require('./authorization');
/* GET users listing. */
router.post('/', function (req, res, next) {
    // console.log(req.body);
    pool.getConnection(function (err, connection) {
        if (err) {
            res.send(err);
        } else {
            connection.query(`SELECT * FROM registered WHERE phoneNumber = ${req.body.number} and password = ${req.body.password}`, (err, users) => {
                if (err) {
                    console.log(err);
                    console.log(new ErrorModel(err.sqlMessage));
                    res.json(new ErrorModel(err.sqlMessage));
                } else {
                    if (users.length) {
                        const token = generateToken({username: JSON.parse(JSON.stringify(users))[0].username});
                        console.log(JSON.parse(JSON.stringify(users))[0].username);
                        res.json(new SuccessModel(token));
                    } else {
                        res.json(new ErrorModel('用户名/密码错误，请重新输入'));
                    }
                }
            });
        }
    });
});

module.exports = router;
