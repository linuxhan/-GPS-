import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/views/register/register.vue'  //登录页
import Home from '@/views/home/home.vue'  //主页
import Index from '@/views/nav1/index.vue'  //主页子路由
import Shishijiankong from '@/views/nav2/shishijiankong.vue'  //车辆管理=》实时查询=》子路由
import Xianluguanli from '@/views/nav2/xianluguanli.vue'
import Zhaopianguanli from '@/views/nav2/zhaopianguanli.vue'
import Diaoduchaxun from '@/views/nav2/diaoduchaxun.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/',
          name: 'Index',
          component: Index
        },
        {
          path: '/shishijiankong',
          name: 'Shishijiankong',
          component: Shishijiankong
        },
        {
          path: '/xianluguanli',
          name: 'Xianluguanli',
          component: Xianluguanli
        },
        {
          path: '/zhaopianguanli',
          name: 'Zhaopianguanli',
          component: Zhaopianguanli
        },
        {
          path: '/diaoduchaxun',
          name: 'Diaoduchaxun',
          component: Diaoduchaxun
        }
      ]
    }
  ]
})
