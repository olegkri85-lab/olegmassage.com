<template>
  <div class="relative w-full overflow-hidden bg-gray-100" :style="{ aspectRatio: aspectRatio }">
    <NuxtImg
      v-if="src"
      :src="src"
      :alt="alt || ''"
      :loading="loading || 'lazy'"
      :fetchpriority="fetchpriority"
      format="webp"
      quality="80"
      class="absolute inset-0 w-full h-full object-cover"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src?: string;
  alt?: string;
  ratio?: "16/9" | "4/3" | "3/2" | "1/1" | "2/3";
  label?: string;
  loading?: "lazy" | "eager";
  fetchpriority?: "high" | "low" | "auto";
}>();

const aspectRatio = computed(() => props.ratio || "4/3");
</script>
