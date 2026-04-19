<script setup lang="ts">
import PreviewComponents from './PreviewComponents.vue';
</script>

<template>
  <div class="uk-padding">
    <ul class="uk-flex-center" uk-tab>
      <li class="uk-active"><a href="#">Components</a></li>
      <li><a href="#">Demo Page</a></li>
    </ul>

    <div class="uk-switcher">
      <PreviewComponents />
      <div>
        <h1>Demo Page</h1>
      </div>
    </div>
  </div>
</template>
