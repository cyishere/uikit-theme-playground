<script setup lang="ts">
import type { Post } from './PostCard.vue';
import PostCard from './PostCard.vue';

const POSTS: Post[] = [
  {
    title: 'The Ultimate Guide Performance Testing',
    slug: 'the-ultimate-guide-performance-testing',
    date: '11 March, 2026',
    cover: 'blog-1.avif'
  },
  {
    title: 'How to Analyze User Data to Understand Your Potential Buyers',
    slug: 'how-to-analyze-user-data-to-understand-your-potential-buyers',
    date: '06 March, 2026',
    cover: 'blog-2.avif'
  },
  {
    title: '6 Ways Coronavirus Changed the IT Industry Forever',
    slug: 'the-ultimate-guide-performance-testing',
    date: '01 March, 2026',
    cover: 'blog-3.avif'
  }
];
</script>

<template>
  <section class="uk-section uk-background-muted">
    <div class="uk-container uk-padding-large uk-padding-remove-horizontal uk-text-center">
      <h2 class="uk-heading-small">Latest News</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod, lorem ipsum dolor
        sit amet.
      </p>
      <p>
        <a href="">Visit Our Blog <span uk-icon="arrow-right"></span></a>
      </p>

      <div
        class="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match uk-margin-large-top"
        uk-grid
      >
        <div v-for="post in POSTS" :key="post.slug">
          <PostCard v-bind="post" />
        </div>
      </div>
    </div>
  </section>
</template>
