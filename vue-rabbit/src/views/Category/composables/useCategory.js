//封装分类数据业务相关代码

import { useRoute } from "vue-router"
import { getCategoryAPI } from "@/apis/category";
import { onBeforeRouteUpdate } from 'vue-router'
import { onMounted, ref } from 'vue'

export function useCategory() {
//获取数据
    const categoryData = ref([])
    const route = useRoute()
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())


    //监听路由，路由参数变化时，分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        console.log("分类页面路由发生变化")

        getCategory(to.params.id)
    })

    return{
        categoryData
    }
}