<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
setTimeout(() => {
  window.L2Dwidget.init({
    pluginRootPath: 'live2dw/',
    pluginJsPath: 'lib/',
    pluginModelPath: 'live2d-widget-model-z16/assets/',
    tagMode: false,
    debug: false,
    model: { jsonPath: '../public/live2dw/live2d-widget-model-haru_1/assets/haru01.model.json' },
    display: { position: 'right', width: 200, height: 500 },
    mobile: { show: true },
    log: false
  })
}, 1000)
</script>

<template>
  <router-view />
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
