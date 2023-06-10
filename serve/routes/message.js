var express = require('express');
var router = express.Router();
var QcloudSms = require('qcloudsms_js');
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

router.get('/', function (req, res, next) {
    const {phoneNumber, verificationCode} = req.query;
    // console.log(req.query);
    // function callback(err, ress, resData) {
    //     console.log(err);
    //     console.log(ress);
    //     if (err) {
    //         console.log('error' + error);
    //         // res.send('respond with a resource');
    //     } else {
    //         // console.log('request data: ', res.req);
    //         // console.log('response data: ', resData);
    //         // console.log('request data' + JSON.stringify(res.req));
    //         res.send('respond with a resource');
    //     }
    // }

    // // 指定模板ID单发短信
    // var ssender = qcloudsms.SmsSingleSender();
    // // var params = ['5678'];
    // ssender.sendWithParam(86, phoneNumber, templateId, [verificationCode], smsSign, '', '', callback); // 签名参数不能为空串
    // // res.send('respond with a resourcejkldjf');
    // console.log('sdf');
});

module.exports = router;
