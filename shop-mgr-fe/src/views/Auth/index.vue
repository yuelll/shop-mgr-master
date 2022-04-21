<template>
  <div class="auth">
    <div class="bg"></div>
    <div class="title-info">
      <img src="http://bpic.588ku.com/element_pic/00/16/08/2257ba6008df741.jpg" alt="">
      <h2 class="title">二手商品交易平台 后台</h2>
    </div>
      
    <div class="form">
      <a-tabs>
        <a-tab-pane key="1" tab="登录">
          <div class="item">
            <a-input 
             size="large" 
             placeholder="请输入账号" style="width: 350px"
             v-model:value="loginForm.account"
             >
              <template 
                v-slot:prefix
                >
              <UserOutlined />
            </template>
          </a-input>
        </div>

    <div class="item">
      <a-input 
      size="large" 
      placeholder="请输入密码" style="width: 350px" 
      v-model:value="loginForm.password"
      >
        <template 
          v-slot:prefix
            >
              <LockOutlined />
            </template> 
          </a-input>
        </div>

         <div class="item">
           <div>
      <a-input style="width:230px"  placeholder="请输入验证码"  />
           <img src="https://www.icode9.com/img/l/?n=18&i=blog/736399/202001/736399-20200108170302307-1377487770.jpg" alt="" style="width:100px; height: 40px;margin-left: 20px">
           </div>
        </div>
   <!-- <div class="item"> 
     <a-input>
       <template>
       <a-checkbox v-model="checked">记住我的登录状态</a-checkbox>
     </template>
     </a-input>
      </div>  -->

    <div class="item">
      <a href="">忘记密码</a> 
        </div>

    <div class="item">
      <a-button 
      size="large"
       ype="primary"
       @click="login"
       >
          登录
          </a-button>
        </div>
      </a-tab-pane>

    <a-tab-pane key="2" tab="注册" >
      <div class="item">
        <a-input 
         size="large" 
         placeholder="你的账号" style="width: 350px" 
         v-model:value="regForm.account"
         >
          <template 
            v-slot:prefix>
              <UserOutlined />
            </template> 
          </a-input>
        </div>

    <div class="item">
      <a-input
       size="large" 
       placeholder="你的密码" style="width: 350px" 
        v-model:value="regForm.password"
        >
        <template 
          v-slot:prefix>
              <LockOutlined />
            </template> 
          </a-input>
        </div>

    <div class="item">
      <a-input
       size="large" 
       placeholder="邀请码" style="width: 350px" 
       v-model:value="regForm.inviteCode"
       >
        <template 
          v-slot:prefix>
              <MailOutlined />
            </template>
          </a-input>
        </div>

              <div class="item">
                <a-button 
                  @click="register"
                  size="large" 
                  type="primary">
                  注册
                </a-button>
              </div>
          
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scpoed>
        @import './index.scss';
  </style>
