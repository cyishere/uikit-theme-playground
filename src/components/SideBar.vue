<script setup lang="ts">
import { ref } from 'vue';

const sidebarExpanded = ref(true);

const toggleSidebar = () => {
  sidebarExpanded.value = !sidebarExpanded.value;
};
</script>

<template>
  <aside class="uk-background-muted tp-sidebar" :data-expanded="sidebarExpanded">
    <div class="uk-background-primary uk-light uk-flex uk-flex-right tp-sidebar-top">
      <button
        type="button"
        class="uk-navbar-toggle tp-sidebar-toggle"
        @click="toggleSidebar"
        uk-navbar-toggle-icon
        :aria-expanded="sidebarExpanded"
        aria-label="Toggle sidebar"
      ></button>
    </div>

    <h2 hidden>Theme Controller</h2>

    <div class="uk-padding tp-sidebar-container">
      <slot />

      <hr class="uk-margin-large-top" />
      <footer>
        <p class="uk-text-center uk-text-muted">
          Made by <a href="https://cyishere.dev" target="_blank" rel="noopener noreferrer">CY</a>
        </p>
      </footer>
    </div>
  </aside>
</template>

<style scoped>
.tp-sidebar {
  display: none;
  width: var(--sidebar-width);
  height: 100vh;
  border-right: 1px solid #e5e5e5;
  position: sticky;
  top: 0;
  transition: width 0.5s ease;

  &[data-expanded='true'] {
    --sidebar-width: 350px;

    .tp-sidebar-container {
      opacity: 1;
    }
  }

  &[data-expanded='false'] {
    --sidebar-width: 60px;

    .tp-sidebar-container {
      opacity: 0;
      pointer-events: none;
    }
  }

  @media (min-width: 769px) {
    display: block;
  }
}

.tp-sidebar-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
}

.tp-sidebar-toggle {
  min-height: unset;
  padding: 10px;
}

.tp-sidebar-container {
  --sidebar-top-height: 60px;

  margin-top: var(--sidebar-top-height);

  /** `60px` is the value of `.uk-padding` multiple by 2.
   *  Because there are top and bottom padding. 
   */
  height: calc(100vh - var(--sidebar-top-height) - 60px);
  overflow-y: auto;
}
</style>
