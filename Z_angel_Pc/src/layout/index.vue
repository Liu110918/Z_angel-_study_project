<script setup>
import NavMenu from './components/NavMenu.vue'
</script>

<template>
  <el-container class="w_100_p h_100_p">
    <el-aside width="200px"><NavMenu></NavMenu></el-aside>

    <el-container>
      <el-header> </el-header>
      <el-main>
        <el-card class="box-card" shadow="never">
          <router-view class="card_content"></router-view>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="less">
.el-header {
  background: linear-gradient(30deg, #0ed5d4, #5786e8);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-main {
  background-color: #f9f9f9;
}
.box-card {
  height: 100%;
  .el-card__body {
    height: 100%;
    box-sizing: border-box;
  }
}
</style>
