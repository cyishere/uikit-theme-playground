<script setup lang="ts">
import PreviewCanvas from '@/components/PreviewCanvas.vue';
import Sidebar from '@/components/SideBar.vue';
import Toolbar from '@/components/ToolBar.vue';
import ThemeController from '@/components/ThemeController.vue';
import { themeState } from '@/utils/theme-state';
</script>

<template>
  <div class="tp-wrapper" :data-compiling="themeState.compiling">
    <Sidebar>
      <ThemeController id-prefix="sidebar" />
    </Sidebar>
    <main class="tp-main">
      <Toolbar>
        <ThemeController id-prefix="toolbar" />
      </Toolbar>
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
