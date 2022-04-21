const auth = require('./auth');
const inviteCode = require('./invite-code');

module.exports = (app) =>{ 
    app.use(auth.routes());
    app.use(inviteCode.routes());
};//通过routes方法注册掉路由