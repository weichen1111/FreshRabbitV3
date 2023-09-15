import request from '@/utils/http'


// 获取结算信息
 
export const getCheckoutInfoAPI = () => {
    return request({
        url: '/member/order/pre'
    })
}

//获取订单接口

export const createOrderAPI = (data) => {
    return request({
        url: '/member/order',
        method: 'post',
        data
    })

}