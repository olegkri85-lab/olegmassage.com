<template>
  <MediaContainer :ratio="ratio" :customRatio="customRatio">
    <div v-if="!src" class="placeholder">
      <div class="placeholder-content">
        <button class="play-button" aria-label="Play video">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <circle cx="12" cy="12" r="10" opacity="0.2" />
            <polygon points="10 8 16 12 10 16 10 8" />
          </svg>
        </button>
        <span v-if="label" class="placeholder-label">{{ label }}</span>
      </div>
    </div>
    <video
      v-else
      :src="src"
      :poster="poster"
      :controls="controls"
      :autoplay="autoplay"
      :loop="loop"
      :muted="muted"
      :preload="preload"
    >
      <slot />
    </video>
  </MediaContainer>
</template>

<script setup lang="ts">
defineProps<{
  src?: string
  poster?: string
  ratio?: '16/9' | '4/3' | '3/2' | '1/1' | '2/3' | 'custom'
  customRatio?: string
  label?: string
  controls?: boolean
  autoplay?: boolean
  loop?: boolean
  muted?: boolean
  preload?: 'auto' | 'metadata' | 'none'
}>()
</script>

<style scoped>
.placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1f2937 0%, #4b5563 100%);
  color: #f3f4f6;
}

.placeholder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.play-button {
  background: transparent;
  border: none;
  color: #f3f4f6;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
  padding: 0;
}

.play-button:hover {
  transform: scale(1.1);
  opacity: 0.8;
}

.placeholder-label {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  opacity: 0.6;
}
</style>
