var express = require('express');
var router = express.Router();
var express = require("express");
var Info = require("../models/Info");



//引入数据库模块
var mysql = require("mysql");
// 引入jwt token工具
const JwtUtil = require('../public/utils/jwt');



//连接数据库
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',//用户名
  password: '1314',//密码
  database: 'microblog'//要连接的数据库名称
});
//执行创建连接 
connection.connect(function (err) {
  if (err) {
    console.log("user.js连接失败");
  } else {
    console.log("user.js连接成功");
  }
});




/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
/*登录
*/
router.get('/login', function (req, res, next) {
  //获得前端传来的数据
  var user = req.query;
  var userName = user.user_name;
  var userPass = user.user_password;


  //查询数据库中相同用户名和密码的记录是否存在，如果存在则登录成功
  Info.findOne({
    username: userName,
    password: userPass
  }).then(function(userInfo) {
    //userInfo是这条记录的所有信息
    console.log(userInfo);
    if (!userInfo) {
      //用户信息不存在,即空记录
      console.log("[SELECT ERROR] -  这条（用户名密码）记录不存在");
      res.send({ status: 400, msg: "用户名或者密码错误" });
      return;
    }
    // 登陆成功，添加token验证
    let userId = userInfo._id;
    // 将用户id传入并生成token
    let jwt = new JwtUtil(userId);
    let token = jwt.generateToken();
    // 将 token 返回给客户端
    res.send({
      status: 200,
      msg: "登陆成功",
      token: token,
      user_name: userInfo.username
    });
  });


});

/* 注册 */
router.get("/register", function(req, res, next) {
  res.send("register");
});

/* 判断用户是否登录，显示对应的div.info */
router.get("/islogin", function(req, res, next) {
  console.log('进入/islogin');
  console.log(req.query);
  var user = req.query;
  var userName = user.user_name;

  //查询数据库中相同用户名和密码的记录是否存在，如果存在则登录成功
  Info.findOne({
    username: userName
  }).then(function(userInfo) {
    //userInfo是这条记录的所有信息
    console.log(userInfo);
    if (!userInfo) {
      //用户信息不存在,即空记录
      console.log("[SELECT ERROR] -  这条（用户名密码）记录不存在");
      res.send({ status: 400, msg: "用户名或者密码错误" });
      return;
    }
    //用户记录存在
    res.send({ status: 200, msg: "查询成功", info: userInfo })
  });


});

/* 勋章 */
router.get("/me/medal", function(req, res, next) {
  console.log('进入勋章');
  console.log(req.query);
  res.send({ status: 200, msg: "这是来自node/me/medal的信息，能看到说明进入勋章成功" });
});

module.exports = router;