const auth = require('./auth/index');

module.exports = (app) =>{ 
    app.use(auth.routes());
};//通过routes方法注册掉路由