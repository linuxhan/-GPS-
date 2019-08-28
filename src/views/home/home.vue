<template>
  <div class="box">
    <el-container>
      <el-aside width="auto">

<el-row class="tac">
  <el-col>
    <h5><img class="logo_h" src="../../../static/img/logo_nav.png" alt=""></h5>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#fff"
      text-color="#000"
      active-text-color="#ffd04b"
			  router>
        <router-link to="/home">
      <el-submenu index="1">
        <template slot="title" >
          <img class="img_left" src="../../../static/img/icon/home.png" alt="">
          <span>主页</span>
        </template>
        <!-- <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group> -->
      </el-submenu>
      </router-link>

      <el-submenu index="2">
        <template slot="title">
         <img class="img_left" src="../../../static/img/icon/polon_truck_s.png" alt="">
          <span>车辆管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/shishijiankong">实时监控</el-menu-item>
          <el-menu-item index="/xianluguanli">线路管理</el-menu-item>
          <el-menu-item index="/zhaopianguanli">照片管理</el-menu-item>
          <el-menu-item index="/diaoduchaxun">调度查询</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

       <el-submenu index="3">
        <template slot="title">
           <img class="img_left" src="../../../static/img/icon/bingzhuangtu.png" alt="">
          <span>统计查询</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
			</el-submenu>

    <el-submenu index="4">
        <template slot="title">
            <img class="img_left" src="../../../static/img/icon/shield.png" alt="">
          <span>安全管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
			</el-submenu>

       <el-submenu index="5">
        <template slot="title">
           <img class="img_left" src="../../../static/img/icon/-television.png" alt="">
          <span>证据查询</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
			</el-submenu>
      <el-submenu index="6">
        <template slot="title">
         <img class="img_left" src="../../../static/img/icon/book.png" alt="">
          <span>规则管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
			</el-submenu>
    </el-menu>
  </el-col>
</el-row>
      </el-aside>
      <el-container>
        <el-header><!--  头部 -->

      <el-select v-model="value" placeholder="用户名">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
     
  </div>
</template>

<script>
export default {
  data() {
    return {  
      options: [{
          value: '第一项',
          label: '修改密码'
        }],
        value: '' //用户名
    };
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }

  },
  components: {}
};
</script>

<style scoped lang="less">
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }
  .el-header{
    border-bottom: 1px solid #cccccc;
    text-align: end;
  }
  .el-aside {
    background-color: #f1f1f1;
    color: #333;
    text-align: center;
    height:100%;
    /* line-height: 500px; */
  }
  
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
  }
  .box,.el-container{
    height:100%;
  }
  .el-footer{
    width:100%;
    position: absolute;
    bottom: 0;
  }
  .el-submenu{
    border-bottom:1px solid #cccccc; 
    font-size: 25px;
  }
  .el-menu-item{
    border-top: 1px solid #cccccc;
    border-bottom:1px solid #cccccc; 
  }
  .el-submenu__title{
    font-size: 24px;
  }
  .img_left{
    float: left;
    margin-top: 10px;
  }
  a{
     color: rgb(0, 0, 0);
    text-decoration: none;
  }
  .el-select{
        margin-top:10px; 
  }
  .logo_h{
    width:326px;
  }
</style>
