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
// 定位到定位到SubCategory组件
import SubCategory from '@/views/SubCategory/index.vue'



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
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
