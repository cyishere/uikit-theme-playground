<script setup lang="ts">
import SolutionItem from './SolutionItem.vue';

const SOLUTION_IMAGES = [
  'slider-2.avif',
  'slider-3.avif',
  'slider-4.avif',
  'slider-5.avif',
  'slider-6.avif',
  'slider-1.avif'
];
</script>

<template>
  <section class="uk-section">
    <div class="uk-container">
      <div class="uk-flex uk-flex-between uk-flex-middle">
        <h2 class="uk-heading-small">
          Reach Your Digital Goals With a Solution<br />
          Trusted by Many Industry Experts
        </h2>

        <div>
          <a href="/" class="uk-button uk-button-primary">View All</a>
        </div>
      </div>
    </div>

    <div class="uk-width-1-1 uk-overflow-hidden uk-margin-large-top">
      <div
        class="uk-position-relative uk-visible-toggle uk-light uk-width-1-1"
        tabindex="-1"
        uk-slider="center: true"
      >
        <div class="uk-slider-items uk-grid">
          <SolutionItem v-for="image in SOLUTION_IMAGES" :key="image" :image="image" />
        </div>

        <button
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          uk-slidenav-previous
          uk-slider-item="previous"
        ></button>
        <button
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          uk-slidenav-next
          uk-slider-item="next"
        ></button>
      </div>
    </div>
  </section>
</template>
