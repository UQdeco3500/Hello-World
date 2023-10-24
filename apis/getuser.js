var express = require('express');
var router = express.Router();

router.get('/getuser', function (req, res, next) {
    res.send({
        "status": 200,
        "msg": "getUser接口调用成功！",
        "vx": "",
        "username":req.cookies.username,
        "avatar":req.cookies.avatar
    });
});

module.exports = router;
