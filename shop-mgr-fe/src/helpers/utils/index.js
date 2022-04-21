import { message } from 'ant-design-vue';

export const result = (response,authShowErrorMsg = true) =>{
  const { data } = response;

  if ((data.code === 0) && authShowErrorMsg){
      message.error(data.msg);
  }

  return{
      success(cb){
          if(data.code !==0){
              cb(data, response);
          }

          return this;
      },//成功做什么事

      fail(cb){
        if(data.code ===0){
            cb(data, response);
        }
        return this;
      },//失败做什么事

      finally(cb){
          cb(data, response);

          return this;

      },//不管成功还是失败，最后做什么事   
  };
};