<script setup lang="ts">
import PlayIcon from './Icons/PlayIcon.vue';
</script>

<template>
  <section class="uk-section">
    <div class="uk-container uk-padding-large uk-padding-remove-horizontal uk-text-center">
      <h2 class="uk-heading-small">Build Anything on DevStack</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod, lorem ipsum dolor
        sit amet.
      </p>
      <div class="uk-flex uk-flex-center uk-margin-large">
        <a href="/register" class="uk-button uk-button-primary uk-button-large uk-margin-right"
          >Sign up for free</a
        >
        <a href="/about" class="uk-button uk-button-default uk-button-large">Learn More</a>
      </div>

      <div class="uk-inline">
        <img src="/images/dark.jpg" width="1800" height="1200" alt="" />
        <div class="uk-position-center">
          <button class="uk-icon-button uk-background-primary uk-light">
            <span hidden>Play video</span>
            <PlayIcon width="36" height="36" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
