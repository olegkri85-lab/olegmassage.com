<template>
  <div
    class="media-container"
    :class="aspectClass"
    :style="{ aspectRatio: customRatio }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  ratio?: '16/9' | '4/3' | '3/2' | '1/1' | '2/3' | 'custom'
  customRatio?: string
}>()

const aspectClass = computed(() => {
  if (props.ratio === 'custom') return ''
  return `aspect-${props.ratio?.replace('/', '-') || '16-9'}`
})
</script>

<style scoped>
.media-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #f9fafb;
}

.aspect-16-9 {
  aspect-ratio: 16 / 9;
}

.aspect-4-3 {
  aspect-ratio: 4 / 3;
}

.aspect-3-2 {
  aspect-ratio: 3 / 2;
}

.aspect-1-1 {
  aspect-ratio: 1 / 1;
}

.aspect-2-3 {
  aspect-ratio: 2 / 3;
}

.media-container :deep(img),
.media-container :deep(video) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.placeholder {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: #f3f4f6;
}
</style>
