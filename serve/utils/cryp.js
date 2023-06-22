const {Result} = require('antd');
const crypto = require('crypto');

// 密匙
const SECRET_KEY = 'QWER_lskdjf_##_fjkssl_999';

// md5加密
// digest('hex') 把输出变成十六进制
function md5(content) {
    let md5 = crypto.createHash('md5');
    return md5.update(content).digest('hex');
}

// 加密函数
module.exports.genPassword = function (password) {
    const str = `password=${password}&key=${SECRET_KEY}`;
    return md5(str);
};
