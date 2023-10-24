var express = require('express');
var router = express.Router();
let { serverAddr } = require('../config.json')


router.get('/getfollowed', function (req, res, next) {
    res.json({
        "status": 200,
        "msg": "getfollowed",
        "data": 
        [
        {
            name: 'Ariel',
            iamge: `${serverAddr}/images/8.jpg`,
            avatar: `${serverAddr}/images/avatar/18.jpg`,
            description: 'This weeks meal prep staple is simple & love it!',
            count: 26,
        },
        {
            name: 'Emma',
            iamge: `${serverAddr}/images/9.jpg`,
            avatar: `${serverAddr}/images/avatar/19.jpg`,
            description: 'Healthy Eating A Week of Fat Loss Meals GET!',
            count: 12,
        },
        {
            name: 'Ethan',
            iamge: `${serverAddr}/images/10.jpg`,
            avatar: `${serverAddr}/images/avatar/20.jpg`,
            description: 'Study Abroad RecipeslOne dish for one person',
            count: 137,
        },
        {
            name: 'William',
            iamge: `${serverAddr}/images/11.jpg`,
            avatar: `${serverAddr}/images/avatar/21.jpg`,
            description: 'Healthy Lunch Set',
            count: 98,
        },
    ]})
});

module.exports = router;
