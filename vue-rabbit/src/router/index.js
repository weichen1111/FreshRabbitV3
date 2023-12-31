// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
// 导入Login组件
import Login from '@/views/Login/index.vue'
// 导入Layout组件
import Layout from '@/views/Layout/index.vue'
// 导入Home组件
import Home from '@/views/Home/index.vue'
// 导入Category 组件
import Category from '@/views/Category/index.vue'
// 定位到定位到SubCategory
import SubCategory from '@/views/SubCategory/index.vue'
// 定位到定位到Detail组件
import Detail from '@/views/Detail/index.vue'
// CartList
import CartList from '@/views/CartList/index.vue'
// Checkout
import Checkout from '@/views/Checkout/index.vue'
//Pay
import Pay from '@/views/Pay/index.vue'
//PayBack
import PayBack from '@/views/Pay/PayBack.vue'
//Member
import Member from '@/views/Member/index.vue'
//3级路由UserInfo 与UserOrder
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'












const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    // path和component(组件)对应关系的位置
  routes: [
    // 2个一级路由
    {
      path: '/',
      component: Layout,
      // 2个二级路由
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id', 
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'cartlist',
          component: CartList
        },
        {
          path:'checkout',
          component: Checkout
        },
        {
          path:'pay',
          component: Pay
        },
        {
          path:'paycallback',
          component: PayBack
        },
        {
          path:'member',
          component: Member,
          children:[
            {
              path:'',
              component: UserInfo
            },
            {
              path:'order',
              component: UserOrder
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
  //路由行为的配置项
  scrollBehavior(){
    return {top:0}
  
  }
})

export default router
