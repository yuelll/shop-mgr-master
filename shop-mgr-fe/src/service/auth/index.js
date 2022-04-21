import axios from 'axios';

//用axios发送post请求到localhost：3000/auth/register这个路径上
export const register = ( account, password, inviteCode) =>{
  return axios.post('http://localhost:3000/auth/register', {
      account,
      password,
      inviteCode,
  });
};
//写了两个方法，一个register，一个login,导出方法使用
export const login = (account,password) =>{
  return axios.post('http://localhost:3000/auth/login',{
    account,
    password,
  });
};