var express = require('express');
var router = express.Router();
const fs = require('fs');
let { serverAddr } = require('../config.json')


router.get('/getnotificationtoday', function (req, res, next) {

    res.json({
        "status": 200,
        "msg": "getnotificationtoday",
        "data": [
            {
                name: 'JameS',
                iamge: `${serverAddr}/images/avatar/22.jpg`,
                time: ' 2 hours ago',
                comment: '"Fantastic food and atmosphere! Each bite offers a burstof flavor, making it a delightful dining experience."',
            },
            {
                name: 'Kelly',
                iamge: `${serverAddr}/images/avatar/23.jpg`,
                time: ' 2 hours ago',
                comment: '"Fantastic food and atmosphere! Each bite offers a burstof flavor, making it a delightful dining experience."',
            },
        ]
    })
});
router.get('/getnotificationweek', function (req, res, next) {

    res.json({
        "status": 200,
        "msg": "getnotificationtoday",
        "data": [
            {
                name: 'JameS',
                iamge: `${serverAddr}/images/avatar/22.jpg`,
                time: ' 2 hours ago',
                comment: '"Fantastic food and atmosphere! Each bite offers a burstof flavor, making it a delightful dining experience."',
            },
            {
                name: 'Kelly',
                iamge: `${serverAddr}/images/avatar/23.jpg`,
                time: ' 2 hours ago',
                comment: '"Fantastic food and atmosphere! Each bite offers a burstof flavor, making it a delightful dining experience."',
            },
            {
                name: 'Kelly',
                iamge: `${serverAddr}/images/avatar/23.jpg`,
                time: ' 2 hours ago',
                comment: '"Fantastic food and atmosphere! Each bite offers a burstof flavor, making it a delightful dining experience."',
            }
        ]
    })
});

module.exports = router;
