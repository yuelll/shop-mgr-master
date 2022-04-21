import { defineComponent, reactive } from "vue"; 
import { UserOutlined,LockOutlined,MailOutlined,SafetyOutlined } from '@ant-design/icons-vue';
import { auth } from '@/service';
import {result } from '@/helpers/utils';
import { message } from "ant-design-vue";

export default   defineComponent ({
  components:{
    UserOutlined,
    LockOutlined,
    MailOutlined,
    SafetyOutlined,
  },

  
  setup(){
    //注册用的表单数据 
   const regForm = reactive({
     account: '',
     password: '',
     inviteCode: '',
   });

   //写了一个注册的方法,调用了auth下的register方法，发送http请求，带了一个账户和密码
   //注册逻辑
   const register = async () =>{
      if (regForm.account === ''){
        message.info('请输入账户');
        return;
      }

      if(regForm.password === ''){
       message.info('请输入密码');
       return;
     }

     if(regForm.inviteCode === ''){
      message.info('请输入邀请码');
      return;
    }


     const res = await auth.register(
       regForm.account,
       regForm.password, 
       regForm.inviteCode,
      );
     
     result(res)
      .success((data) => {
        message.success(data.msg);
      });
    };

   //登入用的表单数据、通过reactive说明其中的account，password是响应式的
   const loginForm = reactive({
     account:'',
     password:'',
   });

   //登入逻辑、提供给表单里的用户名和密码
  const login = async () => {
     if(loginForm.account === ''){
       message.info('请输入账户');
       return;
     }
    
     if(loginForm.password === ''){
      message.info('请输入密码');
      return;
 }

    const res = await auth.login(loginForm.account, loginForm.password)

    result(res)
     .success((data) => {
       message.success(data.msg);
     });
  };

   return{
     //注册相关的数据
     regForm,
     register,
  //绑定数据，绑定模板      
     //登入相关的数据
     login,
     loginForm,
   };
  },
});

