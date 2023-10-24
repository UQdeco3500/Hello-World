var express = require('express');
var router = express.Router();
let { serverAddr } = require('../config.json')
const fs = require('fs')
const pathUtils = require('path')


router.get('/getevents', function (req, res, next) {
    // let filePath = pathUtils.join(__dirname, '../data/events.json');
    // let events;
    // fs.readFile(filePath, 'utf-8', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         return;
    //     }
    //     events = JSON.parse(data);
    //     res.json(events);
    // })
    res.json({
        "status": 200,
        "msg": "getnotificationtoday",
        "data": [
        {
            name: 'Seafood Night',
            iamge: `${serverAddr}/images/12.jpg`,
            date: '01/10/2023-09/10/2023',
            location: 'Gold Coast',
            cost: 's188 per person',
            phone: '1234567',
        },
        {
            name: 'Wine Festival',
            iamge: `${serverAddr}/images/13.jpg`,
            date: '01/10/2023-09/10/2023',
            location: 'Gold Coast',
            cost: 's188 per person',
            phone: '1234567',
        },
    ]})
});
router.post('/postevents', function (req, res, next) {
    let filePath = pathUtils.join(__dirname, '../data/events.json');
    let events;
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(data)
        events = JSON.parse(data);
        console.log(req.body);
        
        events.push(req.body);
        fs.writeFile(filePath, JSON.stringify(events), (err) => {
            if (err) {
                console.log(err)
            } else {
                res.send({
                    code: 200,
                    message: 'events post success!'
                });
            }
        })
    });
});

module.exports = router;
