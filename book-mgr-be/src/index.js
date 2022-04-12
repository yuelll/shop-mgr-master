const koa = require('koa');

const app = new koa();


//通过app.use注册中间件
//中间件本质上就是一个函数
//context上下文-当前请求的相关信息都在里面
app.use(async(context, next) =>{
  // const { request:req } = context;
  
  // const { url } = req;

  // if(url ==='/'){
  //   context.response.body = '<h1>主页</h1>';

  //   return;
  // }

  // ///user/list路由
  // if(url ==='/user/list'){
  //   context.response.body = '<h1>用户列表</h1>';

  //   return;
  // }

  
  // context.body = '404';
  // console.log(1);
  // await next();
  // console.log(3);
  // context.status = 404;
  
  await next();
 
  
});

app.use(async (context, next) =>{
  await next();
});

app.use(async (context, next) =>{
  await next();
  
});
  

//开启一个http服务
// 接受http请求并作处理，处理完成后响应
app.listen(3000, () => {
  console.log('启动成功')
});