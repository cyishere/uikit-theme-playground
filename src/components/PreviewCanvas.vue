<script setup lang="ts">
import ComponentsPreview from './ComponentsPreview.vue';
import PagePreview from './PagePreview.vue';
</script>

<template>
  <div>
    <ul class="uk-flex-center uk-padding uk-padding-remove-bottom" uk-tab>
      <li class="uk-active"><a href="#">Components</a></li>
      <li><a href="#">Demo Page</a></li>
    </ul>

    <div class="uk-switcher">
      <ComponentsPreview />
      <PagePreview />
    </div>
  </div>
</template>
