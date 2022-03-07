<script setup>
import { ref } from 'vue'
const imagesArr = [1, 2, 3, 4, 5, 6]
function getImageUrl(name) {
  return new URL(`../../../assets/images/${name}.png`, import.meta.url).href
}

const currentIndex = ref(0)
</script>

<template>
  <div
    class="img_cards h_100_p"
    v-for="(item, index) in imagesArr"
    :key="item"
    :style="{ backgroundImage: `url(${getImageUrl(item)})` }"
    :class="currentIndex === index ? 'active' : ''"
    @click="currentIndex = index"
  ></div>
</template>

<style lang="less">
.dis_flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card_content {
  height: 100%;
  .dis_flex;
  .img_cards {
    .dis_flex;
    flex: 0.8 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    margin: 0 10px;
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
    cursor: pointer;
    box-sizing: border-box;
    &.active {
      flex: 6 1;
    }
  }
}
</style>
