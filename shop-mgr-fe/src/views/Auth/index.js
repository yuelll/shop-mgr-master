import { defineComponent, reactive } from "vue"; 
import { UserOutlined,LockOutlined,MailOutlined,SafetyOutlined } from '@ant-design/icons-vue';
import { auth } from '@/service';

export default   defineComponent ({
  components:{
    UserOutlined,
    LockOutlined,
    MailOutlined,
    SafetyOutlined,
  },

  //创建一个表单
  setup(){
   const regForm = reactive({
     account:'',
     password:'',
   });

   //写了一个注册的方法,调用了auth下的register方法，发送http请求，带了一个账户和密码
   const register = () =>{
     auth.register(regForm.account, regForm.password);
   };

   return{
     regForm,
     register,
   };
  },
});

