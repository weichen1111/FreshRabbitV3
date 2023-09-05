import { ref } from 'vue'
import { defineStore } from 'pinia'
// 导入写好的Layout接口
import { getCategoryAPI } from '@/apis/Layout'


export const useCategoryStore = defineStore('category', () => {
    //导航列表的数据管理
    // state导航列表数据
    const categoryList = ref([])

    //action 获取导航数据方法
    const getCategory = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.result
    }

    return{
        categoryList,
        getCategory
    }
})
