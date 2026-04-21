<script setup lang="ts">
import { applyTheme, resetTheme, themeState, updateThemeFromPreset } from '@/stores/theme';
import { toCapitalized } from '@/utils/formatter';
import { PRESET_THEME_NAMES, toCollectionStructure } from '@/utils/variables';

const handleChangeTheme = (e: Event) => {
  const target = e.target as HTMLSelectElement;
  const themeName = target.value as (typeof PRESET_THEME_NAMES)[number];

  if (themeName === 'default') {
    resetTheme();
  } else {
    const collection = toCollectionStructure(themeName);
    updateThemeFromPreset(themeName, collection);
    applyTheme(true);
  }
};
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
          aria-label="Open mobile menu"
        ></button>
        <div class="uk-navbar-item tp-show-only-small">
          <a href="/" class="uk-logo">UKTP</a>
        </div>
        <div class="uk-navbar-item tp-hidden-small">
          <a href="/" class="uk-logo">UIkit Theme Playgroud</a>
        </div>
        <div aria-live="polite" class="uk-navbar-item">
          <div v-if="themeState.compiling">
            <span class="uk-text-danger uk-text-italic">Compiling...</span>
          </div>
          <div v-else>
            <span class="uk-text-success" aria-hidden="true">●</span>
            <span class="uk-margin-small-left">Synced</span>
          </div>
        </div>
      </div>

      <div class="uk-navbar-right">
        <div class="uk-navbar-item">
          <label for="themePresetSelect">Try Theme:</label>
        </div>
        <div class="uk-navbar-item">
          <select
            id="themePresetSelect"
            class="uk-select"
            :value="themeState.selectedTheme"
            @change="handleChangeTheme"
          >
            <option v-for="name in PRESET_THEME_NAMES" :key="name" :value="name">
              {{ toCapitalized(name) }}
            </option>
            <option v-if="themeState.selectedTheme === 'custom'" value="custom" disabled>
              Customized
            </option>
          </select>
        </div>
        <div class="uk-navbar-item">
          <a
            href="https://github.com/cyishere/uikit-theme-playground"
            target="_blank"
            rel="noopener noreferrer"
            class="uk-icon-link"
            uk-icon="github"
          >
            <span hidden>View on GitHub</span>
          </a>
        </div>
      </div>
    </header>
  </div>

  <div id="mobileMenu" uk-offcanvas>
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <div class="uk-padding-large uk-padding-remove-horizontal">
        <slot />
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
