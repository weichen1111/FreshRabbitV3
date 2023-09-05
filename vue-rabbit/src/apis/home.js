/**
 * @description: 获取banner图
 * @param {*}
 * @return {*}
 */
import httpInstance  from '@/utils/http'
export const getBannerAPI = () => {
     return httpInstance({
        url: 'home/banner'
    })
}