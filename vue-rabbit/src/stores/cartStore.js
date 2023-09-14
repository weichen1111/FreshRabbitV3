//封装购物车模块

import {defineStore} from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import { insertCartAPI } from '@/apis/cart'
import { FindNewCartListAPI, delCartAPI } from '@/apis/cart'

export const useCartStore = defineStore('cart',()=>{
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)

    // 1.定义state --cartList
    const cartList = ref([])
    //获取最新购物车列表action   封装优化
    const updateNewList =async() =>{
        const res = await FindNewCartListAPI()
        cartList.value = res.result
    }
    // 2.定义action -- addCart
    const addCart = async (goods)=>{
        const { skuId, count } = goods
        if (isLogin.value){
            //登录了-----添加购物车逻辑
            await insertCartAPI({ skuId, count })
            updateNewList()

        }else{
            //本地逻辑
            // 添加购物车操作
            // 已添加过 - count + 1
            // 没有添加过 - 直接push
            // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                // 找到了
                item.count++
            } else {
                // 没找到
                cartList.value.push(goods)
            }
        }
        
    }

    // 删除购物车
    const delCart = async(skuId)=>{
        if(isLogin.value){
            //调用接口实现接口购物车的删除功能
            await delCartAPI([skuId])
            updateNewList()
        }else{
            //
            // 思路：
            // 1. 找到要删除项的下标值 - splice
            // 2. 使用数组的过滤方法 - filter
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(idx, 1)
        }
        
    }

    //退出登录清除本地购物车数据
    const clearCart =() =>{
        cartList.value = []
    }

    // 计算属性
    // 1.总数量  所有相count之和
    const allCount = computed(() =>cartList.value.reduce((a,c) => a+c.count, 0))
    // 2.总价  count*price
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    //3.购物车列表已选择商品合计
    const selectedCount = computed(() => cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count, 0))
    //4.购物车列表已选择商品 总价
    const selectedPrice = computed(() => cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count * c.price, 0))

    // 单选功能
    const singleCheck = (skuId, selected)=>{
        // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }

    //CartList是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))

    // 全选功能action
    const allCheck = (selected) => {
        // 把cartList中的每一项的selected都设置为当前的全选框状态
        cartList.value.forEach(item => item.selected = selected)
    }

    return{
        selectedPrice,
        selectedCount,
        isAll,
        allPrice,
        allCount,
        cartList,
        addCart,
        delCart,
        singleCheck,
        allCheck,
        clearCart
    }
}, {
    persist: true,
})