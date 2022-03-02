<script setup>
import NavMenu from './components/NavMenu.vue'
import { ref } from 'vue'
const isCollapse = ref(false)
</script>

<template>
  <el-container class="w_100_p h_100_p">
    <NavMenu :isCollapse="isCollapse"></NavMenu>
    <el-container>
      <el-header>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">expand</el-radio-button>
          <el-radio-button :label="true">collapse</el-radio-button>
        </el-radio-group>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
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
</style>
