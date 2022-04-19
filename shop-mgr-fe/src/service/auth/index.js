import axios from 'axios';

//用axios发送post请求到localhost：3000/auth/register这个路径上
export const register = (account,password) =>{
  axios.post('http://localhost:3000/auth/register',{
      account,
      password,
  });
};
//写了两个方法，一个register，一个longin,导出方法使用
export const login = () =>{

};