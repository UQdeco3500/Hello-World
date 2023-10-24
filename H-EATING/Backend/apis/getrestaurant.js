const { serverAddr } = require("../config.json")
var express = require('express');
var router = express.Router();


router.get('/getrestaurant', function (req, res, next) {
    res.json({
        "status": 200,
        "msg": "getrestaurant接口调用成功！",
        "data": [
            {
                name: 'Thai',
                iamge: `${serverAddr}/images/5.jpg`
            },
            {
                name: 'Asian',
                iamge: `${serverAddr}/images/6.jpg`,
            },
            {
                name: 'Italian',
                iamge: `${serverAddr}/images/7.jpg`,
            },
        ]
    })
});

module.exports = router;
