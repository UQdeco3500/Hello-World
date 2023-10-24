var express = require('express');
var router = express.Router();
let { serverAddr } = require('../config.json')
const fs = require('fs')
const pathUtils = require('path')


router.get('/getfriendlist', function (req, res, next) {
    let filePath = pathUtils.join(__dirname, '../data/users.json');
    let users;
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        users = JSON.parse(data);
        let newMsg;
        users.forEach((item, idx, arr) => {
            if (item.username == req.cookies.username) {
                newMsg = item.newMsg || {}
            }
        })
        users.forEach((item, idx, arr) => {
            arr[idx].id = idx + 1;
            arr[idx].name = item.username;
            arr[idx].newMsgCount = newMsg[item.username] || 0;
        })

        users = users.filter((item, idx, arr) => {
            return item.username != req.cookies.username;

        })
        res.json({
            "status": 200,
            "msg": "getfriendlist接口调用成功！",
            "data": users
        });
    })
});

router.get('/getmessagelist', (req, res, next) => {
    let chatFilePath = pathUtils.join(__dirname, '../data/chats.json');
    let chats;
    fs.readFile(chatFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        };
        chats = JSON.parse(data);
        let chatsLst;
        chatsLst = chats[req.query.name];
        let userPath = pathUtils.join(__dirname, '../data/users.json');;
        let users;
        fs.readFile(userPath, 'utf-8', (err, data) => {
            users = JSON.parse(data);
            users.forEach((item, idx, arr) => {
                if (item.username == req.cookies.username) {
                    if (item.newMsg) {
                        arr[idx].newMsg[req.query.name] = 0
                    }

                }
            })
            fs.writeFile(userPath, JSON.stringify(users), (err) => {
                if (err) {
                    console.log(err)
                }
            })

            res.json({
                "status": 200,
                "msg": "getmessagelist接口调用成功！",
                "data": chatsLst
            })
        })

    })
})

router.post('/sendmessage', (req, res, next) => {
    let chatFilePath = pathUtils.join(__dirname, '../data/chats.json');
    let chats;
    fs.readFile(chatFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        };
        chats = JSON.parse(data);
        // read users
        let userPath = pathUtils.join(__dirname, '../data/users.json');;
        let users;
        fs.readFile(userPath, 'utf-8', (err, data) => {
            users = JSON.parse(data);
            // read chats

            // update from chatsList
            let fromLog = {
                "name": req.cookies.username,
                "type": "from",
                "avatar": req.cookies.avatar,
                "message": req.body.message
            };
            let toAvatar;
            let newMsg = {};
            users.forEach((item, idx, arr) => {
                if (item.username == req.body.friendName) {
                    toAvatar = item.avatar;
                    if (!item.newMsg) {
                        newMsg[req.cookies.username] = 1
                    } else {
                        newMsg[req.cookies.username] = (item.newMsg[req.cookies.username] || 0) + 1
                    }

                }

            })

            if (!(req.cookies.username in chats)) {
                chats[req.cookies.username] = [];
            }


            users.forEach((item, idx, arr) => {
                if (item.username == req.body.friendName) {
                    arr[idx].newMsg = newMsg
                    console.log(arr[idx])

                }
            })
            let toLog = {
                "name": req.body.friendName,
                "type": "to",
                "avatar": toAvatar,
                "message": req.body.message
            }
            if (!(req.body.friendName in chats)) {
                chats[req.body.friendName] = [];
            }
            chats[req.body.friendName].push(fromLog);
            chats[req.cookies.username].push(toLog);

            fs.writeFile(chatFilePath, JSON.stringify(chats), (err) => {
                if (err) {
                    console.log(err)
                }
            })
            fs.writeFile(userPath, JSON.stringify(users), (err) => {
                if (err) {
                    console.log(err)
                }
            })
            res.json({
                "status": 200,
                "msg": "sendmessage接口调用成功！",
                "data": {}
            })
        }
        )


    })

    // res.json({
    //     "status": 200,
    //     "msg": "sendmessage接口调用成功！",
    //     "data": {}
    // })

})

module.exports = router;
