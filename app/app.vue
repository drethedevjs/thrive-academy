<script lang="ts" setup>
import Header from "./components/Header.vue";
</script>

<template>
  <Header v-if="$route.fullPath !== '/'" />
  <NuxtPage />
</template>
