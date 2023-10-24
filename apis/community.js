var express = require('express');
var router = express.Router();
let { serverAddr } = require('../config.json')
const fs = require('fs')
const pathUtils = require('path')


router.get('/getcommunity', function (req, res, next) {
  let filePath = pathUtils.join(__dirname, '../data/forum.json');
  let forum;
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    forum = JSON.parse(data);
    res.json({
      "status": 200,
      "msg": "getcommunity",
      "data": forum
    });

  })
})


router.get('/getcommunitydetail', (req, res, next) => {
  res.json({
    "status": 200,
    "msg": "getcommunity接口调用成功！",
    "data": {
      "community": {
        "id": 1,
        "name": "JameS",
        "iamge": "http://localhost:3001/src/assets/images/22.jpg",
        "likeCount": 28,
        "title": "Global Gourmet Guild",
        "content":
          "The Global Gourmet Guild is a melting pot for culinary enthusiasts who appreciateinternational cuisines. Members actively share and explore diverse recipes, engagein discussions about various food cultures, and exchange cooking tips, providing arich experience for food lovers of all levels."
      },
      "list": [
        {
          "id": 2,
          "name": "Kelly",
          "iamge": "http://localhost:3001/src/assets/images/23.jpg",
          "likeCount": 29,
          "title": "Healthy Eating Hub",
          "content":
            "Healthy Eating Hub is a supportive community for individuals committed to anutritious lifestyle. Members share tantalizing yet health-conscious recipes, offerinsights into effective dietary plans, and promote the joy of creating and enjoying foodthat is as good for the body as it is for the palate."
        },
        {
          "id": 3,
          "name": "Lily",
          "iamge": "http://localhost:3001/src/assets/images/20.jpg",
          "likeCount": 29,
          "title": "Bakers Bliss Circle",
          "content":
            "Welcoming bakers ofall skill levels, the Bakers Bliss Circle is a sweet spot for thosewho have a passion for baking. Whether you are a beginner or a seasoned pro, thisgroup provides a platform to share recipes, celebrate baking successes, discusstechniques, and explore the delightful world of baking together."
        }
      ]
    }
  })
})
router.post('/createcommunity', (req, res, next) => {
  let filePath = pathUtils.join(__dirname, '../data/forum.json');
  let forum;
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    forum = JSON.parse(data);
    forum.push({
      "id": forum.lenth,
      "name": req.cookies.username,
      "iamge": req.cookies.avatar,
      "title": req.body.title,
      "content": req.body.content,
      "children": []
    });
    fs.writeFile(filePath, JSON.stringify(forum), (err) => {
      if (err) {
        console.log(err)
      } else {
        res.send({
          code: 200,
          message: 'community post success!'
        })
      }
    });
  })
})

module.exports = router;
