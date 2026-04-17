<script setup lang="ts">
import PreviewCanvas from './components/PreviewCanvas.vue';
import Sidebar from './components/SideBar.vue';
import Toolbar from './components/ToolBar.vue';
</script>

<template>
  <Sidebar />
  <main>
    <Toolbar />
    <PreviewCanvas />
  </main>
</template>

<style scoped></style>
