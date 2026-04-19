<script setup lang="ts">
import PreviewComponents from './PreviewComponents.vue';
import PreviewPage from './PreviewPage.vue';
</script>

<template>
  <div>
    <ul class="uk-padding uk-flex-center" uk-tab>
      <li class="uk-active"><a href="#">Components</a></li>
      <li><a href="#">Demo Page</a></li>
    </ul>

    <div class="uk-switcher">
      <PreviewComponents />
      <PreviewPage />
    </div>
  </div>
</template>
