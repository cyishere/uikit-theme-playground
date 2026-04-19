<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { applyTheme } from './utils/theme-state';

onMounted(() => {
  applyTheme(true);
});
</script>

<template>
  <RouterView />
</template>
