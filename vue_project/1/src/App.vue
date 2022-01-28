<script setup>
import { ref } from 'vue'
const imgItem = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg']
const getImageUrl = (name) => {
  return new URL(`./assets/${name}`, import.meta.url).href
}
const currentIndex = ref(0)
</script>

<template>
  <div
    class="cards"
    v-for="(item, index) in imgItem"
    :key="item + index"
    :style="{ backgroundImage: `url(${getImageUrl(item)}) ` }"
    :class="index == currentIndex ? 'active' : ''"
    @click="currentIndex = index"
  ></div>
</template>

<style lang="less">
.dis_flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
body {
  margin: 0;
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #9085a7 30%, #d8bca8 70%);
  .dis_flex;
  #app {
    margin: 0;
    width: 90vw;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .dis_flex;
    .cards {
      .dis_flex;
      color: #fff;
      margin: 10px;
      padding: 10px;
      font-size: 1.2rem;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50%;
      border-radius: 20px;
      position: relative;
      height: 90vh;
      flex: 0.8 1;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

      border-radius: 20px;

      &.active {
        flex: 5 1;
      }
    }
  }
}
</style>
