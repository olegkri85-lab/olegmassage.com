<template>
  <MediaContainer :ratio="ratio" :customRatio="customRatio">
    <div v-if="!src" class="placeholder"></div>
    <NuxtImg
      v-else
      :src="src"
      :alt="alt || ''"
      :loading="loading || 'lazy'"
      :fetchpriority="fetchpriority"
      format="webp"
      quality="80"
    />
  </MediaContainer>
</template>

<script setup lang="ts">
defineProps<{
  src?: string;
  alt?: string;
  ratio?: "16/9" | "4/3" | "3/2" | "1/1" | "2/3" | "custom";
  customRatio?: string;
  label?: string;
  loading?: "lazy" | "eager";
  fetchpriority?: "high" | "low" | "auto";
}>();
</script>
