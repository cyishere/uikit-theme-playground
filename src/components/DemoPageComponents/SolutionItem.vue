<script setup lang="ts">
const { image } = defineProps<{
  image: string;
}>();
</script>

<template>
  <div class="uk-width-2-3 tp-slider-item">
    <img :src="`/images/${image}`" alt="" />
    <div
      class="uk-position-bottom-center uk-padding-large uk-padding-remove-horizontal uk-text-center"
    >
      <a href="/" class="uk-button uk-button-secondary uk-button-large">Read Story</a>
    </div>
  </div>
</template>
