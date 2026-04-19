<script lang="ts">
import type { SetupContext } from 'vue';
import { h } from 'vue';

export const H3 = (_: unknown, { slots }: SetupContext) => {
  return h(
    'h3',
    { class: 'uk-text-uppercase uk-text-muted uk-heading-divider' },
    slots.default?.()
  );
};
</script>

<script setup lang="ts">
const { title } = defineProps<{ title: string }>();
</script>

<template>
  <section class="uk-section">
    <h2 class="uk-heading-divider">{{ title }}</h2>
    <slot :H3="H3" />
  </section>
</template>
