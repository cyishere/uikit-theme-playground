<script setup lang="ts">
import DemoPageView from '@/views/DemoPageView.vue';
</script>

<template>
  <div>
    <div class="uk-padding uk-padding-remove-top">
      <div class="uk-flex uk-flex-between uk-flex-bottom">
        <h1 class="uk-margin-large-top">Demo Page Preview</h1>
        <a href="/demo-page" class="uk-button uk-button-secondary uk-margin-bottom" target="_blank">
          <span class="uk-margin-small-right">Preview in new tab</span>
          <span uk-icon="link-external"></span
        ></a>
      </div>
      <p class="uk-text-lead uk-text-muted">
        Explore how your custom UIkit theme looks in an actual page.
      </p>
      <hr />
    </div>

    <DemoPageView />
  </div>
</template>
