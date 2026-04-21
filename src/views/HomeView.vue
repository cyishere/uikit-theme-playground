<script setup lang="ts">
import PreviewCanvas from '@/components/PreviewCanvas.vue';
import Sidebar from '@/components/SideBar.vue';
import Topbar from '@/components/TopBar.vue';
import ThemeController from '@/components/ThemeController.vue';
import { themeState } from '@/stores/theme';
</script>

<template>
  <div class="tp-wrapper" :data-compiling="themeState.compiling">
    <Sidebar>
      <ThemeController id-prefix="sidebar" />
    </Sidebar>
    <main class="tp-main">
      <Topbar>
        <ThemeController id-prefix="toolbar" />
      </Topbar>
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
