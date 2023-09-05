<script setup>
// @ 配置项只做联想提示
</script>

<template>
  
  <!-- <el-button type="primary">i am button</el-button> -->
  <RouterView />
  
  <!-- 测试scss自动导入 -->
  <div class="test">
    test scss
  </div>
</template>

<style scoped lang="scss">
.test{
  color: $priceColor;
}
</style>
