<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

//触发获取导航列表的action
//1.导入useCategoryStore
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'
//2.执行得到实例对象
const catgoryStore = useCategoryStore()

//生命周期调用函数
onMounted(() => catgoryStore.getCategory())
</script>

<template>
    <LayoutFixed />
    <LayoutNav />
    <LayoutHeader />
    <!-- 设置二级路由出口 -->
    <RouterView/>
    <LayoutFooter />
</template> 