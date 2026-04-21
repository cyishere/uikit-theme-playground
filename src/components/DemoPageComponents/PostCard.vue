<script setup lang="ts">
export type Post = {
  title: string;
  date: string;
  slug: string;
  cover: string;
};

const { title, cover, date, slug } = defineProps<Post>();
</script>

<template>
  <div class="uk-card uk-card-default">
    <div class="uk-card-media-top">
      <img :src="`/images/${cover}`" :alt="`Cover image for ${title}`" />
    </div>

    <div class="uk-card-body">
      <p class="uk-text-muted">{{ date }}</p>
      <h3 class="uk-card-title">{{ title }}</h3>
      <p>
        <a :href="`/blog/${slug}`" :aria-label="`Read more about ${title}`"
          >Visit Our Blog <span uk-icon="arrow-right" aria-hidden="true"></span
        ></a>
      </p>
    </div>
  </div>
</template>
