import { computed, onUnmounted, ref } from 'vue'
import dayjs from 'dayjs'

// 封装倒计时函数
export const useCountDown =() =>{
    // 1.响应式数据
    let timer =null
    const time =ref(0)
    //格式化时间 为xx分xx秒
    const formatTime = computed(() =>dayjs.unix(time.value).format('mm分ss秒  '))

    // 2.开始倒计时函数
    const start =(currentTime) =>{
        //开始倒计时函数
        time.value = currentTime
        timer =  setInterval(() =>{
            time.value--
        },1000)
    }

    //组件销毁时清除定时器
    onUnmounted(() =>{
        timer&& clearInterval(timer)
    })
    return{
        formatTime,
        start
    }
}