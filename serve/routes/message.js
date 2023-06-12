var express = require('express');
var router = express.Router();
var QcloudSms = require('qcloudsms_js');
const {SuccessModel, ErrorModel} = require('../model/resModel');
// 短信应用SDK AppID
var appid = 1400828298;
// 短信应用SDK AppKey
var appkey = '806f63bbc768030d6593e97c9860cb94';
var phoneNumber = '17277749242';
// 短信模板ID，需要在短信应用中申请
var templateId = 1823547;
// 签名
var smsSign = '古籍网';

// 实例化QcloudSms
var qcloudsms = QcloudSms(appid, appkey);

router.post('/', function (req, res, next) {
    const {phoneNumber, verificationCode} = req.body;
    console.log(req.body);
    function callback(err, ress, resData) {
        if (err) {
            // console.log('error' + error);
            // res.send('respond with a resource');
            res.json(new ErrorModel('发送失败，请稍后，或向我们反馈'));
        } else {
            res.json(new SuccessModel('短信已发送'));
        }
    }

    // 指定模板ID单发短信
    var ssender = qcloudsms.SmsSingleSender();
    ssender.sendWithParam(86, phoneNumber, templateId, [verificationCode], smsSign, '', '', callback); // 签名参数不能为空串
});

module.exports = router;
