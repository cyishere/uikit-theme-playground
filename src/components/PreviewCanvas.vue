<script setup lang="ts">
import ComponentsPreview from './ComponentsPreview.vue';
import PagePreview from './PagePreview.vue';
</script>

<template>
  <div>
    <ul class="uk-padding uk-flex-center" uk-tab>
      <li><a href="#">Components</a></li>
      <li class="uk-active"><a href="#">Demo Page</a></li>
    </ul>

    <div class="uk-switcher">
      <ComponentsPreview />
      <PagePreview />
    </div>
  </div>
</template>
