<script setup lang="ts">
import ThemeController from './ThemeController.vue';

const compiling = defineModel<boolean>('compiling');
</script>

<template>
  <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <header class="uk-navbar-container uk-padding uk-padding-remove-vertical" uk-navbar>
      <div class="uk-navbar-left">
        <button
          type="button"
          class="uk-navbar-item uk-navbar-toggle tp-show-only-small"
          uk-navbar-toggle-icon
          uk-toggle="target: #mobileMenu"
        ></button>
        <div class="uk-navbar-item tp-show-only-small">
          <a href="/" class="uk-logo">UKTP</a>
        </div>
        <div class="uk-navbar-item tp-hidden-small">
          <a href="/" class="uk-logo">UIkit Theme Playgroud</a>
        </div>
        <div v-if="compiling" class="uk-navbar-item">
          <span class="uk-text-danger uk-text-italic">Compiling...</span>
        </div>
        <div v-else class="uk-navbar-item">
          <span class="uk-text-success">●</span>
          <span>Synced</span>
        </div>
      </div>

      <div class="uk-navbar-right">
        <div class="uk-navbar-item">
          <span>Try Theme:</span>
        </div>
        <div class="uk-navbar-item">
          <select class="uk-select">
            <option>Default</option>
            <option>Minimal Mono</option>
            <option>Colorful</option>
          </select>
        </div>
      </div>
    </header>
  </div>

  <div id="mobileMenu" uk-offcanvas>
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <div class="uk-padding-large uk-padding-remove-horizontal">
        <ThemeController v-model:compiling="compiling" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.tp-hidden-small {
  display: none;
}

@media (min-width: 769px) {
  .tp-show-only-small {
    display: none;
  }

  .tp-hidden-small {
    display: flex;
  }
}
</style>
