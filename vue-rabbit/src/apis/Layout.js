// 引入
import httpInstance from "@/utils/http";

// 获取分类接口函数
export function getCategoryAPI() {
    return httpInstance({
        url: '/home/category/head'
    })
}