<template>
  <el-menu :default-active="$route.path" :collapse="isCollapse" :router="true">
    <template v-for="item in navMenu">
      <el-menu-item v-if="!item.children" :key="item.name" :index="item.path">
        <template #title>{{ item.name }}</template>
      </el-menu-item>
      <el-sub-menu v-else :key="item.name" index="/Home/Vue">
        <template #title>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group v-for="children in item.children" :key="children.name">
          <el-menu-item :index="children.path">{{ children.name }}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup>
import { useRouter } from 'vue-router'

const route = useRouter()
const navMenu = [...route.options.routes][2].children
</script>

<style lang="less"></style>
