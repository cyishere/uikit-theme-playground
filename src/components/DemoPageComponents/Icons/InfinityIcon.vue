<script setup lang="ts">
import { cn } from '@/utils/cn';

const { width, height, className } = defineProps<{
  width?: string;
  height?: string;
  className?: string;
}>();
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || 24"
    :height="height || 24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    :class="cn(className)"
  >
    <path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" />
  </svg>
</template>
