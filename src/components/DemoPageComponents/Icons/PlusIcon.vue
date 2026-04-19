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
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
</template>
