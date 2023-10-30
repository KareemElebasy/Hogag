<template>
    <div class=".container pt-2 pb-2">
      <ul class="flex items-center gap-2 list-unstyled">
        <li v-for="item in items" :key="item.name">
          <nuxt-link v-if="item.disable" :to="item.link">
            {{ item.name }} /
          </nuxt-link>
          <span v-if="!item.disable">{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(["items"]);
  </script>
  
  <style lang="scss" scoped>
  a {
    text-decoration: none !important;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(167, 118, 70, 1);
  }
  span {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
  
    color: rgba(167, 118, 70, 1);
  }
  </style>
  