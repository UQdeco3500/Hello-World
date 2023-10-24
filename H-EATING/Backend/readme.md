# 综述
### 项目采用前后端分离设计,前端(frontpage)采用react,后端(backend)采用express.js
### 前后端通讯采用json格式
### 使用cookie将用户名及用户头像存储在客户端(browser)
# 1.前端部分(frontpage):
### 前端部分,分为登录,注册,首页,restaurant,Community,Chatroom几个页面
### 几个页面全部做了页面大小自适应
## 首页由banner,restaurant,notification,my friend, events几个组件组成,全部动态请求后端数据,动态展示
## community 页面可以发帖,进入帖子详情页,并回复帖子
## chatroom采用轮询(roll poling)的方式,获取朋友列表,聊天记录等
# 2.后端部分(backend):
### 后端部分全部采用restful API设计,使用express.js.用户信息存储在data文件夹里面几个.json文件中
### chats.json
### events.json
### forum.json
### notification.json
### users.json