var express = require('express');
var router = express.Router();
const pathUtils = require('path')
const fs = require('fs')

router.get('/login', function (req, res, next) {
    let filePath = pathUtils.join(__dirname, '../data/users.json');
    let users;
    let avatar;
    // console.log(req.query.username)
    console.log(req.query)
    // console.log("req.query");
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        users = JSON.parse(data);
        if (users.some((item, idx, array) => {
            if(item.username == req.query.username && item.password == req.query.password){
                avatar = item.avatar;
                return true;
            }else{
                return false;
            }
        })) {
            let token = "你好，你已经有权限了";
            // login success
            res.cookie("username",req.query.username);
            res.cookie("avatar",avatar);
            res.json({
                code: 200,
                "message": "login success",
                "token": token,
                // "ButtonAuth": ["a", "b", "c"],
                // "RouterAuth": ["/home", "/doc"]
            });
        }
        // wrong username or password
        else {
            res.json({
                code: 401,
                data: {
                },
                message: 'wrong username or password'
            })
        }
    })
});


module.exports = router;
