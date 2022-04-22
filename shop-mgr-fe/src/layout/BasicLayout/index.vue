<template>
    <div class="basic-layout">
        <div class="app-header">
            <div class="left">
              <img src="http://bpic.588ku.com/element_pic/00/16/08/2257ba6008df741.jpg" alt="">
              <div class="title">二手商品管理系统</div>
            </div>
             <div class="right">
           <div class="hello-msg">你好,xx</div>
          <div class="tuichu">退出</div>
         </div>
        </div>
        <div class="app-header-placlholder"></div>
          <div class="app-content">
            <div class="left">
              <app-nav />
            </div>
            <div class="right">
                <router-view  />
            </div>
          </div>
        </div>
</template>

<script src="./index.js">
 
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
