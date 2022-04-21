var jwt = require('jsonwebtoken');
var token = jwt.sign({
     account: 'a.cc.com' ,//对用户名和密码进行加密
     _id: '123',
    }, 'aaaa');//密钥

console.log(token);

//heard
//加密的算法 sha256
//jwt

//payload

//singature签证

jwt.verify(token,'aaaa', (err,payload) => {
    console.log(err, payload);
});//对加密的数据进行解密

