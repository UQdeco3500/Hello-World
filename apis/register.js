const pathUtils = require('path')
const fs = require('fs')
const { serverAddr } = require("../config.json")

var express = require('express');
var router = express.Router();

router.get('/register', function (req, res, next) {

    // console.log(req.body)

    // Check whether the password is the same
    //   if (req.body.password != req.body.cPassword) {
    //     res.send({
    //       code: 403,
    //       data: {
    //       },
    //       message: "password should be exactly same"
    //     });
    //     return;
    //   }


    // load users information from ../data/users.json
    let filePath = pathUtils.join(__dirname, '../data/users.json');
    let users;
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        users = JSON.parse(data);
        // Checks if the username already exists
        if (!users.some((item, idx, array) => {
            return item.username == req.query.username
        })) {
            // The username hasn't been taken
            // create a new one
            users.push({
                username: req.query.username,
                password: req.query.password,
                // address: req.body.address || 'not provided',
                avatar: `${serverAddr}/images/avatar/${Math.floor(Math.random() * (26 - 18 + 1)) + 18}.jpg`
            });
            // Then write the users information into ../data/users.json
            console.log(users)
            fs.writeFile(filePath, JSON.stringify(users), (err) => {
                if (err) {
                    console.log(err)
                } else {
                    // register successfuly
                    // send result
                    res.send({
                        code: 200,
                        message: 'register success!'
                    });
                }

            })
        } else {
            // The username has been taken
            res.send({
                code: 403,
                message: 'The username has been taken! try something else'
            })
        }
    })


    // 检查data/users.json文件是否存在



});

module.exports = router;
