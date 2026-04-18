<script setup lang="ts">
import { ref } from 'vue';
import PreviewCanvas from './components/PreviewCanvas.vue';
import Sidebar from './components/SideBar.vue';
import Toolbar from './components/ToolBar.vue';

const compiling = ref(false);
</script>

<template>
  <div class="tp-wrapper">
    <Sidebar />
    <main class="tp-main">
      <Toolbar :compiling="compiling" />
      <PreviewCanvas />
    </main>
  </div>
</template>

<style scoped>
.tp-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
}

.tp-main {
  flex: 1;
}
</style>
