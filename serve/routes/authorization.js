const jwt = require('jsonwebtoken');

const secretKey = 'secretKey';

// 生成token
module.exports.generateToken = function (payload) {
    console.log(payload);
    const token =
        'Bearer ' +
        jwt.sign(payload, secretKey, {
            expiresIn: 60 * 60 * 24 * 7
        });
    return token;
};

// 验证token
module.exports.verifyToken = function (req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, secretKey, function (err, decoded) {
        if (err) {
            return res.json({code: '404', msg: 'token无效'});
        }
        next();
    });
};
