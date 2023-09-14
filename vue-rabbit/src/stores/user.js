//管理用户数据相关

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'

export const useUserStore =  defineStore('user',()=> {
    const cartStore = useCartStore()
    //添加退函数
    // 1.定义管理数据的state
    const userInfo = ref({})
    // 2.定价获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
       const res = await  loginAPI({account,password})
       userInfo.value = res.result
    }
    // 退出时清楚用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        //执行退出登录清除购物车action函数
        cartStore.clearCart()
    }
    // 3.以对象格式return出去
    return{
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
})